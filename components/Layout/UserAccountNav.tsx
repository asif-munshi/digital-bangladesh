'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { LogOut, UserIcon } from 'lucide-react'
import { User } from '@/payload-types'
import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'

const UserAccountNav = ({ user }: { user: User }) => {
  const { signOut } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <UserIcon className="h-6 w-6 flex-shrink-0 text-gray-400 hover:cursor-pointer hover:text-gray-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 bg-white" align="end">
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/sell">Seller Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
