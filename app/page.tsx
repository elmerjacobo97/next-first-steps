import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-3xl font-bold">Hello World!</span>
      <Link href="/about" className="text-3xl font-bold underline hover:text-blue-600 transition mt-4">
        Ir a AboutPage
      </Link>
    </main>
  );
}
