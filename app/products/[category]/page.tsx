"use client"

import Link from "next/link"
import { useState } from "react"

// This component will render at routes like /products/electronics, /products/clothing, etc.
export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  // Sample product data - in a real app, this would come from a database or API
  const products =
    {
      electronics: [
        { id: "1", name: "Laptop" },
        { id: "2", name: "Smartphone" },
        { id: "3", name: "Headphones" },
      ],
      clothing: [
        { id: "1", name: "T-Shirt" },
        { id: "2", name: "Jeans" },
        { id: "3", name: "Jacket" },
      ],
      books: [
        { id: "1", name: "Fiction Novel" },
        { id: "2", name: "Biography" },
        { id: "3", name: "Technical Book" },
      ],
    }[params.category] || []

  return (
    <div className="p-8">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4">
        Category: {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
      </h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/${params.category}/${product.id}`}
              className={`hover:underline ${selectedProduct === product.id ? "text-green-500 font-bold" : "text-blue-500"}`}
              onClick={() => setSelectedProduct(product.id)}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
