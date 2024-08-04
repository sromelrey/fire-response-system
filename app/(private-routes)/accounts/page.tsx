import React, { Suspense } from 'react';
import { getAccounts } from '@/app/lib/actions/(private-routes)/accounts/data';
import Table from '@/app/components/table';

export default async function Page() {
  const accounts = await getAccounts();
  const headers = ['Home ID', 'Owner', 'Coordinates', 'Contact No.', 'Status', 'Date Created'];
  return (
    <main className="flex items-center justify-center border-r-indigo-800 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[700px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex w-auto flex-col space-y-3 rounded-lg border-violet-100 bg-violet-500 bg-opacity-20 p-10 shadow-violet-200">
          <Suspense>
            <Table headers={headers} data={accounts ?? []} />
          </Suspense>
          {/* <SubTaskForm params={params} />
      <SubtasksDetails
        subtask={task.subtasks || []}
        subtaskTree={task.subtaskTree || []}
      /> */}
        </div>
      </div>
    </main>
  );
}
