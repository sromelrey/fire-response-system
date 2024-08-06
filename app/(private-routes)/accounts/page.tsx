import React, { Suspense } from 'react';
import { getAccounts } from '@/app/lib/actions/(private-routes)/accounts/data';
import Table from '@/app/components/table';
import { TableRowSkeleton } from '@/app/components/skeletons';
import Search from '@/app/components/search';
import { PlusIcon } from '@heroicons/react/24/outline';
import  {Button} from '@/app/components/buttons';
import Link from 'next/link';

export default async function Page() {
  const accounts = await getAccounts();
  const headers = ['Home ID', 'Owner', 'Coordinates', 'Contact No.', 'Status', 'Date Created'];

  return (
    <main className="flex items-center justify-center border-r-indigo-800 md:h-screen">
      <div className="relative mx-auto flex w-auto max-w-[1200px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-row">
          <h1 className="mb-3 ml-2 mt-5 block h-14 text-left text-4xl font-medium text-black">
            Accounts
          </h1>
        </div>
        <div className="flex flex-col space-y-3 rounded-lg border-violet-100 bg-violet-500 bg-opacity-20 p-10 shadow-violet-200">
          <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder={`Search todo's by title...`} />
            <Button className="sw-auto justify-center bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600">
              <Link
                href="/accounts/create-account"
                className="rounded-lgpx-4 flex h-10 items-center text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="hidden md:block">Create Account</span>

                <PlusIcon className="ml-2 h-5 w-5 text-gray-50" />
              </Link>
            </Button>
          </div>
          <Suspense fallback={<TableRowSkeleton />}>
            <Table headers={headers} data={accounts ?? []} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
