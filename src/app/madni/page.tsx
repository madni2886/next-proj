import Link from "next/link";
export const metadata = {
    title: 'Madni',
};
export default function MadniPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold">Madni</h1>
        <p className="mt-4 text-lg">
            This is the Madni page. You can add your content here.
        </p>
        <Link  href="madni/products" className="mt-4 text-blue-500 hover:underline">
            Go to Products
        </Link>
        </div>
    );
    }