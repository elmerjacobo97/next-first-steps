import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About Page', 'SEO', 'Next.js'],
};

export default function About() {
  return (
    <>
      <h1 className="text-7xl font-bold ">About Page</h1>
    </>
  );
}
