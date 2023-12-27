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

import { getEntities } from './custom-field.reducer';

export const CustomField = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const customFieldList = useAppSelector(state => state.customField.entities);
  const loading = useAppSelector(state => state.customField.loading);
  const totalItems = useAppSelector(state => state.customField.totalItems);

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
      <h2 id="custom-field-heading" data-cy="CustomFieldHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.customField.home.title">Custom Fields</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.customField.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/custom-field/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.customField.home.createLabel">Create new Custom Field</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {customFieldList && customFieldList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('systemName')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.systemName">System Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('systemName')} />
                </th>
                <th className="hand" onClick={sort('displayOrder')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.displayOrder">Display Order</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('displayOrder')} />
                </th>
                <th className="hand" onClick={sort('name')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.name">Name</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('name')} />
                </th>
                <th className="hand" onClick={sort('value')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.value">Value</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('value')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.customField.client">Client</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {customFieldList.map((customField, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/custom-field/${customField.id}`} color="link" size="sm">
                      {customField.id}
                    </Button>
                  </td>
                  <td>{customField.systemName}</td>
                  <td>{customField.displayOrder}</td>
                  <td>{customField.name}</td>
                  <td>{customField.value}</td>
                  <td>{customField.techLineage}</td>
                  <td>
                    {customField.techCreatedDate ? (
                      <TextFormat type="date" value={customField.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {customField.techUpdatedDate ? (
                      <TextFormat type="date" value={customField.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{customField.techMapping}</td>
                  <td>{customField.techComment}</td>
                  <td>{customField.client ? <Link to={`/client/${customField.client.id}`}>{customField.client.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/custom-field/${customField.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/custom-field/${customField.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/custom-field/${customField.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.home.notFound">No Custom Fields found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={customFieldList && customFieldList.length > 0 ? '' : 'd-none'}>
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

export default CustomField;
