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

import { getEntities } from './client-venue-stats.reducer';

export const ClientVenueStats = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const clientVenueStatsList = useAppSelector(state => state.clientVenueStats.entities);
  const loading = useAppSelector(state => state.clientVenueStats.loading);
  const totalItems = useAppSelector(state => state.clientVenueStats.totalItems);

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
      <h2 id="client-venue-stats-heading" data-cy="ClientVenueStatsHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.home.title">Client Venue Stats</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link
            to="/client-venue-stats/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.home.createLabel">
              Create new Client Venue Stats
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {clientVenueStatsList && clientVenueStatsList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('venueId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueId">Venue Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueId')} />
                </th>
                <th className="hand" onClick={sort('avgRating')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.avgRating">Avg Rating</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('avgRating')} />
                </th>
                <th className="hand" onClick={sort('bookedByNames')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.bookedByNames">Booked By Names</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('bookedByNames')} />
                </th>
                <th className="hand" onClick={sort('lastVisitDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.lastVisitDate">Last Visit Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('lastVisitDate')} />
                </th>
                <th className="hand" onClick={sort('numRatings')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.numRatings">Num Ratings</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('numRatings')} />
                </th>
                <th className="hand" onClick={sort('totalCancellations')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalCancellations">Total Cancellations</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalCancellations')} />
                </th>
                <th className="hand" onClick={sort('totalCovers')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalCovers">Total Covers</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalCovers')} />
                </th>
                <th className="hand" onClick={sort('totalNoShows')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalNoShows">Total No Shows</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalNoShows')} />
                </th>
                <th className="hand" onClick={sort('totalSpend')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpend">Total Spend</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpend')} />
                </th>
                <th className="hand" onClick={sort('totalSpendLocal')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocal">Total Spend Local</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendLocal')} />
                </th>
                <th className="hand" onClick={sort('totalSpendLocalperCover')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalperCover">
                    Total Spend Localper Cover
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendLocalperCover')} />
                </th>
                <th className="hand" onClick={sort('totalSpendLocalPerVisit')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalPerVisit">
                    Total Spend Local Per Visit
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendLocalPerVisit')} />
                </th>
                <th className="hand" onClick={sort('totalSpendperCover')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendperCover">Total Spendper Cover</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendperCover')} />
                </th>
                <th className="hand" onClick={sort('totalSpendPerVisit')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendPerVisit">
                    Total Spend Per Visit
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalSpendPerVisit')} />
                </th>
                <th className="hand" onClick={sort('totalVisit')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalVisit">Total Visit</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('totalVisit')} />
                </th>
                <th className="hand" onClick={sort('venueMarketingOptin')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptin">
                    Venue Marketing Optin
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueMarketingOptin')} />
                </th>
                <th className="hand" onClick={sort('venueMarketingOptints')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptints">
                    Venue Marketing Optints
                  </Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('venueMarketingOptints')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientVenueStatsList.map((clientVenueStats, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/client-venue-stats/${clientVenueStats.id}`} color="link" size="sm">
                      {clientVenueStats.id}
                    </Button>
                  </td>
                  <td>{clientVenueStats.venueId}</td>
                  <td>{clientVenueStats.avgRating}</td>
                  <td>{clientVenueStats.bookedByNames}</td>
                  <td>{clientVenueStats.lastVisitDate}</td>
                  <td>{clientVenueStats.numRatings}</td>
                  <td>{clientVenueStats.totalCancellations}</td>
                  <td>{clientVenueStats.totalCovers}</td>
                  <td>{clientVenueStats.totalNoShows}</td>
                  <td>{clientVenueStats.totalSpend}</td>
                  <td>{clientVenueStats.totalSpendLocal}</td>
                  <td>{clientVenueStats.totalSpendLocalperCover}</td>
                  <td>{clientVenueStats.totalSpendLocalPerVisit}</td>
                  <td>{clientVenueStats.totalSpendperCover}</td>
                  <td>{clientVenueStats.totalSpendPerVisit}</td>
                  <td>{clientVenueStats.totalVisit}</td>
                  <td>{clientVenueStats.venueMarketingOptin ? 'true' : 'false'}</td>
                  <td>{clientVenueStats.venueMarketingOptints}</td>
                  <td>{clientVenueStats.techLineage}</td>
                  <td>
                    {clientVenueStats.techCreatedDate ? (
                      <TextFormat type="date" value={clientVenueStats.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {clientVenueStats.techUpdatedDate ? (
                      <TextFormat type="date" value={clientVenueStats.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{clientVenueStats.techMapping}</td>
                  <td>{clientVenueStats.techComment}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/client-venue-stats/${clientVenueStats.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/client-venue-stats/${clientVenueStats.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/client-venue-stats/${clientVenueStats.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.home.notFound">No Client Venue Stats found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={clientVenueStatsList && clientVenueStatsList.length > 0 ? '' : 'd-none'}>
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

export default ClientVenueStats;
