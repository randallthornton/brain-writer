import { Suspense } from "react";
import WritingSessions from "./sessions";

export default async function Sessions() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-screen-md flex-col items-center justify-center gap-12  px-4 py-16">
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-[5rem]">
          Sessions
        </h1>

        <Suspense fallback={<div>Loading...</div>}>
          {<WritingSessions />}
        </Suspense>
      </div>
    </main>
  );
}
