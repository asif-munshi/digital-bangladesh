import Link from 'next/link'
import { Icons } from '../Icons'
import { NavItems } from './NavItems'
import { MaxWidthWraper } from './MaxWidthWraper'
import { buttonVariants } from '../ui/button'
import { Cart } from '../Cart/Cart'
import { getServerSideUser } from '@/lib/payload-utils'
import { cookies } from 'next/headers'

export const Navbar = async () => {
  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWraper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10 rounded-full" />
                </Link>
              </div>

              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? (
                    <div className="ml-4 flow-root lg:ml-6">
                      <Cart />
                    </div>
                  ) : (
                    <Link
                      href="/signin"
                      className={buttonVariants({ variant: 'default' })}
                    >
                      Signin
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  )
}
