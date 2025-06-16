export default function ArabicPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold">Arabic Language</h1>
            <p className="mt-4 text-lg">
                Reading in Arabic
            </p>
            <div className="mt-4">
                <a href="/articles/id?lang=english" className="text-blue-500 hover:underline">
                    Read in English
                </a> 
                <a href="/articles/id?lang=arabic" className="ml-4 text-blue-500 hover:underline">
                    Read in Arabic          
                </a>
                <a href="/articles/id?lang=urdu" className="ml-4 text-blue-500 hover:underline">
                    Read in Urdu
                </a>
                <a href='/articles/id?lang=pashto' className="ml-4 text-blue-500 hover:underline">
                    Read in Pashto
                </a>
                <a href="/articles/id?lang=pashto" className="ml-4 text-blue-500 hover:underline">
                    Read in Pashto
                </a>
                </div>
                </div>
    );
}

export const metadata = {
    title: 'Arabic Language',
    description: 'Reading articles in Arabic language.',
};