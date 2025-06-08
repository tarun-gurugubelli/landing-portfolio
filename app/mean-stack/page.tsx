import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MeanStackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 flex items-center justify-center">
      <div className="text-center text-black dark:text-white p-8 transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-4">MEAN Stack Portfolio</h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Your MEAN Stack projects and expertise showcase goes here.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Hub
        </Link>
      </div>
    </div>
  )
}
