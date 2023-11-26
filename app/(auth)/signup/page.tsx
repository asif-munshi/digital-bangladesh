'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icons } from '@/components/Icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    // TODO: send the data
    console.log(email, password)
  }

  return (
    <>
      <div className="container relative flex flex-col items-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20 rounded-full" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <div className="flex flex-row items-center gap-1">
              <p className="text-muted-foreground">
                {'Already have an account?'}
              </p>
              <Link
                href="/signin"
                className={buttonVariants({
                  variant: 'link',
                  className: 'h-6 px-0 py-0',
                })}
              >
                Signin
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className={cn({
                      'focus-visible:ring-red-500': errors.email,
                    })}
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register('password')}
                    type="password"
                    placeholder="password"
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                  />
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
