import React from 'react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CreditCard, LogOut, PlusCircle, Settings, User } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Link from 'next/link'

export default function navbar() {
  return (
    <div className='bg-gray-900'>
      <div className='border-b'>
        <div className='flex h-16 items-center px-4'>
          <nav className={cn('flex items-center space-x-4 lg:space-x-6', 'mx-6')}>
            <Link href='/' className='text-sm font-medium transition-colors hover:text-primary'>
              Home
            </Link>
            <Link
              href='/match'
              className='text-sm font-medium transition-colors hover:text-primary'
            >
              Create match
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>shadcn</p>
                    <p className='text-xs leading-none text-muted-foreground'>m@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className='mr-2 h-4 w-4' />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className='mr-2 h-4 w-4' />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className='mr-2 h-4 w-4' />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <PlusCircle className='mr-2 h-4 w-4' />
                    <span>New Team</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className='mr-2 h-4 w-4' />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
