'use server';

import { sql } from '@vercel/postgres';
import type { Reports } from './definitions';
import { encrypt } from '../../../utils';
import { cookies } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';

export async function getReports(): Promise<Reports[] | undefined> {
  try {
    const reports = await sql<Reports>`SELECT * FROM reports;`;

    // const now = new Date();
    // const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    return reports.rows;
  } catch (error) {
    console.log(error);
    console.error('Failed to fetch reports:', error);
    throw new Error('Failed to fetch reports.');
  }
}

// export async function fetchAccountByCoordinates(coordinates: string) {
//   noStore();
//   const fetchCoordinates = await sql`SELECT * FROM accounts WHERE coordinates=${coordinates}`;
//   return fetchCoordinates.rows.length > 0;
// }