export default async function Blog() {
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve("intentionally delayed");
        }, 2000)
    );

    // ❌ Intentional runtime error: trying to read `.foo` of undefined
    // const brokenObject: any = undefined;
    // const crash = brokenObject.foo; // This will crash the component

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="mt-4 text-lg">
                This is the Blog page. You can add your content here.
            </p>
        </div>
    );
}