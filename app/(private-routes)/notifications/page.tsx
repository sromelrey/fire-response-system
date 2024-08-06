import React from 'react';
import { UserGroupIcon, BellIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-row">
          <h1 className="mb-3 ml-2 mt-5 block h-14 text-left text-4xl font-medium text-black">Notifications</h1>
        </div>
      </div>
    </main>
  );
}

export default page;
