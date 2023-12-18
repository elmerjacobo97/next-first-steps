import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Page',
  keywords: ['Contact', 'Contact Page'],
};

export default function Contact() {
  return (
    <>
      <h1 className="text-7xl font-bold ">Contact Page</h1>
    </>
  );
}
