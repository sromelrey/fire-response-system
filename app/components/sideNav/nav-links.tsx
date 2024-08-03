'use client';

import { UserGroupIcon, HomeIcon, BellIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Reports', href: '/reports', icon: DocumentTextIcon },
  { name: 'Account', href: '/account', icon: UserGroupIcon },
  { name: 'Notification', href: '/notification', icon: BellIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon }
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href} // Assuming internal links
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-zinc-100 hover:bg-zinc-500 hover:text-zinc-100 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-zinc-500 text-zinc-100': pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
