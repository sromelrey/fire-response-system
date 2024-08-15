import React, { Suspense } from 'react';
import { getReports } from '@/app/lib/actions/(private-routes)/reports/data';
import Table from '@/app/components/table';
import { TableRowSkeleton } from '@/app/components/skeletons';
import Search from '@/app/components/search';
import Image from 'next/image';

export default async function Page() {
  const reports = await getReports();
  const headers = ['Report ID', 'Owner House ID', 'Coordinates', 'Date and Time Recorded', 'Image'];
  const headerKeyMap: { [key: string]: string } = {
    'Report ID': 'id',
    'Owner House ID': 'house_id',
    Coordinates: 'coordinates',
    'Date and Time Recorded': 'date_and_time_recorded',
    Image: 'image_url'
  };
  return (
    <main className="flex items-center justify-center border-r-indigo-800 md:h-screen">
      <div className="relative mx-auto flex w-auto max-w-[1200px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex flex-row">
          <h1 className="mb-3 ml-2 mt-5 block h-14 text-left text-4xl font-medium text-black">
            Reports
          </h1>
        </div>
        <div className="flex flex-col space-y-3 rounded-lg border-violet-100 bg-violet-500 bg-opacity-20 p-10 shadow-violet-200">
          <Suspense fallback={<TableRowSkeleton />}>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
              <Search placeholder={`Search reports's by title...`} />
            </div>
            <Table headers={headers} data={reports ?? []} headerKeyMap={headerKeyMap ?? {}} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
