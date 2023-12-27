import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, TextFormat, getPaginationState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities } from './reservation.reducer';

export const Reservation = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const reservationList = useAppSelector(state => state.reservation.entities);
  const loading = useAppSelector(state => state.reservation.loading);
  const totalItems = useAppSelector(state => state.reservation.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      }),
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (pageLocation.search !== endURL) {
      navigate(`${pageLocation.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(pageLocation.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [pageLocation.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = paginationState.sort;
    const order = paginationState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div>
      <h2 id="reservation-heading" data-cy="ReservationHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.home.title">Reservations</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/reservation/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.home.createLabel">Create new Reservation</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {reservationList && reservationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('resvId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.resvId">Resv Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('resvId')} />
                </th>
                <th className="hand" onClick={sort('created')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.created">Created</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('created')} />
                </th>
                <th className="hand" onClick={sort('updated')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.updated">Updated</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('updated')} />
                </th>
                <th className="hand" onClick={sort('deleted')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.deleted">Deleted</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('deleted')} />
                </th>
                <th className="hand" onClick={sort('venueGroupClientId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueGroupClientId">Venue Group Client Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueGroupClientId')} />
                </th>
                <th className="hand" onClick={sort('venueGroupId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueGroupId">Venue Group Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueGroupId')} />
                </th>
                <th className="hand" onClick={sort('venueId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.venueId">Venue Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueId')} />
                </th>
                <th className="hand" onClick={sort('date')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.date">Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('date')} />
                </th>
                <th className="hand" onClick={sort('duration')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.duration">Duration</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('duration')} />
                </th>
                <th className="hand" onClick={sort('checkNumbers')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.checkNumbers">Check Numbers</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('checkNumbers')} />
                </th>
                <th className="hand" onClick={sort('shiftCategory')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.shiftCategory">Shift Category</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('shiftCategory')} />
                </th>
                <th className="hand" onClick={sort('shiftPersistentId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.shiftPersistentId">Shift Persistent Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('shiftPersistentId')} />
                </th>
                <th className="hand" onClick={sort('maxGuests')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.maxGuests">Max Guests</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('maxGuests')} />
                </th>
                <th className="hand" onClick={sort('mfratioMale')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.mfratioMale">Mfratio Male</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('mfratioMale')} />
                </th>
                <th className="hand" onClick={sort('mfratioFemale')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.mfratioFemale">Mfratio Female</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('mfratioFemale')} />
                </th>
                <th className="hand" onClick={sort('status')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.status">Status</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('status')} />
                </th>
                <th className="hand" onClick={sort('statusDisplay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.statusDisplay">Status Display</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statusDisplay')} />
                </th>
                <th className="hand" onClick={sort('statusSimple')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.statusSimple">Status Simple</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('statusSimple')} />
                </th>
                <th className="hand" onClick={sort('tableNumbers')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.tableNumbers">Table Numbers</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tableNumbers')} />
                </th>
                <th className="hand" onClick={sort('accessPersistentId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.accessPersistentId">Access Persistent Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('accessPersistentId')} />
                </th>
                <th className="hand" onClick={sort('arrivedGuests')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.arrivedGuests">Arrived Guests</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('arrivedGuests')} />
                </th>
                <th className="hand" onClick={sort('isvip')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.isvip">Isvip</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('isvip')} />
                </th>
                <th className="hand" onClick={sort('bookedby')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.bookedby">Bookedby</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('bookedby')} />
                </th>
                <th className="hand" onClick={sort('clientReferenceCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.clientReferenceCode">Client Reference Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientReferenceCode')} />
                </th>
                <th className="hand" onClick={sort('lastname')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.lastname">Lastname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('lastname')} />
                </th>
                <th className="hand" onClick={sort('firstname')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.firstname">Firstname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('firstname')} />
                </th>
                <th className="hand" onClick={sort('email')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.email">Email</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('email')} />
                </th>
                <th className="hand" onClick={sort('phoneNumber')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.phoneNumber">Phone Number</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('phoneNumber')} />
                </th>
                <th className="hand" onClick={sort('address')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.address">Address</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('address')} />
                </th>
                <th className="hand" onClick={sort('address2')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.address2">Address 2</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('address2')} />
                </th>
                <th className="hand" onClick={sort('city')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.city">City</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('city')} />
                </th>
                <th className="hand" onClick={sort('postalCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.postalCode">Postal Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('postalCode')} />
                </th>
                <th className="hand" onClick={sort('state')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.state">State</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('state')} />
                </th>
                <th className="hand" onClick={sort('country')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.country">Country</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('country')} />
                </th>
                <th className="hand" onClick={sort('loyaltyId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyId">Loyalty Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyId')} />
                </th>
                <th className="hand" onClick={sort('loyaltyRank')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyRank">Loyalty Rank</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyRank')} />
                </th>
                <th className="hand" onClick={sort('loyaltyTier')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.loyaltyTier">Loyalty Tier</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyTier')} />
                </th>
                <th className="hand" onClick={sort('notes')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.notes">Notes</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('notes')} />
                </th>
                <th className="hand" onClick={sort('arrivalTime')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.arrivalTime">Arrival Time</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('arrivalTime')} />
                </th>
                <th className="hand" onClick={sort('seatedTime')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.seatedTime">Seated Time</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('seatedTime')} />
                </th>
                <th className="hand" onClick={sort('leftTime')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.leftTime">Left Time</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('leftTime')} />
                </th>
                <th className="hand" onClick={sort('clientRequests')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.clientRequests">Client Requests</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientRequests')} />
                </th>
                <th className="hand" onClick={sort('comps')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.comps">Comps</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('comps')} />
                </th>
                <th className="hand" onClick={sort('compsPriceType')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.compsPriceType">Comps Price Type</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('compsPriceType')} />
                </th>
                <th className="hand" onClick={sort('costOption')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.costOption">Cost Option</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('costOption')} />
                </th>
                <th className="hand" onClick={sort('policy')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.policy">Policy</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('policy')} />
                </th>
                <th className="hand" onClick={sort('minPrice')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.minPrice">Min Price</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('minPrice')} />
                </th>
                <th className="hand" onClick={sort('prePayment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.prePayment">Pre Payment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('prePayment')} />
                </th>
                <th className="hand" onClick={sort('onsitePayment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.onsitePayment">Onsite Payment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('onsitePayment')} />
                </th>
                <th className="hand" onClick={sort('totalPayment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.totalPayment">Total Payment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalPayment')} />
                </th>
                <th className="hand" onClick={sort('paidBy')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.paidBy">Paid By</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('paidBy')} />
                </th>
                <th className="hand" onClick={sort('servedBy')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.servedBy">Served By</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('servedBy')} />
                </th>
                <th className="hand" onClick={sort('rating')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.rating">Rating</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('rating')} />
                </th>
                <th className="hand" onClick={sort('problems')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.problems">Problems</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('problems')} />
                </th>
                <th className="hand" onClick={sort('autoAssignments')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.autoAssignments">Auto Assignments</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('autoAssignments')} />
                </th>
                <th className="hand" onClick={sort('externalClientId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalClientId">External Client Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('externalClientId')} />
                </th>
                <th className="hand" onClick={sort('externalId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalId">External Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('externalId')} />
                </th>
                <th className="hand" onClick={sort('externalReferenceCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalReferenceCode">
                    External Reference Code
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('externalReferenceCode')} />
                </th>
                <th className="hand" onClick={sort('externalUserId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.externalUserId">External User Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('externalUserId')} />
                </th>
                <th className="hand" onClick={sort('modifyReservationLink')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.modifyReservationLink">
                    Modify Reservation Link
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('modifyReservationLink')} />
                </th>
                <th className="hand" onClick={sort('referenceCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.referenceCode">Reference Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('referenceCode')} />
                </th>
                <th className="hand" onClick={sort('reservationSmsOptin')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.reservationSmsOptin">Reservation Sms Optin</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('reservationSmsOptin')} />
                </th>
                <th className="hand" onClick={sort('reservationType')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.reservationType">Reservation Type</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('reservationType')} />
                </th>
                <th className="hand" onClick={sort('sendReminderEmail')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sendReminderEmail">Send Reminder Email</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('sendReminderEmail')} />
                </th>
                <th className="hand" onClick={sort('sendreminderSms')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sendreminderSms">Sendreminder Sms</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('sendreminderSms')} />
                </th>
                <th className="hand" onClick={sort('sourceClientId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.sourceClientId">Source Client Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('sourceClientId')} />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.userId">User Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('userId')} />
                </th>
                <th className="hand" onClick={sort('userName')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.userName">User Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('userName')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.client">Client</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {reservationList.map((reservation, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/reservation/${reservation.id}`} color="link" size="sm">
                      {reservation.id}
                    </Button>
                  </td>
                  <td>{reservation.resvId}</td>
                  <td>{reservation.created}</td>
                  <td>{reservation.updated}</td>
                  <td>{reservation.deleted}</td>
                  <td>{reservation.venueGroupClientId}</td>
                  <td>{reservation.venueGroupId}</td>
                  <td>{reservation.venueId}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.duration}</td>
                  <td>{reservation.checkNumbers}</td>
                  <td>{reservation.shiftCategory}</td>
                  <td>{reservation.shiftPersistentId}</td>
                  <td>{reservation.maxGuests}</td>
                  <td>{reservation.mfratioMale}</td>
                  <td>{reservation.mfratioFemale}</td>
                  <td>{reservation.status}</td>
                  <td>{reservation.statusDisplay}</td>
                  <td>{reservation.statusSimple}</td>
                  <td>{reservation.tableNumbers}</td>
                  <td>{reservation.accessPersistentId}</td>
                  <td>{reservation.arrivedGuests}</td>
                  <td>{reservation.isvip ? 'true' : 'false'}</td>
                  <td>{reservation.bookedby}</td>
                  <td>{reservation.clientReferenceCode}</td>
                  <td>{reservation.lastname}</td>
                  <td>{reservation.firstname}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.phoneNumber}</td>
                  <td>{reservation.address}</td>
                  <td>{reservation.address2}</td>
                  <td>{reservation.city}</td>
                  <td>{reservation.postalCode}</td>
                  <td>{reservation.state}</td>
                  <td>{reservation.country}</td>
                  <td>{reservation.loyaltyId}</td>
                  <td>{reservation.loyaltyRank}</td>
                  <td>{reservation.loyaltyTier}</td>
                  <td>{reservation.notes}</td>
                  <td>{reservation.arrivalTime}</td>
                  <td>{reservation.seatedTime}</td>
                  <td>{reservation.leftTime}</td>
                  <td>{reservation.clientRequests}</td>
                  <td>{reservation.comps}</td>
                  <td>{reservation.compsPriceType}</td>
                  <td>{reservation.costOption}</td>
                  <td>{reservation.policy}</td>
                  <td>{reservation.minPrice}</td>
                  <td>{reservation.prePayment}</td>
                  <td>{reservation.onsitePayment}</td>
                  <td>{reservation.totalPayment}</td>
                  <td>{reservation.paidBy}</td>
                  <td>{reservation.servedBy}</td>
                  <td>{reservation.rating}</td>
                  <td>{reservation.problems}</td>
                  <td>{reservation.autoAssignments}</td>
                  <td>{reservation.externalClientId}</td>
                  <td>{reservation.externalId}</td>
                  <td>{reservation.externalReferenceCode}</td>
                  <td>{reservation.externalUserId}</td>
                  <td>{reservation.modifyReservationLink}</td>
                  <td>{reservation.referenceCode}</td>
                  <td>{reservation.reservationSmsOptin ? 'true' : 'false'}</td>
                  <td>{reservation.reservationType}</td>
                  <td>{reservation.sendReminderEmail ? 'true' : 'false'}</td>
                  <td>{reservation.sendreminderSms ? 'true' : 'false'}</td>
                  <td>{reservation.sourceClientId}</td>
                  <td>{reservation.userId}</td>
                  <td>{reservation.userName}</td>
                  <td>{reservation.techLineage}</td>
                  <td>
                    {reservation.techCreatedDate ? (
                      <TextFormat type="date" value={reservation.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {reservation.techUpdatedDate ? (
                      <TextFormat type="date" value={reservation.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{reservation.techMapping}</td>
                  <td>{reservation.techComment}</td>
                  <td>{reservation.client ? <Link to={`/client/${reservation.client.id}`}>{reservation.client.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/reservation/${reservation.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/reservation/${reservation.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        onClick={() =>
                          (window.location.href = `/reservation/${reservation.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
                        }
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.home.notFound">No Reservations found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={reservationList && reservationList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Reservation;
