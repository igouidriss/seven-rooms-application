import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './client-photo.reducer';

export const ClientPhotoDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const clientPhotoEntity = useAppSelector(state => state.clientPhoto.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientPhotoDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.detail.title">ClientPhoto</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.id}</dd>
          <dt>
            <span id="clientId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.clientId">Client Id</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.clientId}</dd>
          <dt>
            <span id="large">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.large">Large</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.large}</dd>
          <dt>
            <span id="largeHeight">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.largeHeight">Large Height</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.largeHeight}</dd>
          <dt>
            <span id="largeWidth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.largeWidth">Large Width</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.largeWidth}</dd>
          <dt>
            <span id="medium">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.medium">Medium</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.medium}</dd>
          <dt>
            <span id="mediumHeight">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.mediumHeight">Medium Height</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.mediumHeight}</dd>
          <dt>
            <span id="mediumWidth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.mediumWidth">Medium Width</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.mediumWidth}</dd>
          <dt>
            <span id="small">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.small">Small</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.small}</dd>
          <dt>
            <span id="smallHeight">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.smallHeight">Small Height</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.smallHeight}</dd>
          <dt>
            <span id="smallWidth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.smallWidth">Small Width</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.smallWidth}</dd>
          <dt>
            <span id="raw">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.raw">Raw</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.raw}</dd>
          <dt>
            <span id="cropx">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropx">Cropx</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.cropx}</dd>
          <dt>
            <span id="cropy">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropy">Cropy</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.cropy}</dd>
          <dt>
            <span id="cropHeight">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropHeight">Crop Height</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.cropHeight}</dd>
          <dt>
            <span id="cropWidth">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.cropWidth">Crop Width</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.cropWidth}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {clientPhotoEntity.techCreatedDate ? (
              <TextFormat value={clientPhotoEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {clientPhotoEntity.techUpdatedDate ? (
              <TextFormat value={clientPhotoEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{clientPhotoEntity.techComment}</dd>
        </dl>
        <Button tag={Link} to="/client-photo" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client-photo/${clientPhotoEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientPhotoDetail;
