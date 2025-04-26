"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

// This component will render at routes like /products/electronics/1, /products/clothing/2, etc.
export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Sample product data - in a real app, this would come from a database or API
  const productDetails = {
    electronics: {
      "1": { name: "Laptop", description: "A powerful laptop for work and gaming" },
      "2": { name: "Smartphone", description: "Latest smartphone with advanced features" },
      "3": { name: "Headphones", description: "Noise-cancelling wireless headphones" },
    },
    clothing: {
      "1": { name: "T-Shirt", description: "Comfortable cotton t-shirt" },
      "2": { name: "Jeans", description: "Classic blue jeans" },
      "3": { name: "Jacket", description: "Waterproof jacket for all seasons" },
    },
    books: {
      "1": { name: "Fiction Novel", description: "Bestselling fiction novel" },
      "2": { name: "Biography", description: "Biography of a famous person" },
      "3": { name: "Technical Book", description: "In-depth technical guide" },
    },
  }[params.category]?.[params.id]

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-20 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    )
  }

  if (!productDetails) {
    return (
      <div className="p-8">
        <Link href={`/products/${params.category}`} className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to {params.category}
        </Link>
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
      </div>
    )
  }

  return (
    <div className="p-8">
      <Link href={`/products/${params.category}`} className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to {params.category}
      </Link>
      <h1 className="text-2xl font-bold mb-4">{productDetails.name}</h1>
      <p className="mb-4">Category: {params.category}</p>
      <p className="mb-4">Product ID: {params.id}</p>
      <p>{productDetails.description}</p>
    </div>
  )
}
