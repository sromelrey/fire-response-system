'use server';
import { ReportsState } from './definitions';
import { getSession } from '@/app/lib/utils';
import { NotificationsSchema } from './schema';
import { fetchAccountByHouseId } from '@/app/lib/actions/(private-routes)/accounts/data';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
export async function addIncident(data: any) {
  const session = await getSession();
  const validatedFields = NotificationsSchema.safeParse({
    house_no: data.house_no
  });
  console.log({ data, validatedFields });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Task.'
    };
  }
  const { house_no } = validatedFields.data;

  const hasAccountInCoordinates = await fetchAccountByHouseId(house_no);
  console.log({ hasAccountInCoordinates });
  if (!hasAccountInCoordinates) {
    return {
      errors: {
        coordinates: [`There is no exising accounst that have house id of ${house_no}`]
      },
      message: 'Failed to insert reports. The house id does not exist in the database'
    };
  }
  const { coordinates, owner } = hasAccountInCoordinates;
  const image_url =
    'https://www.dkiservices.com/wp-content/uploads/2020/02/Is-Food-Safe-to-Eat-After-a-Fire_.jpg';
  try {
    await sql`INSERT INTO reports( house_no,owner, coordinates, image_url,date_and_time_recorded) 
                VALUES (${house_no},${owner},${coordinates},${image_url}, NOW())`;
  } catch (error) {
    console.log(error);
    return {
      message: 'reports creation failed'
    };
  }
}
