import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Pricing Page',
  keywords: ['Pricing Page', 'Pricing'],
};

export default function Pricing() {
  return (
    <>
      <h1 className="text-7xl font-bold">Pricing Page</h1>
    </>
  );
}
