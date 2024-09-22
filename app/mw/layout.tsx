
import SupportChat from "@/components/SupportChat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@prisma/client";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session:any = await getServerSession(authOptions);
  const sessionUser= session.user as User
  return (
    <div>
      {children}
      <SupportChat user={sessionUser!} />
    </div>
  )
}
