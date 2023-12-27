import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './client.reducer';

export const ClientDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const clientEntity = useAppSelector(state => state.client.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.client.detail.title">Client</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientEntity.id}</dd>
          <dt>
            <span id="clientId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientId">Client Id</Translate>
            </span>
          </dt>
          <dd>{clientEntity.clientId}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>{clientEntity.createdDate}</dd>
          <dt>
            <span id="updatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.updatedDate">Updated Date</Translate>
            </span>
          </dt>
          <dd>{clientEntity.updatedDate}</dd>
          <dt>
            <span id="deletedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.deletedDate">Deleted Date</Translate>
            </span>
          </dt>
          <dd>{clientEntity.deletedDate}</dd>
          <dt>
            <span id="lastname">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.lastname">Lastname</Translate>
            </span>
          </dt>
          <dd>{clientEntity.lastname}</dd>
          <dt>
            <span id="firstname">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.firstname">Firstname</Translate>
            </span>
          </dt>
          <dd>{clientEntity.firstname}</dd>
          <dt>
            <span id="gender">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.gender">Gender</Translate>
            </span>
          </dt>
          <dd>{clientEntity.gender}</dd>
          <dt>
            <span id="salutation">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.salutation">Salutation</Translate>
            </span>
          </dt>
          <dd>{clientEntity.salutation}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.title">Title</Translate>
            </span>
          </dt>
          <dd>{clientEntity.title}</dd>
          <dt>
            <span id="birthdayDay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayDay">Birthday Day</Translate>
            </span>
          </dt>
          <dd>{clientEntity.birthdayDay}</dd>
          <dt>
            <span id="birthdayMonth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayMonth">Birthday Month</Translate>
            </span>
          </dt>
          <dd>{clientEntity.birthdayMonth}</dd>
          <dt>
            <span id="birthdayAltMonth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayAltMonth">Birthday Alt Month</Translate>
            </span>
          </dt>
          <dd>{clientEntity.birthdayAltMonth}</dd>
          <dt>
            <span id="anniversaryDay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.anniversaryDay">Anniversary Day</Translate>
            </span>
          </dt>
          <dd>{clientEntity.anniversaryDay}</dd>
          <dt>
            <span id="anniversaryMonth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.anniversaryMonth">Anniversary Month</Translate>
            </span>
          </dt>
          <dd>{clientEntity.anniversaryMonth}</dd>
          <dt>
            <span id="company">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.company">Company</Translate>
            </span>
          </dt>
          <dd>{clientEntity.company}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.email">Email</Translate>
            </span>
          </dt>
          <dd>{clientEntity.email}</dd>
          <dt>
            <span id="emailAlt">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.emailAlt">Email Alt</Translate>
            </span>
          </dt>
          <dd>{clientEntity.emailAlt}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{clientEntity.phoneNumber}</dd>
          <dt>
            <span id="phoneNumberlocale">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberlocale">Phone Numberlocale</Translate>
            </span>
          </dt>
          <dd>{clientEntity.phoneNumberlocale}</dd>
          <dt>
            <span id="phoneNumberalt">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberalt">Phone Numberalt</Translate>
            </span>
          </dt>
          <dd>{clientEntity.phoneNumberalt}</dd>
          <dt>
            <span id="phoneNumberaltlocale">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberaltlocale">Phone Numberaltlocale</Translate>
            </span>
          </dt>
          <dd>{clientEntity.phoneNumberaltlocale}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.address">Address</Translate>
            </span>
          </dt>
          <dd>{clientEntity.address}</dd>
          <dt>
            <span id="address2">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.address2">Address 2</Translate>
            </span>
          </dt>
          <dd>{clientEntity.address2}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.city">City</Translate>
            </span>
          </dt>
          <dd>{clientEntity.city}</dd>
          <dt>
            <span id="postalCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.postalCode">Postal Code</Translate>
            </span>
          </dt>
          <dd>{clientEntity.postalCode}</dd>
          <dt>
            <span id="state">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.state">State</Translate>
            </span>
          </dt>
          <dd>{clientEntity.state}</dd>
          <dt>
            <span id="country">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.country">Country</Translate>
            </span>
          </dt>
          <dd>{clientEntity.country}</dd>
          <dt>
            <span id="isContactPrivate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.isContactPrivate">Is Contact Private</Translate>
            </span>
          </dt>
          <dd>{clientEntity.isContactPrivate ? 'true' : 'false'}</dd>
          <dt>
            <span id="isOnetimeGuest">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.isOnetimeGuest">Is Onetime Guest</Translate>
            </span>
          </dt>
          <dd>{clientEntity.isOnetimeGuest ? 'true' : 'false'}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.status">Status</Translate>
            </span>
          </dt>
          <dd>{clientEntity.status}</dd>
          <dt>
            <span id="loyaltyId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyId">Loyalty Id</Translate>
            </span>
          </dt>
          <dd>{clientEntity.loyaltyId}</dd>
          <dt>
            <span id="loyaltyRank">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyRank">Loyalty Rank</Translate>
            </span>
          </dt>
          <dd>{clientEntity.loyaltyRank}</dd>
          <dt>
            <span id="loyaltyTier">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyTier">Loyalty Tier</Translate>
            </span>
          </dt>
          <dd>{clientEntity.loyaltyTier}</dd>
          <dt>
            <span id="marketingOptin">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptin">Marketing Optin</Translate>
            </span>
          </dt>
          <dd>{clientEntity.marketingOptin ? 'true' : 'false'}</dd>
          <dt>
            <span id="marketingOptints">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptints">Marketing Optints</Translate>
            </span>
          </dt>
          <dd>{clientEntity.marketingOptints}</dd>
          <dt>
            <span id="marketingOptOutts">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptOutts">Marketing Opt Outts</Translate>
            </span>
          </dt>
          <dd>{clientEntity.marketingOptOutts}</dd>
          <dt>
            <span id="hasBillingProfile">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.hasBillingProfile">Has Billing Profile</Translate>
            </span>
          </dt>
          <dd>{clientEntity.hasBillingProfile ? 'true' : 'false'}</dd>
          <dt>
            <span id="notes">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.notes">Notes</Translate>
            </span>
          </dt>
          <dd>{clientEntity.notes}</dd>
          <dt>
            <span id="privateNotes">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.privateNotes">Private Notes</Translate>
            </span>
          </dt>
          <dd>{clientEntity.privateNotes}</dd>
          <dt>
            <span id="tags">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.tags">Tags</Translate>
            </span>
          </dt>
          <dd>{clientEntity.tags}</dd>
          <dt>
            <span id="totalVisits">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalVisits">Total Visits</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalVisits}</dd>
          <dt>
            <span id="totalCovers">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalCovers">Total Covers</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalCovers}</dd>
          <dt>
            <span id="totalCancellations">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalCancellations">Total Cancellations</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalCancellations}</dd>
          <dt>
            <span id="totalNoShows">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalNoShows">Total No Shows</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalNoShows}</dd>
          <dt>
            <span id="totalSpend">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalSpend">Total Spend</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalSpend}</dd>
          <dt>
            <span id="totalSpendPerCover">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalSpendPerCover">Total Spend Per Cover</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalSpendPerCover}</dd>
          <dt>
            <span id="totalspendPerVisit">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalspendPerVisit">Totalspend Per Visit</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalspendPerVisit}</dd>
          <dt>
            <span id="avgRating">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.avgRating">Avg Rating</Translate>
            </span>
          </dt>
          <dd>{clientEntity.avgRating}</dd>
          <dt>
            <span id="referenceCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.referenceCode">Reference Code</Translate>
            </span>
          </dt>
          <dd>{clientEntity.referenceCode}</dd>
          <dt>
            <span id="externalUserId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.externalUserId">External User Id</Translate>
            </span>
          </dt>
          <dd>{clientEntity.externalUserId}</dd>
          <dt>
            <span id="venueGroupId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.venueGroupId">Venue Group Id</Translate>
            </span>
          </dt>
          <dd>{clientEntity.venueGroupId}</dd>
          <dt>
            <span id="birthdayAltDay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayAltDay">Birthday Alt Day</Translate>
            </span>
          </dt>
          <dd>{clientEntity.birthdayAltDay}</dd>
          <dt>
            <span id="userId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.userId">User Id</Translate>
            </span>
          </dt>
          <dd>{clientEntity.userId}</dd>
          <dt>
            <span id="userName">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.userName">User Name</Translate>
            </span>
          </dt>
          <dd>{clientEntity.userName}</dd>
          <dt>
            <span id="totalOrderCount">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalOrderCount">Total Order Count</Translate>
            </span>
          </dt>
          <dd>{clientEntity.totalOrderCount}</dd>
          <dt>
            <span id="preferredLanguageCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.preferredLanguageCode">Preferred Language Code</Translate>
            </span>
          </dt>
          <dd>{clientEntity.preferredLanguageCode}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{clientEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {clientEntity.techCreatedDate ? <TextFormat value={clientEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {clientEntity.techUpdatedDate ? <TextFormat value={clientEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{clientEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{clientEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientPhoto">Client Photo</Translate>
          </dt>
          <dd>{clientEntity.clientPhoto ? clientEntity.clientPhoto.id : ''}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientVenueStats">Client Venue Stats</Translate>
          </dt>
          <dd>{clientEntity.clientVenueStats ? clientEntity.clientVenueStats.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/client" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client/${clientEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientDetail;
