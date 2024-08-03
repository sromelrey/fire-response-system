import Link from "next/link";
import NavLinks from "./nav-links";

import { PowerIcon, FireIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import clsx from 'clsx';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-zinc-950 px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Link
          href="/dashboard" // Assuming internal links
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-zinc-100 hover:bg-zinc-500 hover:text-zinc-100 md:flex-none md:justify-start md:p-2 md:px-3'
          )}
        >
          <h1 className="hidden text-lg md:block"> FIRE RESOND UNIT</h1>
          <FireIcon className="w-6" />
        </Link>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <form
        //   action={async () => {
        //     "use server";
        //     await signOut();
        //   }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
