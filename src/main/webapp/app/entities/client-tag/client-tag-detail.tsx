import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './client-tag.reducer';

export const ClientTagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const clientTagEntity = useAppSelector(state => state.clientTag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientTagDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.detail.title">ClientTag</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.id}</dd>
          <dt>
            <span id="tag">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.tag">Tag</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.tag}</dd>
          <dt>
            <span id="tagDisplay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.tagDisplay">Tag Display</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.tagDisplay}</dd>
          <dt>
            <span id="group">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.group">Group</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.group}</dd>
          <dt>
            <span id="groupDisplay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.groupDisplay">Group Display</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.groupDisplay}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.color">Color</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.color}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {clientTagEntity.techCreatedDate ? (
              <TextFormat value={clientTagEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {clientTagEntity.techUpdatedDate ? (
              <TextFormat value={clientTagEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{clientTagEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.client">Client</Translate>
          </dt>
          <dd>{clientTagEntity.client ? clientTagEntity.client.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/client-tag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client-tag/${clientTagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientTagDetail;
