'use client';
import { Button, SubmitButton, TextBox } from '@/app/components';
import { createAccount } from '@/app/lib/actions/(private-routes)/accounts/actions';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import SnackBar from '@/app/components/snackbar';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import router from 'next/router';

export default function Form() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createAccount, initialState);
  const [isDuplicate, setIsDuplicate] = useState(false);

  //   const hasErrors = Object.keys(state.errors?.date || {})?.length > 0;

  //   useEffect(() => {
  //     //* a state update for buttons if date is duplicated
  //     hasErrors && setIsDuplicate(true);
  //   }, [hasErrors]);

  return (
    <form
      action={dispatch}
      className="space-y-3 rounded-lg border-slate-100 bg-slate-900 bg-opacity-20 shadow-slate-200"
    >
      {/* TS validation for the objects  */}
      {/* {Object.keys(state.errors?.date || {})?.length > 0 &&
        (state?.errors?.date || []).map((error: string, index: number) => (
          <SnackBar message={error} type="error" key={index} />
        ))} */}
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <div className="flex flex-row justify-center text-center">
          <Link href="/signup" className="mb-3 ml-2 mt-5 block text-2xl font-medium text-white">
            Create Account
          </Link>
        </div>

        <div className="w-full">
          <div>
            <TextBox
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="owner"
              label="Owner"
              id="owner"
              type="text"
              name="owner"
              placeholder="Enter owner"
              isInline
              required
            />
          </div>
          <div>
            <TextBox
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="coordinates"
              label="Coordinates"
              id="coordinates"
              type="text"
              name="coordinates"
              placeholder="Enter coordinates"
              isInline
              required
            />
          </div>
          <div>
            <TextBox
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="contact"
              label="Contact"
              id="contact"
              type="text"
              name="contact"
              placeholder="Enter contact"
              isInline
              required
            />
          </div>
          <div>
            <TextBox
              // ! This component would be select instead of texts
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="status"
              label="Status"
              id="status"
              type="text"
              name="status"
              placeholder="Enter status"
              isInline
              required
            />
          </div>

          <SubmitButton
            disabled={isDuplicate}
            className="justify-center bg-slate-950 text-xl font-bold text-violet-100 hover:bg-violet-300"
          >
            Create the account
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
