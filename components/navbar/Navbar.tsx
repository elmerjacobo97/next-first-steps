import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/pricing',
    label: 'Pricing',
  },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-800 bg-opacity-30 p-2 text-white">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <HomeIcon size="medium" />
          <span className="text-3xl font-bold">Home</span>
        </Link>
      </div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <ActiveLink key={item.href} {...item} />
        ))}
      </div>
    </nav>
  );
};
