"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Routes Example</h1>
      <ul className="space-y-2">
        {["electronics", "clothing", "books"].map((category) => (
          <li key={category}>
            <Link
              href={`/products/${category}`}
              className={`hover:underline ${activeCategory === category ? "text-green-500 font-bold" : "text-blue-500"}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Category
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
