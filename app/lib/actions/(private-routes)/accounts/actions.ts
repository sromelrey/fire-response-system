import { Accounts, AccountsState } from './definitions';
import { getSession } from '@/app/lib/utils';
import { AccountsSchema } from './schema';
import { fetchAccountByCoordinates } from './data';
import { sql } from '@vercel/postgres';

export async function createAccount(prevState: AccountsState, formData: any) {
  const session = await getSession();
  const userId = session?.id;

  const validatedFields = AccountsSchema.safeParse({
    owner: formData?.owner,
    coordinates: formData?.coordinates,
    contact: formData?.contact,
    status: formData?.status
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Task.'
    };
  }

  const { owner, coordinates, contact, status } = validatedFields.data;

  const hasAccountInCoordinates = await fetchAccountByCoordinates(coordinates);

  if (hasAccountInCoordinates) {
    return {
      errors: {
        coordinates: ['There is already account exists in this coordinates.']
      },
      message: 'Failed to create account. The entered coordinates already have an existing account.'
    };
  }

  try {
    const responseData = await sql`INSERT INTO accounts( owner, coordinates, contact_no, status) 
                VALUES (${owner},${coordinates},${contact},${status})
    RETURNING id, owner, coordinates, contact_no, status, date_created;`;

    return {
      message: 'Account created successfully'
    };
  } catch (error) {
    return {
      message: 'Account creation failed'
    };
  }
}
