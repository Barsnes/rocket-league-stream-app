import React from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {children}
      </main>
    </>
  )
}
