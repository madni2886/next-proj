"use client";

import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ErrorBoundary({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold">Error in review id</h1>
    <button onClick={reload} className="px-4 py-2 text-white bg-blue-500 rounded">
        Reload
      </button>
    </div>
  );
}
