import Link from "next/link"

// This component will render at routes like /products/electronics/1, /products/clothing/2, etc.
export default function ProductPage({ params }: { params: { category: string; id: string } }) {
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
