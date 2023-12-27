import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './table-number.reducer';

export const TableNumberDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const tableNumberEntity = useAppSelector(state => state.tableNumber.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="tableNumberDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.tableNumber.detail.title">TableNumber</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{tableNumberEntity.id}</dd>
          <dt>
            <span id="tableNum">
              <Translate contentKey="sevenRoomsToHubApplicationApp.tableNumber.tableNum">Table Num</Translate>
            </span>
          </dt>
          <dd>{tableNumberEntity.tableNum}</dd>
        </dl>
        <Button tag={Link} to="/table-number" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/table-number/${tableNumberEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TableNumberDetail;
