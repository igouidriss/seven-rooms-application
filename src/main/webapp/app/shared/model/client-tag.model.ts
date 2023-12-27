import dayjs from 'dayjs';
import { IClient } from 'app/shared/model/client.model';

export interface IClientTag {
  id?: number;
  tag?: string | null;
  tagDisplay?: string | null;
  group?: string | null;
  groupDisplay?: string | null;
  color?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  client?: IClient | null;
}

export const defaultValue: Readonly<IClientTag> = {};
