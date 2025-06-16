import Counter from "./counter";
export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <Counter />
        </div>
    );
}
export const metadata = {
    title: 'Counter',
    description: 'A simple counter application built with React and Tailwind CSS.',
}; 