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

import { getEntities } from './client-tag.reducer';

export const ClientTag = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const clientTagList = useAppSelector(state => state.clientTag.entities);
  const loading = useAppSelector(state => state.clientTag.loading);
  const totalItems = useAppSelector(state => state.clientTag.totalItems);

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
      <h2 id="client-tag-heading" data-cy="ClientTagHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.home.title">Client Tags</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/client-tag/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.home.createLabel">Create new Client Tag</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {clientTagList && clientTagList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('tag')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.tag">Tag</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tag')} />
                </th>
                <th className="hand" onClick={sort('tagDisplay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.tagDisplay">Tag Display</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('tagDisplay')} />
                </th>
                <th className="hand" onClick={sort('group')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.group">Group</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('group')} />
                </th>
                <th className="hand" onClick={sort('groupDisplay')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.groupDisplay">Group Display</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('groupDisplay')} />
                </th>
                <th className="hand" onClick={sort('color')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.color">Color</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('color')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.client">Client</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientTagList.map((clientTag, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/client-tag/${clientTag.id}`} color="link" size="sm">
                      {clientTag.id}
                    </Button>
                  </td>
                  <td>{clientTag.tag}</td>
                  <td>{clientTag.tagDisplay}</td>
                  <td>{clientTag.group}</td>
                  <td>{clientTag.groupDisplay}</td>
                  <td>{clientTag.color}</td>
                  <td>{clientTag.techLineage}</td>
                  <td>
                    {clientTag.techCreatedDate ? (
                      <TextFormat type="date" value={clientTag.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {clientTag.techUpdatedDate ? (
                      <TextFormat type="date" value={clientTag.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{clientTag.techMapping}</td>
                  <td>{clientTag.techComment}</td>
                  <td>{clientTag.client ? <Link to={`/client/${clientTag.client.id}`}>{clientTag.client.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/client-tag/${clientTag.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/client-tag/${clientTag.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/client-tag/${clientTag.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.home.notFound">No Client Tags found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={clientTagList && clientTagList.length > 0 ? '' : 'd-none'}>
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

export default ClientTag;
