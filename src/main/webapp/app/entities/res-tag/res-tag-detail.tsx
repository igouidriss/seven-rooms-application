import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './res-tag.reducer';

export const ResTagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resTagEntity = useAppSelector(state => state.resTag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resTagDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.detail.title">ResTag</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.id}</dd>
          <dt>
            <span id="tag">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.tag">Tag</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.tag}</dd>
          <dt>
            <span id="tagDisplay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.tagDisplay">Tag Display</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.tagDisplay}</dd>
          <dt>
            <span id="group">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.group">Group</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.group}</dd>
          <dt>
            <span id="groupDisplay">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.groupDisplay">Group Display</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.groupDisplay}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.color">Color</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.color}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {resTagEntity.techCreatedDate ? <TextFormat value={resTagEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {resTagEntity.techUpdatedDate ? <TextFormat value={resTagEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{resTagEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.reservation">Reservation</Translate>
          </dt>
          <dd>{resTagEntity.reservation ? resTagEntity.reservation.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/res-tag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/res-tag/${resTagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResTagDetail;
