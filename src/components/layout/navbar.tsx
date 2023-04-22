'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname])

  return (
    <div className='bg-gray-900'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
          <nav className={cn('flex items-center space-x-4 lg:space-x-6', 'mx-6')}>
            <Link href='/' className='text-sm font-medium' passHref>
              <Button variant={currentPath === '/' ? 'outline' : 'link'}>Home</Button>
            </Link>
            <Link href='/match' className='text-sm font-medium' passHref>
              <Button variant={currentPath === '/match' ? 'outline' : 'link'}>Match</Button>
            </Link>
          </nav>
          <div className='ml-auto flex items-center space-x-4'>
            <div>
              <Input
                type='search'
                placeholder='Search...'
                className='h-9 md:w-[100px] lg:w-[300px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
