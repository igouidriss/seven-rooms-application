import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReservation } from 'app/shared/model/reservation.model';
import { getEntities as getReservations } from 'app/entities/reservation/reservation.reducer';
import { IResPosTicket } from 'app/shared/model/res-pos-ticket.model';
import { getEntity, updateEntity, createEntity, reset } from './res-pos-ticket.reducer';

export const ResPosTicketUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const reservations = useAppSelector(state => state.reservation.entities);
  const resPosTicketEntity = useAppSelector(state => state.resPosTicket.entity);
  const loading = useAppSelector(state => state.resPosTicket.loading);
  const updating = useAppSelector(state => state.resPosTicket.updating);
  const updateSuccess = useAppSelector(state => state.resPosTicket.updateSuccess);

  const handleClose = () => {
    navigate('/res-pos-ticket' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getReservations({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  // eslint-disable-next-line complexity
  const saveEntity = values => {
    if (values.id !== undefined && typeof values.id !== 'number') {
      values.id = Number(values.id);
    }
    if (values.adminFee !== undefined && typeof values.adminFee !== 'number') {
      values.adminFee = Number(values.adminFee);
    }
    if (values.code !== undefined && typeof values.code !== 'number') {
      values.code = Number(values.code);
    }
    if (values.tax !== undefined && typeof values.tax !== 'number') {
      values.tax = Number(values.tax);
    }
    if (values.businessId !== undefined && typeof values.businessId !== 'number') {
      values.businessId = Number(values.businessId);
    }
    if (values.total !== undefined && typeof values.total !== 'number') {
      values.total = Number(values.total);
    }
    if (values.subtotal !== undefined && typeof values.subtotal !== 'number') {
      values.subtotal = Number(values.subtotal);
    }
    if (values.serviceCharge !== undefined && typeof values.serviceCharge !== 'number') {
      values.serviceCharge = Number(values.serviceCharge);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...resPosTicketEntity,
      ...values,
      reservation: reservations.find(it => it.id.toString() === values.reservation.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          techCreatedDate: displayDefaultDateTime(),
          techUpdatedDate: displayDefaultDateTime(),
        }
      : {
          ...resPosTicketEntity,
          techCreatedDate: convertDateTimeFromServer(resPosTicketEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(resPosTicketEntity.techUpdatedDate),
          reservation: resPosTicketEntity?.reservation?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.resPosTicket.home.createOrEditLabel" data-cy="ResPosTicketCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosTicket.home.createOrEditLabel">
              Create or edit a ResPosTicket
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="res-pos-ticket-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.status')}
                id="res-pos-ticket-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.adminFee')}
                id="res-pos-ticket-adminFee"
                name="adminFee"
                data-cy="adminFee"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.code')}
                id="res-pos-ticket-code"
                name="code"
                data-cy="code"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.tableNo')}
                id="res-pos-ticket-tableNo"
                name="tableNo"
                data-cy="tableNo"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.tax')}
                id="res-pos-ticket-tax"
                name="tax"
                data-cy="tax"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.businessId')}
                id="res-pos-ticket-businessId"
                name="businessId"
                data-cy="businessId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.localPosticketId')}
                id="res-pos-ticket-localPosticketId"
                name="localPosticketId"
                data-cy="localPosticketId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.employeeName')}
                id="res-pos-ticket-employeeName"
                name="employeeName"
                data-cy="employeeName"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.total')}
                id="res-pos-ticket-total"
                name="total"
                data-cy="total"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.subtotal')}
                id="res-pos-ticket-subtotal"
                name="subtotal"
                data-cy="subtotal"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.startTime')}
                id="res-pos-ticket-startTime"
                name="startTime"
                data-cy="startTime"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.serviceCharge')}
                id="res-pos-ticket-serviceCharge"
                name="serviceCharge"
                data-cy="serviceCharge"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.endtime')}
                id="res-pos-ticket-endtime"
                name="endtime"
                data-cy="endtime"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.techLineage')}
                id="res-pos-ticket-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.techCreatedDate')}
                id="res-pos-ticket-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.techUpdatedDate')}
                id="res-pos-ticket-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.techMapping')}
                id="res-pos-ticket-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.techComment')}
                id="res-pos-ticket-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="res-pos-ticket-reservation"
                name="reservation"
                data-cy="reservation"
                label={translate('sevenRoomsToHubApplicationApp.resPosTicket.reservation')}
                type="select"
              >
                <option value="" key="0" />
                {reservations
                  ? reservations.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/res-pos-ticket" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ResPosTicketUpdate;
