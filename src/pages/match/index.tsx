import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app using the components.',
}

export default function index() {
  return (
    <div className='flex flex-row flex-wrap gap-5 w-[100%]'>
      <Card className='w-[100%]'>
        <CardHeader>
          <CardTitle>Match settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Title</Label>
                <Input id='name' placeholder='Name of the match' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Match length</Label>
                <Select defaultValue='1'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select match length' />
                    <SelectContent position='popper'>
                      <SelectItem value='1'>Best of 1</SelectItem>
                      <SelectItem value='3'>Best of 3</SelectItem>
                      <SelectItem value='5'>Best of 5</SelectItem>
                      <SelectItem value='7'>Best of 7</SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className='flex flex-row gap-5 w-[100%] flex-wrap sm:flex-nowrap'>
        <Card className='w-[100%]'>
          <CardHeader>
            <CardTitle>Blue Team</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Name of the team' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='logo'>Logo</Label>
                  <Input id='logo' placeholder='Url to logo' />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className='w-[100%]'>
          <CardHeader>
            <CardTitle>Orange Team</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Name of the team' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='logo'>Logo</Label>
                  <Input id='logo' placeholder='Url to logo' />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Button className='ml-auto bg-green-500 hover:bg-green-700 text-color-white'>
        Save and Create
      </Button>
    </div>
  )
}
