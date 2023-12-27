import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './custom-field.reducer';

export const CustomFieldDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const customFieldEntity = useAppSelector(state => state.customField.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customFieldDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.customField.detail.title">CustomField</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.id}</dd>
          <dt>
            <span id="systemName">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.systemName">System Name</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.systemName}</dd>
          <dt>
            <span id="displayOrder">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.displayOrder">Display Order</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.displayOrder}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.name">Name</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.name}</dd>
          <dt>
            <span id="value">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.value">Value</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.value}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {customFieldEntity.techCreatedDate ? (
              <TextFormat value={customFieldEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {customFieldEntity.techUpdatedDate ? (
              <TextFormat value={customFieldEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.customField.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{customFieldEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.customField.client">Client</Translate>
          </dt>
          <dd>{customFieldEntity.client ? customFieldEntity.client.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/custom-field" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/custom-field/${customFieldEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomFieldDetail;
