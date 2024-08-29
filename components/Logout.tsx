"use client"

import React from 'react'
import {motion} from "framer-motion"
import { signOut } from 'next-auth/react'

export default function Logout() {
  return (
    <div>
       <motion.button
        whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>signOut()}
            className="w-full bg-[red] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center"
        >
            Log out
        </motion.button>
    </div>
  )
}
