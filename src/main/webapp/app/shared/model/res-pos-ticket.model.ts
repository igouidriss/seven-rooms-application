import dayjs from 'dayjs';
import { IReservation } from 'app/shared/model/reservation.model';

export interface IResPosTicket {
  id?: number;
  status?: string | null;
  adminFee?: number | null;
  code?: number | null;
  tableNo?: string | null;
  tax?: number | null;
  businessId?: number | null;
  localPosticketId?: string | null;
  employeeName?: string | null;
  total?: number | null;
  subtotal?: number | null;
  startTime?: string | null;
  serviceCharge?: number | null;
  endtime?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  reservation?: IReservation | null;
}

export const defaultValue: Readonly<IResPosTicket> = {};
