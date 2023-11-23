import Link from 'next/link'
import { Icons } from '../Icons'
import { NavItems } from './NavItems'
import { MaxWidthWraper } from './MaxWidthWraper'
import { buttonVariants } from '../ui/button'

export const Navbar = () => {
  const user = null

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

              <div className="lg-ml-8 z-50 hidden lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/signin"
                      className={buttonVariants({ variant: 'default' })}
                    >
                      Signin
                    </Link>
                  )}
                  {user ? (
                    <div className="ml-4 flow-root lg:ml-6">
                      <Cart />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWraper>
      </header>
    </div>
  )
}
