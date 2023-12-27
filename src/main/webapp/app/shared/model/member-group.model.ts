import { IClient } from 'app/shared/model/client.model';

export interface IMemberGroup {
  id?: number;
  client?: IClient | null;
}

export const defaultValue: Readonly<IMemberGroup> = {};
