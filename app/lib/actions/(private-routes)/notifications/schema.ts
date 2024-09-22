import { z } from 'zod';

export const NotificationsSchema = z.object({
  house_no: z.string({
    invalid_type_error: 'House Number is Required!'
  })
});
