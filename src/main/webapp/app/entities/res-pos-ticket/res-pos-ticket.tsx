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

import { getEntities } from './res-pos-ticket.reducer';

export const ResPosTicket = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const resPosTicketList = useAppSelector(state => state.resPosTicket.entities);
  const loading = useAppSelector(state => state.resPosTicket.loading);
  const totalItems = useAppSelector(state => state.resPosTicket.totalItems);

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
      <h2 id="res-pos-ticket-heading" data-cy="ResPosTicketHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.home.title">Res Pos Tickets</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/res-pos-ticket/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.home.createLabel">Create new Res Pos Ticket</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {resPosTicketList && resPosTicketList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('status')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.status">Status</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('status')} />
                </th>
                <th className="hand" onClick={sort('adminFee')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.adminFee">Admin Fee</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('adminFee')} />
                </th>
                <th className="hand" onClick={sort('code')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.code">Code</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('code')} />
                </th>
                <th className="hand" onClick={sort('tableNo')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.tableNo">Table No</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tableNo')} />
                </th>
                <th className="hand" onClick={sort('tax')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.tax">Tax</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tax')} />
                </th>
                <th className="hand" onClick={sort('businessId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.businessId">Business Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('businessId')} />
                </th>
                <th className="hand" onClick={sort('localPosticketId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.localPosticketId">Local Posticket Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('localPosticketId')} />
                </th>
                <th className="hand" onClick={sort('employeeName')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.employeeName">Employee Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('employeeName')} />
                </th>
                <th className="hand" onClick={sort('total')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.total">Total</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('total')} />
                </th>
                <th className="hand" onClick={sort('subtotal')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.subtotal">Subtotal</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('subtotal')} />
                </th>
                <th className="hand" onClick={sort('startTime')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.startTime">Start Time</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('startTime')} />
                </th>
                <th className="hand" onClick={sort('serviceCharge')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.serviceCharge">Service Charge</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('serviceCharge')} />
                </th>
                <th className="hand" onClick={sort('endtime')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.endtime">Endtime</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('endtime')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.reservation">Reservation</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {resPosTicketList.map((resPosTicket, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/res-pos-ticket/${resPosTicket.id}`} color="link" size="sm">
                      {resPosTicket.id}
                    </Button>
                  </td>
                  <td>{resPosTicket.status}</td>
                  <td>{resPosTicket.adminFee}</td>
                  <td>{resPosTicket.code}</td>
                  <td>{resPosTicket.tableNo}</td>
                  <td>{resPosTicket.tax}</td>
                  <td>{resPosTicket.businessId}</td>
                  <td>{resPosTicket.localPosticketId}</td>
                  <td>{resPosTicket.employeeName}</td>
                  <td>{resPosTicket.total}</td>
                  <td>{resPosTicket.subtotal}</td>
                  <td>{resPosTicket.startTime}</td>
                  <td>{resPosTicket.serviceCharge}</td>
                  <td>{resPosTicket.endtime}</td>
                  <td>{resPosTicket.techLineage}</td>
                  <td>
                    {resPosTicket.techCreatedDate ? (
                      <TextFormat type="date" value={resPosTicket.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {resPosTicket.techUpdatedDate ? (
                      <TextFormat type="date" value={resPosTicket.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{resPosTicket.techMapping}</td>
                  <td>{resPosTicket.techComment}</td>
                  <td>
                    {resPosTicket.reservation ? (
                      <Link to={`/reservation/${resPosTicket.reservation.id}`}>{resPosTicket.reservation.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/res-pos-ticket/${resPosTicket.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/res-pos-ticket/${resPosTicket.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/res-pos-ticket/${resPosTicket.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.home.notFound">No Res Pos Tickets found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={resPosTicketList && resPosTicketList.length > 0 ? '' : 'd-none'}>
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

export default ResPosTicket;
