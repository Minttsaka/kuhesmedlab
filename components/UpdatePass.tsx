import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import { Lock, Eye, EyeOff } from 'lucide-react'
import { getServerSession } from "next-auth"
import bcrypt from 'bcrypt';
import { redirect } from "next/navigation"

async function updatePassword(formData: FormData) {
  'use server'
  
  const session:any = await getServerSession(authOptions)
  const sessionUser = session.user as User

  const user = await prisma.user.findUnique({
    where:{
        id:sessionUser.id
    }
  })

  const currentPassword = formData.get('currentPassword') as string
  const newPassword = formData.get('newPassword') as string
  const confirmPassword = formData.get('confirmPassword') as string

  // Validate passwords
  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: 'All fields are required' }
  }

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: 'All fields are required' }
  }

  const isPasswordCorrect = await bcrypt.compare(currentPassword, user?.password!);
  
  if(!isPasswordCorrect){
    redirect('#passwords do not match')

  }

  if (newPassword !== confirmPassword) {
    redirect('#New passwords do not match')

  }

  if (newPassword.length < 4) {
    redirect('#New password must be at least 4 characters long')

  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const update = await prisma.user.update({
    where:{
        id:user?.id
    },
    data:{
        password:hashedPassword
    }
  })

  if(update){
    redirect('/mw/profile/#password-updated')
  }

  
}

export default function PasswordUpdateForm() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Update Password</CardTitle>
        <CardDescription>
          Change your password to keep your account secure
        </CardDescription>
      </CardHeader>
      <form action={updatePassword}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Current Password
            </Label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type="password"
                required
                className="pr-10"
              />
              <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              New Password
            </Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                className="pr-10"
              />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Confirm New Password
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="pr-10"
              />
              <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Update Password</Button>
        </CardFooter>
      </form>
    </Card>
  )
}