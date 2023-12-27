import client from 'app/entities/client/client.reducer';
import memberGroup from 'app/entities/member-group/member-group.reducer';
import clientTag from 'app/entities/client-tag/client-tag.reducer';
import customField from 'app/entities/custom-field/custom-field.reducer';
import clientVenueStats from 'app/entities/client-venue-stats/client-venue-stats.reducer';
import clientPhoto from 'app/entities/client-photo/client-photo.reducer';
import reservation from 'app/entities/reservation/reservation.reducer';
import resCustomField from 'app/entities/res-custom-field/res-custom-field.reducer';
import resPosTicket from 'app/entities/res-pos-ticket/res-pos-ticket.reducer';
import resPosticketsItem from 'app/entities/res-postickets-item/res-postickets-item.reducer';
import resTag from 'app/entities/res-tag/res-tag.reducer';
import tableNumber from 'app/entities/table-number/table-number.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  client,
  memberGroup,
  clientTag,
  customField,
  clientVenueStats,
  clientPhoto,
  reservation,
  resCustomField,
  resPosTicket,
  resPosticketsItem,
  resTag,
  tableNumber,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
