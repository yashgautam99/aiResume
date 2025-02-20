import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Floating Light Effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 opacity-20 blur-3xl animate-pulse"></div>

      {/* 404 Heading */}
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-lg">
        404
      </h1>

      {/* Page Not Found Text */}
      <h2 className="text-3xl font-semibold text-white mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-400 mt-4 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Return Home Button */}
      <div className="mt-8">
        <Link href="/">
          <Button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
