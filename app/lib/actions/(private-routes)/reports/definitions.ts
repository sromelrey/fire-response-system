// This file contains type definitions for your data.
export type Reports = {
  id: string;
  house_id: string;
  coordinates: string;
  date_and_time_recorded: string;
  image_url: string;
};

export type ReportsState = {
  errors?: {
    owner?: string[] | undefined;
    coordinates?: string[] | undefined;
    contact?: string[] | undefined;
    status?: string[] | undefined;
  };
  message?: string;
};