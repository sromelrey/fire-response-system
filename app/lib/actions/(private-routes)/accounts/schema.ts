import { z } from 'zod';

export const AccountsSchema = z.object({
  owner: z.string({
    invalid_type_error: 'Please add a owner.'
  }),
  coordinates: z.string({
    invalid_type_error: 'Please add a coordinates.'
  }),
  contact: z.string({
    invalid_type_error: 'Please add a Contact Number.'
  }),
  status: z.string({
    invalid_type_error: 'Please set the account status.'
  })
});
