
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {

const session:any = await getServerSession(authOptions);
  const sessionUser= session.user as User

  try {
    const data  = await req.json();

    const { userId, message } = data

      if (!userId || !message) {
        return NextResponse.json({ message: 'Missing required fields' })
      }

      const newChat = await prisma.chat.create({
        data: {
          userId: userId,
          lastMessage: message,
          unreadCount: 1,
          messages: {
            create: {
              content: message,
              senderId: userId,
            },
          },
        },
        include: {
          user: {
            select: { id: true, name: true, image: true }
          },
        },
      })

      return NextResponse.json({
        id: newChat.id,
        user: newChat.user,
        lastMessage: newChat.lastMessage,
        unreadCount: newChat.unreadCount,
      })

  } catch (error: any) {
    console.log(error)
    throw new Error("Something went wrong");
  }
}

export async function GET() {
    try {
        const session:any = await getServerSession(authOptions);
        const sessionUser= session.user as User
    
        const chats = await prisma.chat.findMany({
          where: { userId: sessionUser.id },
          include: {
            user: {
              select: { id: true, name: true, image: true }
            },
            messages: {
              orderBy: { createdAt: 'desc' },
              take: 1,
            }
          }
        })
    
        const formattedChats = chats.map(chat => ({
          id: chat.id,
          user: chat.user,
          lastMessage: chat.messages[0]?.content || '',
          unreadCount: chat.unreadCount,
        }))
    
        return NextResponse.json(formattedChats)
      } catch (error) {
        return NextResponse.json({ message: 'Error fetching chats', error})
      }
}