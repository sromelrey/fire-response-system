// This file contains type definitions for your data.
export type Accounts = {
  id: string;
  date_created: string;
  owner: string;
  coordinates: string;
  contact: string;
  status: string;
};

export type AccountsState = {
  errors?: {
    owner?: string[] | undefined;
    coordinates?: string[] | undefined;
    contact?: string[] | undefined;
    status?: string[] | undefined;
  };
  message?: string;
};