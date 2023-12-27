import dayjs from 'dayjs';
import { IClient } from 'app/shared/model/client.model';

export interface IClientVenueStats {
  id?: number;
  venueId?: string | null;
  avgRating?: number | null;
  bookedByNames?: string | null;
  lastVisitDate?: string | null;
  numRatings?: number | null;
  totalCancellations?: number | null;
  totalCovers?: number | null;
  totalNoShows?: number | null;
  totalSpend?: number | null;
  totalSpendLocal?: number | null;
  totalSpendLocalperCover?: number | null;
  totalSpendLocalPerVisit?: number | null;
  totalSpendperCover?: number | null;
  totalSpendPerVisit?: number | null;
  totalVisit?: number | null;
  venueMarketingOptin?: boolean | null;
  venueMarketingOptints?: string | null;
  techLineage?: string | null;
  techCreatedDate?: dayjs.Dayjs | null;
  techUpdatedDate?: dayjs.Dayjs | null;
  techMapping?: string | null;
  techComment?: string | null;
  client?: IClient | null;
}

export const defaultValue: Readonly<IClientVenueStats> = {
  venueMarketingOptin: false,
};
