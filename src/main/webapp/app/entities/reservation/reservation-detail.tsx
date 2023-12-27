import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './reservation.reducer';

export const ReservationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const reservationEntity = useAppSelector(state => state.reservation.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reservationDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.detail.title">Reservation</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.id}</dd>
          <dt>
            <span id="resvId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.resvId">Resv Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.resvId}</dd>
          <dt>
            <span id="created">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.created">Created</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.created}</dd>
          <dt>
            <span id="updated">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.updated">Updated</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.updated}</dd>
          <dt>
            <span id="deleted">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.deleted">Deleted</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.deleted}</dd>
          <dt>
            <span id="venueGroupClientId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueGroupClientId">Venue Group Client Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.venueGroupClientId}</dd>
          <dt>
            <span id="venueGroupId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueGroupId">Venue Group Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.venueGroupId}</dd>
          <dt>
            <span id="venueId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueId">Venue Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.venueId}</dd>
          <dt>
            <span id="date">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.date">Date</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.date}</dd>
          <dt>
            <span id="duration">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.duration">Duration</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.duration}</dd>
          <dt>
            <span id="checkNumbers">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.checkNumbers">Check Numbers</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.checkNumbers}</dd>
          <dt>
            <span id="shiftCategory">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.shiftCategory">Shift Category</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.shiftCategory}</dd>
          <dt>
            <span id="shiftPersistentId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.shiftPersistentId">Shift Persistent Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.shiftPersistentId}</dd>
          <dt>
            <span id="maxGuests">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.maxGuests">Max Guests</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.maxGuests}</dd>
          <dt>
            <span id="mfratioMale">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.mfratioMale">Mfratio Male</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.mfratioMale}</dd>
          <dt>
            <span id="mfratioFemale">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.mfratioFemale">Mfratio Female</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.mfratioFemale}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.status">Status</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.status}</dd>
          <dt>
            <span id="statusDisplay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.statusDisplay">Status Display</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.statusDisplay}</dd>
          <dt>
            <span id="statusSimple">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.statusSimple">Status Simple</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.statusSimple}</dd>
          <dt>
            <span id="tableNumbers">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.tableNumbers">Table Numbers</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.tableNumbers}</dd>
          <dt>
            <span id="accessPersistentId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.accessPersistentId">Access Persistent Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.accessPersistentId}</dd>
          <dt>
            <span id="arrivedGuests">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.arrivedGuests">Arrived Guests</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.arrivedGuests}</dd>
          <dt>
            <span id="isvip">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.isvip">Isvip</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.isvip ? 'true' : 'false'}</dd>
          <dt>
            <span id="bookedby">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.bookedby">Bookedby</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.bookedby}</dd>
          <dt>
            <span id="clientReferenceCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.clientReferenceCode">Client Reference Code</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.clientReferenceCode}</dd>
          <dt>
            <span id="lastname">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.lastname">Lastname</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.lastname}</dd>
          <dt>
            <span id="firstname">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.firstname">Firstname</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.firstname}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.email">Email</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.email}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.phoneNumber}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.address">Address</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.address}</dd>
          <dt>
            <span id="address2">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.address2">Address 2</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.address2}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.city">City</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.city}</dd>
          <dt>
            <span id="postalCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.postalCode">Postal Code</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.postalCode}</dd>
          <dt>
            <span id="state">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.state">State</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.state}</dd>
          <dt>
            <span id="country">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.country">Country</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.country}</dd>
          <dt>
            <span id="loyaltyId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyId">Loyalty Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.loyaltyId}</dd>
          <dt>
            <span id="loyaltyRank">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyRank">Loyalty Rank</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.loyaltyRank}</dd>
          <dt>
            <span id="loyaltyTier">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyTier">Loyalty Tier</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.loyaltyTier}</dd>
          <dt>
            <span id="notes">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.notes">Notes</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.notes}</dd>
          <dt>
            <span id="arrivalTime">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.arrivalTime">Arrival Time</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.arrivalTime}</dd>
          <dt>
            <span id="seatedTime">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.seatedTime">Seated Time</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.seatedTime}</dd>
          <dt>
            <span id="leftTime">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.leftTime">Left Time</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.leftTime}</dd>
          <dt>
            <span id="clientRequests">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.clientRequests">Client Requests</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.clientRequests}</dd>
          <dt>
            <span id="comps">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.comps">Comps</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.comps}</dd>
          <dt>
            <span id="compsPriceType">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.compsPriceType">Comps Price Type</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.compsPriceType}</dd>
          <dt>
            <span id="costOption">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.costOption">Cost Option</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.costOption}</dd>
          <dt>
            <span id="policy">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.policy">Policy</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.policy}</dd>
          <dt>
            <span id="minPrice">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.minPrice">Min Price</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.minPrice}</dd>
          <dt>
            <span id="prePayment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.prePayment">Pre Payment</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.prePayment}</dd>
          <dt>
            <span id="onsitePayment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.onsitePayment">Onsite Payment</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.onsitePayment}</dd>
          <dt>
            <span id="totalPayment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.totalPayment">Total Payment</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.totalPayment}</dd>
          <dt>
            <span id="paidBy">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.paidBy">Paid By</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.paidBy}</dd>
          <dt>
            <span id="servedBy">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.servedBy">Served By</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.servedBy}</dd>
          <dt>
            <span id="rating">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.rating">Rating</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.rating}</dd>
          <dt>
            <span id="problems">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.problems">Problems</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.problems}</dd>
          <dt>
            <span id="autoAssignments">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.autoAssignments">Auto Assignments</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.autoAssignments}</dd>
          <dt>
            <span id="externalClientId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalClientId">External Client Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.externalClientId}</dd>
          <dt>
            <span id="externalId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalId">External Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.externalId}</dd>
          <dt>
            <span id="externalReferenceCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalReferenceCode">External Reference Code</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.externalReferenceCode}</dd>
          <dt>
            <span id="externalUserId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalUserId">External User Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.externalUserId}</dd>
          <dt>
            <span id="modifyReservationLink">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.modifyReservationLink">Modify Reservation Link</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.modifyReservationLink}</dd>
          <dt>
            <span id="referenceCode">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.referenceCode">Reference Code</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.referenceCode}</dd>
          <dt>
            <span id="reservationSmsOptin">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.reservationSmsOptin">Reservation Sms Optin</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.reservationSmsOptin ? 'true' : 'false'}</dd>
          <dt>
            <span id="reservationType">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.reservationType">Reservation Type</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.reservationType}</dd>
          <dt>
            <span id="sendReminderEmail">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sendReminderEmail">Send Reminder Email</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.sendReminderEmail ? 'true' : 'false'}</dd>
          <dt>
            <span id="sendreminderSms">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sendreminderSms">Sendreminder Sms</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.sendreminderSms ? 'true' : 'false'}</dd>
          <dt>
            <span id="sourceClientId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sourceClientId">Source Client Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.sourceClientId}</dd>
          <dt>
            <span id="userId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.userId">User Id</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.userId}</dd>
          <dt>
            <span id="userName">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.userName">User Name</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.userName}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {reservationEntity.techCreatedDate ? (
              <TextFormat value={reservationEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {reservationEntity.techUpdatedDate ? (
              <TextFormat value={reservationEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{reservationEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.client">Client</Translate>
          </dt>
          <dd>{reservationEntity.client ? reservationEntity.client.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/reservation" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/reservation/${reservationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReservationDetail;
