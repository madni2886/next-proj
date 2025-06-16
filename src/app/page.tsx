import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg">
        This is the home page. You can add your content here.
      </p>
      <Link href="/counter" className="mt-4 text-blue-500 hover:underline">
        Go to Counter
      </Link>
      <Link href="/blog" className="mt-4 text-blue-500 hover:underline">
        Go to Blog
      </Link>
      <Link href="/madni" className="mt-4 text-blue-500 hover:underline">
        Go to Product
      </Link>
      <Link
        href="/articles/breaking-news-123?lang=eng"
        className="mt-4 text-blue-500 hover:underline"
      >
        read in english
      </Link>
      <Link
        href="/articles/breaking-news-123?lang=urdu"
        className="mt-4 text-blue-500 hover:underline"
      >
        read in urdu    
      </Link>
      <Link
        href="/articles/breaking-news-123?lang=pashto"    
        className="mt-4 text-blue-500 hover:underline"      
      >
        read in pashto    
      </Link>
      <Link
        href="/dashboard"
        className="mt-4 text-blue-500 hover:underline"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
