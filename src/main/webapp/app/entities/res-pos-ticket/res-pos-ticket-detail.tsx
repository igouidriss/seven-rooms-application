import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './res-pos-ticket.reducer';

export const ResPosTicketDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const resPosTicketEntity = useAppSelector(state => state.resPosTicket.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="resPosTicketDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.detail.title">ResPosTicket</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.id}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.status">Status</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.status}</dd>
          <dt>
            <span id="adminFee">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.adminFee">Admin Fee</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.adminFee}</dd>
          <dt>
            <span id="code">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.code">Code</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.code}</dd>
          <dt>
            <span id="tableNo">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.tableNo">Table No</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.tableNo}</dd>
          <dt>
            <span id="tax">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.tax">Tax</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.tax}</dd>
          <dt>
            <span id="businessId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.businessId">Business Id</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.businessId}</dd>
          <dt>
            <span id="localPosticketId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.localPosticketId">Local Posticket Id</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.localPosticketId}</dd>
          <dt>
            <span id="employeeName">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.employeeName">Employee Name</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.employeeName}</dd>
          <dt>
            <span id="total">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.total">Total</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.total}</dd>
          <dt>
            <span id="subtotal">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.subtotal">Subtotal</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.subtotal}</dd>
          <dt>
            <span id="startTime">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.startTime">Start Time</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.startTime}</dd>
          <dt>
            <span id="serviceCharge">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.serviceCharge">Service Charge</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.serviceCharge}</dd>
          <dt>
            <span id="endtime">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.endtime">Endtime</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.endtime}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {resPosTicketEntity.techCreatedDate ? (
              <TextFormat value={resPosTicketEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {resPosTicketEntity.techUpdatedDate ? (
              <TextFormat value={resPosTicketEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{resPosTicketEntity.techComment}</dd>
          <dt>
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.reservation">Reservation</Translate>
          </dt>
          <dd>{resPosTicketEntity.reservation ? resPosTicketEntity.reservation.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/res-pos-ticket" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/res-pos-ticket/${resPosTicketEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ResPosTicketDetail;
