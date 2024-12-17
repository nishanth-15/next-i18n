import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1>Abouts Us</h1>
      <div className="text-center">
        <p className="font-semibold">Our Address:</p>
        <p>Nameless street,</p>
        <p>Some City, Some State</p>
      </div>
      <Link href="/">Back</Link>
    </main>
  );
}
