'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Product } from '@/payload-types'
import { PRODUCT_CATEGORIES } from '@/config'
import { cn, formatPrice } from '@/lib/utils'
import ProductPlaceholder from './ProductPlaceholder'
import ImageSlider from './ImageSlider'
import { boolean } from 'zod'

interface ProductListingProps {
  product: Product | null
  index: number
}

const ProductListing = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) return <ProductPlaceholder />

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  const validUrls = product.images
    .map(({ image }) => (typeof image === 'string' ? image : image.url))
    .filter(Boolean) as string[]

  if (product || isVisible) {
    return (
      <Link
        href={`/products/${product.id}`}
        className={cn('group/main invisible h-full w-full cursor-pointer', {
          'visible animate-in fade-in-5': isVisible,
        })}
      >
        <div className="flex w-full flex-col">
          <ImageSlider urls={validUrls} />

          <h3 className="mt-4 text-sm font-medium text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1b text-sm font-medium text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    )
  }
}

export default ProductListing
