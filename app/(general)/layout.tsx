import { Navbar } from '../../components';

export default function GeneraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-4">{children}</main>
    </>
  );
}
