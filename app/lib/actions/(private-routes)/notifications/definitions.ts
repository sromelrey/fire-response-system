// This file contains type definitions for your data.
export type Reports = {
  id: string;
  house_no: string;
  incident_date: string;
  coordinates: string;
  image: string;
};

export type ReportsState = {
  errors?: {
    house_no?: string[] | undefined;
    incident_date?: string[] | undefined;
    coordinates?: string[] | undefined;
    image?: string[] | undefined;
  };
  message?: string;
};
