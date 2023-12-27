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

import { getEntities } from './client.reducer';

export const Client = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const clientList = useAppSelector(state => state.client.entities);
  const loading = useAppSelector(state => state.client.loading);
  const totalItems = useAppSelector(state => state.client.totalItems);

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
      <h2 id="client-heading" data-cy="ClientHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.client.home.title">Clients</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.client.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/client/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.client.home.createLabel">Create new Client</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {clientList && clientList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('clientId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientId">Client Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientId')} />
                </th>
                <th className="hand" onClick={sort('createdDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.createdDate">Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('createdDate')} />
                </th>
                <th className="hand" onClick={sort('updatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.updatedDate">Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('updatedDate')} />
                </th>
                <th className="hand" onClick={sort('deletedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.deletedDate">Deleted Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('deletedDate')} />
                </th>
                <th className="hand" onClick={sort('lastname')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.lastname">Lastname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('lastname')} />
                </th>
                <th className="hand" onClick={sort('firstname')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.firstname">Firstname</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('firstname')} />
                </th>
                <th className="hand" onClick={sort('gender')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.gender">Gender</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('gender')} />
                </th>
                <th className="hand" onClick={sort('salutation')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.salutation">Salutation</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('salutation')} />
                </th>
                <th className="hand" onClick={sort('title')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.title">Title</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('title')} />
                </th>
                <th className="hand" onClick={sort('birthdayDay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayDay">Birthday Day</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('birthdayDay')} />
                </th>
                <th className="hand" onClick={sort('birthdayMonth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayMonth">Birthday Month</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('birthdayMonth')} />
                </th>
                <th className="hand" onClick={sort('birthdayAltMonth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayAltMonth">Birthday Alt Month</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('birthdayAltMonth')} />
                </th>
                <th className="hand" onClick={sort('anniversaryDay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.anniversaryDay">Anniversary Day</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('anniversaryDay')} />
                </th>
                <th className="hand" onClick={sort('anniversaryMonth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.anniversaryMonth">Anniversary Month</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('anniversaryMonth')} />
                </th>
                <th className="hand" onClick={sort('company')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.company">Company</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('company')} />
                </th>
                <th className="hand" onClick={sort('email')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.email">Email</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('email')} />
                </th>
                <th className="hand" onClick={sort('emailAlt')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.emailAlt">Email Alt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('emailAlt')} />
                </th>
                <th className="hand" onClick={sort('phoneNumber')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumber">Phone Number</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('phoneNumber')} />
                </th>
                <th className="hand" onClick={sort('phoneNumberlocale')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberlocale">Phone Numberlocale</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('phoneNumberlocale')} />
                </th>
                <th className="hand" onClick={sort('phoneNumberalt')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberalt">Phone Numberalt</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('phoneNumberalt')} />
                </th>
                <th className="hand" onClick={sort('phoneNumberaltlocale')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.phoneNumberaltlocale">Phone Numberaltlocale</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('phoneNumberaltlocale')} />
                </th>
                <th className="hand" onClick={sort('address')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.address">Address</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('address')} />
                </th>
                <th className="hand" onClick={sort('address2')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.address2">Address 2</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('address2')} />
                </th>
                <th className="hand" onClick={sort('city')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.city">City</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('city')} />
                </th>
                <th className="hand" onClick={sort('postalCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.postalCode">Postal Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('postalCode')} />
                </th>
                <th className="hand" onClick={sort('state')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.state">State</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('state')} />
                </th>
                <th className="hand" onClick={sort('country')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.country">Country</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('country')} />
                </th>
                <th className="hand" onClick={sort('isContactPrivate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.isContactPrivate">Is Contact Private</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('isContactPrivate')} />
                </th>
                <th className="hand" onClick={sort('isOnetimeGuest')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.isOnetimeGuest">Is Onetime Guest</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('isOnetimeGuest')} />
                </th>
                <th className="hand" onClick={sort('status')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.status">Status</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('status')} />
                </th>
                <th className="hand" onClick={sort('loyaltyId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyId">Loyalty Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyId')} />
                </th>
                <th className="hand" onClick={sort('loyaltyRank')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyRank">Loyalty Rank</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyRank')} />
                </th>
                <th className="hand" onClick={sort('loyaltyTier')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.loyaltyTier">Loyalty Tier</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('loyaltyTier')} />
                </th>
                <th className="hand" onClick={sort('marketingOptin')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptin">Marketing Optin</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('marketingOptin')} />
                </th>
                <th className="hand" onClick={sort('marketingOptints')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptints">Marketing Optints</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('marketingOptints')} />
                </th>
                <th className="hand" onClick={sort('marketingOptOutts')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.marketingOptOutts">Marketing Opt Outts</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('marketingOptOutts')} />
                </th>
                <th className="hand" onClick={sort('hasBillingProfile')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.hasBillingProfile">Has Billing Profile</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('hasBillingProfile')} />
                </th>
                <th className="hand" onClick={sort('notes')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.notes">Notes</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('notes')} />
                </th>
                <th className="hand" onClick={sort('privateNotes')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.privateNotes">Private Notes</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('privateNotes')} />
                </th>
                <th className="hand" onClick={sort('tags')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.tags">Tags</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tags')} />
                </th>
                <th className="hand" onClick={sort('totalVisits')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalVisits">Total Visits</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalVisits')} />
                </th>
                <th className="hand" onClick={sort('totalCovers')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalCovers">Total Covers</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalCovers')} />
                </th>
                <th className="hand" onClick={sort('totalCancellations')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalCancellations">Total Cancellations</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalCancellations')} />
                </th>
                <th className="hand" onClick={sort('totalNoShows')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalNoShows">Total No Shows</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalNoShows')} />
                </th>
                <th className="hand" onClick={sort('totalSpend')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalSpend">Total Spend</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpend')} />
                </th>
                <th className="hand" onClick={sort('totalSpendPerCover')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalSpendPerCover">Total Spend Per Cover</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendPerCover')} />
                </th>
                <th className="hand" onClick={sort('totalspendPerVisit')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalspendPerVisit">Totalspend Per Visit</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalspendPerVisit')} />
                </th>
                <th className="hand" onClick={sort('avgRating')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.avgRating">Avg Rating</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('avgRating')} />
                </th>
                <th className="hand" onClick={sort('referenceCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.referenceCode">Reference Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('referenceCode')} />
                </th>
                <th className="hand" onClick={sort('externalUserId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.externalUserId">External User Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('externalUserId')} />
                </th>
                <th className="hand" onClick={sort('venueGroupId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.venueGroupId">Venue Group Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueGroupId')} />
                </th>
                <th className="hand" onClick={sort('birthdayAltDay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.birthdayAltDay">Birthday Alt Day</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('birthdayAltDay')} />
                </th>
                <th className="hand" onClick={sort('userId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.userId">User Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('userId')} />
                </th>
                <th className="hand" onClick={sort('userName')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.userName">User Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('userName')} />
                </th>
                <th className="hand" onClick={sort('totalOrderCount')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.totalOrderCount">Total Order Count</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalOrderCount')} />
                </th>
                <th className="hand" onClick={sort('preferredLanguageCode')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.preferredLanguageCode">Preferred Language Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('preferredLanguageCode')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientPhoto">Client Photo</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.client.clientVenueStats">Client Venue Stats</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientList.map((client, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/client/${client.id}`} color="link" size="sm">
                      {client.id}
                    </Button>
                  </td>
                  <td>{client.clientId}</td>
                  <td>{client.createdDate}</td>
                  <td>{client.updatedDate}</td>
                  <td>{client.deletedDate}</td>
                  <td>{client.lastname}</td>
                  <td>{client.firstname}</td>
                  <td>{client.gender}</td>
                  <td>{client.salutation}</td>
                  <td>{client.title}</td>
                  <td>{client.birthdayDay}</td>
                  <td>{client.birthdayMonth}</td>
                  <td>{client.birthdayAltMonth}</td>
                  <td>{client.anniversaryDay}</td>
                  <td>{client.anniversaryMonth}</td>
                  <td>{client.company}</td>
                  <td>{client.email}</td>
                  <td>{client.emailAlt}</td>
                  <td>{client.phoneNumber}</td>
                  <td>{client.phoneNumberlocale}</td>
                  <td>{client.phoneNumberalt}</td>
                  <td>{client.phoneNumberaltlocale}</td>
                  <td>{client.address}</td>
                  <td>{client.address2}</td>
                  <td>{client.city}</td>
                  <td>{client.postalCode}</td>
                  <td>{client.state}</td>
                  <td>{client.country}</td>
                  <td>{client.isContactPrivate ? 'true' : 'false'}</td>
                  <td>{client.isOnetimeGuest ? 'true' : 'false'}</td>
                  <td>{client.status}</td>
                  <td>{client.loyaltyId}</td>
                  <td>{client.loyaltyRank}</td>
                  <td>{client.loyaltyTier}</td>
                  <td>{client.marketingOptin ? 'true' : 'false'}</td>
                  <td>{client.marketingOptints}</td>
                  <td>{client.marketingOptOutts}</td>
                  <td>{client.hasBillingProfile ? 'true' : 'false'}</td>
                  <td>{client.notes}</td>
                  <td>{client.privateNotes}</td>
                  <td>{client.tags}</td>
                  <td>{client.totalVisits}</td>
                  <td>{client.totalCovers}</td>
                  <td>{client.totalCancellations}</td>
                  <td>{client.totalNoShows}</td>
                  <td>{client.totalSpend}</td>
                  <td>{client.totalSpendPerCover}</td>
                  <td>{client.totalspendPerVisit}</td>
                  <td>{client.avgRating}</td>
                  <td>{client.referenceCode}</td>
                  <td>{client.externalUserId}</td>
                  <td>{client.venueGroupId}</td>
                  <td>{client.birthdayAltDay}</td>
                  <td>{client.userId}</td>
                  <td>{client.userName}</td>
                  <td>{client.totalOrderCount}</td>
                  <td>{client.preferredLanguageCode}</td>
                  <td>{client.techLineage}</td>
                  <td>
                    {client.techCreatedDate ? <TextFormat type="date" value={client.techCreatedDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>
                    {client.techUpdatedDate ? <TextFormat type="date" value={client.techUpdatedDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{client.techMapping}</td>
                  <td>{client.techComment}</td>
                  <td>{client.clientPhoto ? <Link to={`/client-photo/${client.clientPhoto.id}`}>{client.clientPhoto.id}</Link> : ''}</td>
                  <td>
                    {client.clientVenueStats ? (
                      <Link to={`/client-venue-stats/${client.clientVenueStats.id}`}>{client.clientVenueStats.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/client/${client.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/client/${client.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/client/${client.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.client.home.notFound">No Clients found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={clientList && clientList.length > 0 ? '' : 'd-none'}>
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

export default Client;
