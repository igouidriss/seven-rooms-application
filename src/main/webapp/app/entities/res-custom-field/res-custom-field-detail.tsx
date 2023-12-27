import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './res-custom-field.reducer';

export const ResCustomFieldDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resCustomFieldEntity = useAppSelector(state => state.resCustomField.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resCustomFieldDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.detail.title">ResCustomField</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.id}</dd>
          <dt>
            <span id="systemName">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.systemName">System Name</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.systemName}</dd>
          <dt>
            <span id="displayOrder">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.displayOrder">Display Order</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.displayOrder}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.name">Name</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.name}</dd>
          <dt>
            <span id="value">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.value">Value</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.value}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {resCustomFieldEntity.techCreatedDate ? (
              <TextFormat value={resCustomFieldEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {resCustomFieldEntity.techUpdatedDate ? (
              <TextFormat value={resCustomFieldEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{resCustomFieldEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.reservation">Reservation</Translate>
          </dt>
          <dd>{resCustomFieldEntity.reservation ? resCustomFieldEntity.reservation.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/res-custom-field" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/res-custom-field/${resCustomFieldEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResCustomFieldDetail;
