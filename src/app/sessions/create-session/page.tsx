import { Button } from "@mui/material";
import { api } from "~/trpc/server";

export default async function CreateWritingSession() {
  async function create(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    if (!title) {
      return;
    }
    await api.writtingSession.create({ title });
  }
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-slate-800 to-emerald-950 text-white">
      <div className="container mx-auto flex max-w-screen-md flex-col items-center justify-center gap-12  px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create a new Session
        </h1>
        <form action={create} className="flex flex-col gap-4">
          <input
            className="rounded border bg-slate-800 p-2 text-white"
            name="title"
            placeholder="Title"
          />
          <Button
            className="rounded bg-emerald-900 p-2 text-white"
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    </main>
  );
}
