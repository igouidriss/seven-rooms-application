import dayjs from 'dayjs';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IResPosticketsItem {
  id?: number;
  price?: number | null;
  name?: string | null;
  quantity?: number | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  reservation?: IReservation | null;
}

export const defaultValue: Readonly<IResPosticketsItem> = {};
