import ClientComponent from "@/components/client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold">Welcome to the home page!</h1>
      <ClientComponent />
      <Link href="/about">About us</Link>
    </main> 
  );
}
