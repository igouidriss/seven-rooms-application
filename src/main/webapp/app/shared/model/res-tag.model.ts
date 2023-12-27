import dayjs from 'dayjs';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IResTag {
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
  reservation?: IReservation | null;
}

export const defaultValue: Readonly<IResTag> = {};
