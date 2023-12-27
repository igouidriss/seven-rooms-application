import dayjs from 'dayjs';
import { IClient } from 'app/shared/model/client.model';

export interface IClientPhoto {
  id?: number;
  clientId?: string | null;
  large?: string | null;
  largeHeight?: number | null;
  largeWidth?: number | null;
  medium?: string | null;
  mediumHeight?: number | null;
  mediumWidth?: number | null;
  small?: string | null;
  smallHeight?: number | null;
  smallWidth?: number | null;
  raw?: string | null;
  cropx?: number | null;
  cropy?: number | null;
  cropHeight?: number | null;
  cropWidth?: number | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  client?: IClient | null;
}

export const defaultValue: Readonly<IClientPhoto> = {};
