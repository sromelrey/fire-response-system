'use server';

import { sql } from '@vercel/postgres';
import type { Accounts } from './definitions';
import { encrypt } from '../../../utils';
import { cookies } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';

export async function getAccounts(): Promise<Accounts[] | undefined> {
  try {
    const accounts = await sql<Accounts>`SELECT * FROM accounts;`;

    // const now = new Date();
    // const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    return accounts.rows;
  } catch (error) {
    console.log(error);
    console.error('Failed to fetch accounts:', error);
    throw new Error('Failed to fetch accounts.');
  }
}

export async function fetchAccountByCoordinates(coordinates: string) {
  noStore();
  const fetchCoordinates = await sql`SELECT * FROM accounts WHERE coordinates=${coordinates}`;
  return fetchCoordinates.rows.length > 0;
}