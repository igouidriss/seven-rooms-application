import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './res-postickets-item.reducer';

export const ResPosticketsItemDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resPosticketsItemEntity = useAppSelector(state => state.resPosticketsItem.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resPosticketsItemDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.detail.title">ResPosticketsItem</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.id}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.price">Price</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.price}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.name">Name</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.name}</dd>
          <dt>
            <span id="quantity">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.quantity">Quantity</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.quantity}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {resPosticketsItemEntity.techCreatedDate ? (
              <TextFormat value={resPosticketsItemEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {resPosticketsItemEntity.techUpdatedDate ? (
              <TextFormat value={resPosticketsItemEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{resPosticketsItemEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.reservation">Reservation</Translate>
          </dt>
          <dd>{resPosticketsItemEntity.reservation ? resPosticketsItemEntity.reservation.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/res-postickets-item" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/res-postickets-item/${resPosticketsItemEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResPosticketsItemDetail;
