import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href='/match'>
        <Button variant='default'>Create new match</Button>
      </Link>
    </>
  )
}
