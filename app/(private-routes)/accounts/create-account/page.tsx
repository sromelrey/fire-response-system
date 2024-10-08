import React from 'react';
import Form from './form';

export default function Page() {
  return (
    <main className="flex items-center justify-center border-r-indigo-800 md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <Form />
      </div>
    </main>
  );
}
