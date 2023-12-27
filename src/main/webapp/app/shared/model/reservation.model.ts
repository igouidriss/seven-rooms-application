import dayjs from 'dayjs';
import { IResTag } from 'app/shared/model/res-tag.model';
import { IResPosticketsItem } from 'app/shared/model/res-postickets-item.model';
import { IResPosTicket } from 'app/shared/model/res-pos-ticket.model';
import { IResCustomField } from 'app/shared/model/res-custom-field.model';
import { IClient } from 'app/shared/model/client.model';

export interface IReservation {
  id?: number;
  resvId?: string | null;
  created?: string | null;
  updated?: string | null;
  deleted?: string | null;
  venueGroupClientId?: string | null;
  venueGroupId?: string | null;
  venueId?: string | null;
  date?: string | null;
  duration?: number | null;
  checkNumbers?: string | null;
  shiftCategory?: string | null;
  shiftPersistentId?: string | null;
  maxGuests?: number | null;
  mfratioMale?: number | null;
  mfratioFemale?: number | null;
  status?: string | null;
  statusDisplay?: string | null;
  statusSimple?: string | null;
  tableNumbers?: string | null;
  accessPersistentId?: string | null;
  arrivedGuests?: number | null;
  isvip?: boolean | null;
  bookedby?: string | null;
  clientReferenceCode?: string | null;
  lastname?: string | null;
  firstname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  postalCode?: string | null;
  state?: string | null;
  country?: string | null;
  loyaltyId?: string | null;
  loyaltyRank?: number | null;
  loyaltyTier?: string | null;
  notes?: string | null;
  arrivalTime?: string | null;
  seatedTime?: string | null;
  leftTime?: string | null;
  clientRequests?: string | null;
  comps?: number | null;
  compsPriceType?: string | null;
  costOption?: number | null;
  policy?: string | null;
  minPrice?: number | null;
  prePayment?: number | null;
  onsitePayment?: number | null;
  totalPayment?: number | null;
  paidBy?: string | null;
  servedBy?: string | null;
  rating?: number | null;
  problems?: string | null;
  autoAssignments?: string | null;
  externalClientId?: string | null;
  externalId?: string | null;
  externalReferenceCode?: string | null;
  externalUserId?: string | null;
  modifyReservationLink?: string | null;
  referenceCode?: string | null;
  reservationSmsOptin?: boolean | null;
  reservationType?: string | null;
  sendReminderEmail?: boolean | null;
  sendreminderSms?: boolean | null;
  sourceClientId?: string | null;
  userId?: string | null;
  userName?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  resTags?: IResTag[] | null;
  resPosticketsItems?: IResPosticketsItem[] | null;
  resPosTickets?: IResPosTicket[] | null;
  resCustomFields?: IResCustomField[] | null;
  client?: IClient | null;
}

export const defaultValue: Readonly<IReservation> = {
  isvip: false,
  reservationSmsOptin: false,
  sendReminderEmail: false,
  sendreminderSms: false,
};
