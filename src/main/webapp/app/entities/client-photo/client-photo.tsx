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

import { getEntities } from './client-photo.reducer';

export const ClientPhoto = () => {
  const dispatch = useAppDispatch();

  const pageLocation = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(pageLocation, ITEMS_PER_PAGE, 'id'), pageLocation.search),
  );

  const clientPhotoList = useAppSelector(state => state.clientPhoto.entities);
  const loading = useAppSelector(state => state.clientPhoto.loading);
  const totalItems = useAppSelector(state => state.clientPhoto.totalItems);

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
      <h2 id="client-photo-heading" data-cy="ClientPhotoHeading">
        <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.home.title">Client Photos</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/client-photo/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.home.createLabel">Create new Client Photo</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {clientPhotoList && clientPhotoList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.id">ID</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                </th>
                <th className="hand" onClick={sort('clientId')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.clientId">Client Id</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('clientId')} />
                </th>
                <th className="hand" onClick={sort('large')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.large">Large</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('large')} />
                </th>
                <th className="hand" onClick={sort('largeHeight')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.largeHeight">Large Height</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('largeHeight')} />
                </th>
                <th className="hand" onClick={sort('largeWidth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.largeWidth">Large Width</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('largeWidth')} />
                </th>
                <th className="hand" onClick={sort('medium')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.medium">Medium</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('medium')} />
                </th>
                <th className="hand" onClick={sort('mediumHeight')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.mediumHeight">Medium Height</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('mediumHeight')} />
                </th>
                <th className="hand" onClick={sort('mediumWidth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.mediumWidth">Medium Width</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('mediumWidth')} />
                </th>
                <th className="hand" onClick={sort('small')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.small">Small</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('small')} />
                </th>
                <th className="hand" onClick={sort('smallHeight')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.smallHeight">Small Height</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('smallHeight')} />
                </th>
                <th className="hand" onClick={sort('smallWidth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.smallWidth">Small Width</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('smallWidth')} />
                </th>
                <th className="hand" onClick={sort('raw')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.raw">Raw</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('raw')} />
                </th>
                <th className="hand" onClick={sort('cropx')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropx">Cropx</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('cropx')} />
                </th>
                <th className="hand" onClick={sort('cropy')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropy">Cropy</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('cropy')} />
                </th>
                <th className="hand" onClick={sort('cropHeight')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropHeight">Crop Height</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('cropHeight')} />
                </th>
                <th className="hand" onClick={sort('cropWidth')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropWidth">Crop Width</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('cropWidth')} />
                </th>
                <th className="hand" onClick={sort('techLineage')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techLineage">Tech Lineage</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techLineage')} />
                </th>
                <th className="hand" onClick={sort('techCreatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techCreatedDate">Tech Created Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techCreatedDate')} />
                </th>
                <th className="hand" onClick={sort('techUpdatedDate')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techUpdatedDate">Tech Updated Date</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techUpdatedDate')} />
                </th>
                <th className="hand" onClick={sort('techMapping')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techMapping">Tech Mapping</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techMapping')} />
                </th>
                <th className="hand" onClick={sort('techComment')}>
                  <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techComment">Tech Comment</Translate>{' '}
                  <FontAwesomeIcon icon={getSortIconByFieldName('techComment')} />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clientPhotoList.map((clientPhoto, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/client-photo/${clientPhoto.id}`} color="link" size="sm">
                      {clientPhoto.id}
                    </Button>
                  </td>
                  <td>{clientPhoto.clientId}</td>
                  <td>{clientPhoto.large}</td>
                  <td>{clientPhoto.largeHeight}</td>
                  <td>{clientPhoto.largeWidth}</td>
                  <td>{clientPhoto.medium}</td>
                  <td>{clientPhoto.mediumHeight}</td>
                  <td>{clientPhoto.mediumWidth}</td>
                  <td>{clientPhoto.small}</td>
                  <td>{clientPhoto.smallHeight}</td>
                  <td>{clientPhoto.smallWidth}</td>
                  <td>{clientPhoto.raw}</td>
                  <td>{clientPhoto.cropx}</td>
                  <td>{clientPhoto.cropy}</td>
                  <td>{clientPhoto.cropHeight}</td>
                  <td>{clientPhoto.cropWidth}</td>
                  <td>{clientPhoto.techLineage}</td>
                  <td>
                    {clientPhoto.techCreatedDate ? (
                      <TextFormat type="date" value={clientPhoto.techCreatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {clientPhoto.techUpdatedDate ? (
                      <TextFormat type="date" value={clientPhoto.techUpdatedDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{clientPhoto.techMapping}</td>
                  <td>{clientPhoto.techComment}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/client-photo/${clientPhoto.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/client-photo/${clientPhoto.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                          (window.location.href = `/client-photo/${clientPhoto.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`)
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
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.home.notFound">No Client Photos found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={clientPhotoList && clientPhotoList.length > 0 ? '' : 'd-none'}>
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

export default ClientPhoto;
