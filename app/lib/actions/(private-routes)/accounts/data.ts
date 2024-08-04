'use server';

import { sql } from '@vercel/postgres';
import type { Accounts } from './definitions';
import { encrypt } from '../../../utils';
import { cookies } from 'next/headers';

export async function getAccounts(): Promise<Accounts[] | undefined> {
  try {
    const accounts = await sql<Accounts>`SELECT * FROM accounts;`;
    // const accountsData = accounts.rows;
    const now = new Date();
    const expires = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    // const sessionData = await encrypt({ accountsData, expires });

    // await cookies().set('accounts', sessionData as string, {
    //   expires,
    //   httpOnly: true
    // });
    // const homeOwners =  accounts.rows.map(row =>{
    //   return {
    //     home_id: row
    //   }
    // })
    return accounts.rows;
  } catch (error) {
    console.log(error);
    console.error('Failed to fetch accounts:', error);
    throw new Error('Failed to fetch accounts.');
  }
}
