"use client";
import { TextBox, Button, SubmitButton } from "@/app/components";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions/(auth)/sign-in/actions";

export default function Form() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <div className="flex flex-row justify-center text-center">
          <h1
            // href='/signup'
            className="mb-3 ml-2 mt-5 block text-center text-2xl font-medium text-black"
          >
            FIRE RESPOND SYSTEM
          </h1>
        </div>

        <div className="w-full">
          <div>
            <TextBox
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="email"
              label="Email"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              isInline
              required
              icon={
                <AtSymbolIcon
                  width={18}
                  height={18}
                  className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              }
            />
          </div>
          <div className="mt-4">
            <TextBox
              classLabel="mb-3 mt-5 block text-xs font-medium text-white"
              classInput="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              htmlFor="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              isInline
              required
              minLength={6}
              icon={
                <KeyIcon
                  width={18}
                  height={18}
                  className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                />
              }
            />
          </div>
        </div>

        <SubmitButton className="justify-center bg-violet-500 text-xl font-bold text-violet-100 hover:bg-violet-300">Sign in</SubmitButton>
        <div className="relative">
          <Link href="/forgot-password" className="mb-3 ml-2 mt-5 block text-center text-xl text-violet-500">
            Forgot Password ?
          </Link>
        </div>
        <div className="relative">
          <div className="flex flex-row justify-center text-center">
            <Link
              href={`/signup`}
              shallow
              className="flex h-10 w-full items-center justify-center rounded-lg bg-violet-800 text-lg font-medium text-violet-200 hover:bg-violet-600"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
