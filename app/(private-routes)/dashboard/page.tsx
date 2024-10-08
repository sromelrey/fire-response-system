'use server';
import React from 'react';
import { UserGroupIcon, BellIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Modal } from '@/app/components';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-row">
          <h1 className="mb-3 ml-2 mt-5 block h-14 text-left text-4xl font-medium text-black">
            Dashboard
          </h1>
        </div>
        <div className="grid w-full grid-cols-12 gap-6">
          <Link
            href="/reports" // Assuming internal links
            className="col-span-4 flex h-[200px] justify-center rounded-3xl bg-violet-500 p-6 text-center align-middle text-white"
          >
            <DocumentTextIcon className="w-20" />
            <div className="flex flex-row items-center justify-center">
              <h1 className="mb-3 ml-2 mt-5 block h-14 text-center text-4xl font-medium text-white">
                REPORT
              </h1>
            </div>
          </Link>

          <Link
            href="/accounts" // Assuming internal links
            className="col-span-4 flex h-[200px] justify-center rounded-3xl bg-amber-500 p-6 text-center align-middle text-white"
          >
            <UserGroupIcon className="w-20" />
            <div className="flex flex-row items-center justify-center">
              <h1 className="mb-3 ml-2 mt-5 block h-14 text-center text-4xl font-medium text-white">
                ACCOUNT
              </h1>
            </div>
          </Link>
          <Link
            href="/notification" // Assuming internal links
            className="col-span-4 flex h-[200px] justify-center rounded-3xl bg-cyan-500 p-6 text-center align-middle text-white"
          >
            <BellIcon className="w-20" />
            <div className="flex flex-row items-center justify-center">
              <h1 className="mb-3 ml-2 mt-5 block h-14 text-center text-4xl font-medium text-white">
                NOTIFICATION
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <Modal isOpen={true} className="justify-center rounded-xl bg-red-700">
        <div className="flex flex-col content-center">
          <div className="mb-4 flex flex-col rounded border-b-8 border-dotted text-center">
            <ExclamationTriangleIcon className="h-28 w-28 self-center text-white" />
          </div>

          <div className="mx-12 flex flex-col rounded-xl border-8 border-solid border-white p-4 text-center">
            <h1 className="text-4xl font-extrabold">Fire Detected</h1>
            <h1 className="text-4xl font-extrabold">Code</h1>
            <h1 className="text-4xl font-extrabold">114</h1>
          </div>
          <div className="mt-8 flex flex-col rounded text-center">
            <h1 className="text-4xl font-extrabold"> Alpha</h1>
            <h1 className="text-4xl font-extrabold">Cebu City</h1>
            <h1 className="text-4xl font-extrabold underline">34.0522, -118.2437</h1>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default page;
