import dayjs from 'dayjs';
import { IClient } from 'app/shared/model/client.model';

export interface ICustomField {
  id?: number;
  systemName?: string | null;
  displayOrder?: number | null;
  name?: string | null;
  value?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  client?: IClient | null;
}

export const defaultValue: Readonly<ICustomField> = {};
