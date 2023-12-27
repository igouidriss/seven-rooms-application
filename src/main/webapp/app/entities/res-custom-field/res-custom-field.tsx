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

import { getEntities } from './res-custom-field.reducer';

export const ResCustomField = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const resCustomFieldList = useAppSelector(state => state.resCustomField.entities);
  const loading = useAppSelector(state => state.resCustomField.loading);
  const totalItems = useAppSelector(state => state.resCustomField.totalItems);

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
      <h2 id="res-custom-field-heading" data-cy="ResCustomFieldHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.home.title">Res Custom Fields</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/res-custom-field/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.home.createLabel">Create new Res Custom Field</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {resCustomFieldList && resCustomFieldList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('systemName')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.systemName">System Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('systemName')} />
                </th>
                <th className="hand" onClick={sort('displayOrder')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.displayOrder">Display Order</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('displayOrder')} />
                </th>
                <th className="hand" onClick={sort('name')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.name">Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('name')} />
                </th>
                <th className="hand" onClick={sort('value')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.value">Value</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('value')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.reservation">Reservation</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {resCustomFieldList.map((resCustomField, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/res-custom-field/${resCustomField.id}`} color="link" size="sm">
                      {resCustomField.id}
                    </Button>
                  </td>
                  <td>{resCustomField.systemName}</td>
                  <td>{resCustomField.displayOrder}</td>
                  <td>{resCustomField.name}</td>
                  <td>{resCustomField.value}</td>
                  <td>{resCustomField.techLineage}</td>
                  <td>
                    {resCustomField.techCreatedDate ? (
                      <TextFormat type="date" value={resCustomField.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {resCustomField.techUpdatedDate ? (
                      <TextFormat type="date" value={resCustomField.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{resCustomField.techMapping}</td>
                  <td>{resCustomField.techComment}</td>
                  <td>
                    {resCustomField.reservation ? (
                      <Link to={`/reservation/${resCustomField.reservation.id}`}>{resCustomField.reservation.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/res-custom-field/${resCustomField.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/res-custom-field/${resCustomField.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/res-custom-field/${resCustomField.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.home.notFound">No Res Custom Fields found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={resCustomFieldList && resCustomFieldList.length > 0 ? '' : 'd-none'}>
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

export default ResCustomField;
