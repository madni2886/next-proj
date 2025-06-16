import Link from "next/link";
export default function NewsArticle() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold">News Article Id</h1>
            <p className="mt-4 text-lg">
               Reading in language
            </p>
        <div className="mt-4">
            <Link href="/articles/id?lang=english" className="text-blue-500 hover:underline">
                Read in English
            </Link> 
            <Link href="/articles/id?lang=arabic" className="ml-4 text-blue-500 hover:underline">
                Read in Arabic          
            </Link>
            <Link href="/articles/id?lang=urdu" className="ml-4 text-blue-500 hover:underline">
                Read in Urdu
            </Link>
            <Link href='/articles/id/arabic' className="ml-4 text-blue-500 hover:underline">
                Read in Pashto
            </Link>
            <Link href="/articles/id?lang=pashto" className="ml-4 text-blue-500 hover:underline">
                Read in Pashto
            </Link>
            <Link href="/articles/id?lang=turkish" className="ml-4 text-blue-500 hover:underline">
                Read in Turkish
            </Link>
        </div>
        </div>
        
    );
}