import { MaxWidthWraper } from '@/components/Layout/MaxWidthWraper'

export default function Home() {
  return (
    <MaxWidthWraper>
      <div className="mx-auto flex max-w-3xl flex-col items-start py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Your marketplace for high-queality{' '}
          <span className="text-blue-600">digital assets.</span>
        </h1>
      </div>
    </MaxWidthWraper>
  )
}
