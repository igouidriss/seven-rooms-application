import dayjs from 'dayjs';
import { IClientPhoto } from 'app/shared/model/client-photo.model';
import { IClientVenueStats } from 'app/shared/model/client-venue-stats.model';
import { ICustomField } from 'app/shared/model/custom-field.model';
import { IClientTag } from 'app/shared/model/client-tag.model';
import { IReservation } from 'app/shared/model/reservation.model';
import { IMemberGroup } from 'app/shared/model/member-group.model';

export interface IClient {
  id?: number;
  clientId?: string | null;
  createdDate?: string | null;
  updatedDate?: string | null;
  deletedDate?: string | null;
  lastname?: string | null;
  firstname?: string | null;
  gender?: string | null;
  salutation?: string | null;
  title?: string | null;
  birthdayDay?: number | null;
  birthdayMonth?: number | null;
  birthdayAltMonth?: number | null;
  anniversaryDay?: number | null;
  anniversaryMonth?: number | null;
  company?: string | null;
  email?: string | null;
  emailAlt?: string | null;
  phoneNumber?: string | null;
  phoneNumberlocale?: string | null;
  phoneNumberalt?: string | null;
  phoneNumberaltlocale?: string | null;
  address?: string | null;
  address2?: string | null;
  city?: string | null;
  postalCode?: string | null;
  state?: string | null;
  country?: string | null;
  isContactPrivate?: boolean | null;
  isOnetimeGuest?: boolean | null;
  status?: string | null;
  loyaltyId?: string | null;
  loyaltyRank?: number | null;
  loyaltyTier?: string | null;
  marketingOptin?: boolean | null;
  marketingOptints?: string | null;
  marketingOptOutts?: string | null;
  hasBillingProfile?: boolean | null;
  notes?: string | null;
  privateNotes?: string | null;
  tags?: string | null;
  totalVisits?: number | null;
  totalCovers?: number | null;
  totalCancellations?: number | null;
  totalNoShows?: number | null;
  totalSpend?: number | null;
  totalSpendPerCover?: number | null;
  totalspendPerVisit?: number | null;
  avgRating?: number | null;
  referenceCode?: string | null;
  externalUserId?: string | null;
  venueGroupId?: string | null;
  birthdayAltDay?: number | null;
  userId?: string | null;
  userName?: string | null;
  totalOrderCount?: number | null;
  preferredLanguageCode?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  clientPhoto?: IClientPhoto | null;
  clientVenueStats?: IClientVenueStats | null;
  customFields?: ICustomField[] | null;
  clientTags?: IClientTag[] | null;
  reservations?: IReservation[] | null;
  memberGroups?: IMemberGroup[] | null;
}

export const defaultValue: Readonly<IClient> = {
  isContactPrivate: false,
  isOnetimeGuest: false,
  marketingOptin: false,
  hasBillingProfile: false,
};
