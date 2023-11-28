import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { MaxWidthWraper } from '@/components/Layout/MaxWidthWraper'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import ProductReel from '@/components/Product/ProductReel'

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: 'Get your assets delivered to your email in seconds.',
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards.',
  },
  {
    name: 'For The Planet',
    icon: Leaf,
    description:
      'We`ve pledged to donate 1% of your company`s income to environmental organizations for a sustainable future.',
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWraper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            Your marketplace for high-queality{' '}
            <span className="text-blue-600">digital assets.</span>
          </h1>
          <p className="max-w-prose text-lg leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
            Welcome to Digital Bangladesh. Every asset on our platform is
            verified by our team to ensure our highest quality standards.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: 'desc', limit: 4 }}
          title={'Brand new'}
          href={'/products'}
        />
      </MaxWidthWraper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWraper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-2xl font-medium tracking-tight text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWraper>
      </section>
    </>
  )
}
