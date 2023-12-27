import dayjs from 'dayjs';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IResCustomField {
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
  reservation?: IReservation | null;
}

export const defaultValue: Readonly<IResCustomField> = {};
