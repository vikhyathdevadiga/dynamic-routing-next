import Link from "next/link"

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Routes Example</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/products/electronics" className="text-blue-500 hover:underline">
            Electronics Category
          </Link>
        </li>
        <li>
          <Link href="/products/clothing" className="text-blue-500 hover:underline">
            Clothing Category
          </Link>
        </li>
        <li>
          <Link href="/products/books" className="text-blue-500 hover:underline">
            Books Category
          </Link>
        </li>
      </ul>
    </div>
  )
}
