import React from 'react';
import { UserGroupIcon, BellAlertIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function page() {
  const notifications = [
    {
      name: 'Alpha',
      date: '2024-08-20',
      coordinate: '34.0522, -118.2437'
    },
    {
      name: 'Bravo',
      date: '2024-07-15',
      coordinate: '51.5074, -0.1278'
    },
    {
      name: 'Charlie',
      date: '2024-05-30',
      coordinate: '35.6895, 139.6917'
    },
    {
      name: 'Delta',
      date: '2024-03-22',
      coordinate: '40.7128, -74.0060'
    },
    {
      name: 'Echo',
      date: '2024-09-10',
      coordinate: '48.8566, 2.3522'
    }
  ];
  return (
    <main className="flex items-center justify-center px-4 py-16 md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5">
        <div className="flex flex-row">
          <h1 className="mb-3 ml-2 mt-5 block h-14 text-left text-4xl font-medium text-black">
            Notifications
          </h1>
        </div>
        {notifications.map((data, index) => (
          <div
            key={index}
            className="flex flex-row justify-evenly justify-items-center gap-8 rounded-xl border-2 border-blue-950 bg-red-500 p-4 shadow-sm"
          >
            <BellAlertIcon className="center h-28 w-28 text-center text-white" />

            <div className="grid grid-cols-12">
              <p className={`col-span-12 w-full self-center p-4 text-center text-2xl`}>
                {data.name}
              </p>
              <p className={`col-span-12 w-full p-4 text-center text-2xl`}> {data.date}</p>
              <p className={`col-span-12 w-full p-4 text-center text-2xl`}>{data.coordinate}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default page;
