import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IClient } from 'app/shared/model/client.model';
import { getEntities as getClients } from 'app/entities/client/client.reducer';
import { IReservation } from 'app/shared/model/reservation.model';
import { getEntity, updateEntity, createEntity, reset } from './reservation.reducer';

export const ReservationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clients = useAppSelector(state => state.client.entities);
  const reservationEntity = useAppSelector(state => state.reservation.entity);
  const loading = useAppSelector(state => state.reservation.loading);
  const updating = useAppSelector(state => state.reservation.updating);
  const updateSuccess = useAppSelector(state => state.reservation.updateSuccess);

  const handleClose = () => {
    navigate('/reservation' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getClients({}));
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
    if (values.duration !== undefined && typeof values.duration !== 'number') {
      values.duration = Number(values.duration);
    }
    if (values.maxGuests !== undefined && typeof values.maxGuests !== 'number') {
      values.maxGuests = Number(values.maxGuests);
    }
    if (values.mfratioMale !== undefined && typeof values.mfratioMale !== 'number') {
      values.mfratioMale = Number(values.mfratioMale);
    }
    if (values.mfratioFemale !== undefined && typeof values.mfratioFemale !== 'number') {
      values.mfratioFemale = Number(values.mfratioFemale);
    }
    if (values.arrivedGuests !== undefined && typeof values.arrivedGuests !== 'number') {
      values.arrivedGuests = Number(values.arrivedGuests);
    }
    if (values.loyaltyRank !== undefined && typeof values.loyaltyRank !== 'number') {
      values.loyaltyRank = Number(values.loyaltyRank);
    }
    if (values.comps !== undefined && typeof values.comps !== 'number') {
      values.comps = Number(values.comps);
    }
    if (values.costOption !== undefined && typeof values.costOption !== 'number') {
      values.costOption = Number(values.costOption);
    }
    if (values.minPrice !== undefined && typeof values.minPrice !== 'number') {
      values.minPrice = Number(values.minPrice);
    }
    if (values.prePayment !== undefined && typeof values.prePayment !== 'number') {
      values.prePayment = Number(values.prePayment);
    }
    if (values.onsitePayment !== undefined && typeof values.onsitePayment !== 'number') {
      values.onsitePayment = Number(values.onsitePayment);
    }
    if (values.totalPayment !== undefined && typeof values.totalPayment !== 'number') {
      values.totalPayment = Number(values.totalPayment);
    }
    if (values.rating !== undefined && typeof values.rating !== 'number') {
      values.rating = Number(values.rating);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...reservationEntity,
      ...values,
      client: clients.find(it => it.id.toString() === values.client.toString()),
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
          ...reservationEntity,
          techCreatedDate: convertDateTimeFromServer(reservationEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(reservationEntity.techUpdatedDate),
          client: reservationEntity?.client?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.reservation.home.createOrEditLabel" data-cy="ReservationCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.reservation.home.createOrEditLabel">
              Create or edit a Reservation
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
                  id="reservation-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.resvId')}
                id="reservation-resvId"
                name="resvId"
                data-cy="resvId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.created')}
                id="reservation-created"
                name="created"
                data-cy="created"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.updated')}
                id="reservation-updated"
                name="updated"
                data-cy="updated"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.deleted')}
                id="reservation-deleted"
                name="deleted"
                data-cy="deleted"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.venueGroupClientId')}
                id="reservation-venueGroupClientId"
                name="venueGroupClientId"
                data-cy="venueGroupClientId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.venueGroupId')}
                id="reservation-venueGroupId"
                name="venueGroupId"
                data-cy="venueGroupId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.venueId')}
                id="reservation-venueId"
                name="venueId"
                data-cy="venueId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.date')}
                id="reservation-date"
                name="date"
                data-cy="date"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.duration')}
                id="reservation-duration"
                name="duration"
                data-cy="duration"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.checkNumbers')}
                id="reservation-checkNumbers"
                name="checkNumbers"
                data-cy="checkNumbers"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.shiftCategory')}
                id="reservation-shiftCategory"
                name="shiftCategory"
                data-cy="shiftCategory"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.shiftPersistentId')}
                id="reservation-shiftPersistentId"
                name="shiftPersistentId"
                data-cy="shiftPersistentId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.maxGuests')}
                id="reservation-maxGuests"
                name="maxGuests"
                data-cy="maxGuests"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.mfratioMale')}
                id="reservation-mfratioMale"
                name="mfratioMale"
                data-cy="mfratioMale"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.mfratioFemale')}
                id="reservation-mfratioFemale"
                name="mfratioFemale"
                data-cy="mfratioFemale"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.status')}
                id="reservation-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.statusDisplay')}
                id="reservation-statusDisplay"
                name="statusDisplay"
                data-cy="statusDisplay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.statusSimple')}
                id="reservation-statusSimple"
                name="statusSimple"
                data-cy="statusSimple"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.tableNumbers')}
                id="reservation-tableNumbers"
                name="tableNumbers"
                data-cy="tableNumbers"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.accessPersistentId')}
                id="reservation-accessPersistentId"
                name="accessPersistentId"
                data-cy="accessPersistentId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.arrivedGuests')}
                id="reservation-arrivedGuests"
                name="arrivedGuests"
                data-cy="arrivedGuests"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.isvip')}
                id="reservation-isvip"
                name="isvip"
                data-cy="isvip"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.bookedby')}
                id="reservation-bookedby"
                name="bookedby"
                data-cy="bookedby"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.clientReferenceCode')}
                id="reservation-clientReferenceCode"
                name="clientReferenceCode"
                data-cy="clientReferenceCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.lastname')}
                id="reservation-lastname"
                name="lastname"
                data-cy="lastname"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.firstname')}
                id="reservation-firstname"
                name="firstname"
                data-cy="firstname"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.email')}
                id="reservation-email"
                name="email"
                data-cy="email"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.phoneNumber')}
                id="reservation-phoneNumber"
                name="phoneNumber"
                data-cy="phoneNumber"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.address')}
                id="reservation-address"
                name="address"
                data-cy="address"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.address2')}
                id="reservation-address2"
                name="address2"
                data-cy="address2"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.city')}
                id="reservation-city"
                name="city"
                data-cy="city"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.postalCode')}
                id="reservation-postalCode"
                name="postalCode"
                data-cy="postalCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.state')}
                id="reservation-state"
                name="state"
                data-cy="state"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.country')}
                id="reservation-country"
                name="country"
                data-cy="country"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.loyaltyId')}
                id="reservation-loyaltyId"
                name="loyaltyId"
                data-cy="loyaltyId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.loyaltyRank')}
                id="reservation-loyaltyRank"
                name="loyaltyRank"
                data-cy="loyaltyRank"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.loyaltyTier')}
                id="reservation-loyaltyTier"
                name="loyaltyTier"
                data-cy="loyaltyTier"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.notes')}
                id="reservation-notes"
                name="notes"
                data-cy="notes"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.arrivalTime')}
                id="reservation-arrivalTime"
                name="arrivalTime"
                data-cy="arrivalTime"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.seatedTime')}
                id="reservation-seatedTime"
                name="seatedTime"
                data-cy="seatedTime"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.leftTime')}
                id="reservation-leftTime"
                name="leftTime"
                data-cy="leftTime"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.clientRequests')}
                id="reservation-clientRequests"
                name="clientRequests"
                data-cy="clientRequests"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.comps')}
                id="reservation-comps"
                name="comps"
                data-cy="comps"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.compsPriceType')}
                id="reservation-compsPriceType"
                name="compsPriceType"
                data-cy="compsPriceType"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.costOption')}
                id="reservation-costOption"
                name="costOption"
                data-cy="costOption"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.policy')}
                id="reservation-policy"
                name="policy"
                data-cy="policy"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.minPrice')}
                id="reservation-minPrice"
                name="minPrice"
                data-cy="minPrice"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.prePayment')}
                id="reservation-prePayment"
                name="prePayment"
                data-cy="prePayment"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.onsitePayment')}
                id="reservation-onsitePayment"
                name="onsitePayment"
                data-cy="onsitePayment"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.totalPayment')}
                id="reservation-totalPayment"
                name="totalPayment"
                data-cy="totalPayment"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.paidBy')}
                id="reservation-paidBy"
                name="paidBy"
                data-cy="paidBy"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.servedBy')}
                id="reservation-servedBy"
                name="servedBy"
                data-cy="servedBy"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.rating')}
                id="reservation-rating"
                name="rating"
                data-cy="rating"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.problems')}
                id="reservation-problems"
                name="problems"
                data-cy="problems"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.autoAssignments')}
                id="reservation-autoAssignments"
                name="autoAssignments"
                data-cy="autoAssignments"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.externalClientId')}
                id="reservation-externalClientId"
                name="externalClientId"
                data-cy="externalClientId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.externalId')}
                id="reservation-externalId"
                name="externalId"
                data-cy="externalId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.externalReferenceCode')}
                id="reservation-externalReferenceCode"
                name="externalReferenceCode"
                data-cy="externalReferenceCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.externalUserId')}
                id="reservation-externalUserId"
                name="externalUserId"
                data-cy="externalUserId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.modifyReservationLink')}
                id="reservation-modifyReservationLink"
                name="modifyReservationLink"
                data-cy="modifyReservationLink"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.referenceCode')}
                id="reservation-referenceCode"
                name="referenceCode"
                data-cy="referenceCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.reservationSmsOptin')}
                id="reservation-reservationSmsOptin"
                name="reservationSmsOptin"
                data-cy="reservationSmsOptin"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.reservationType')}
                id="reservation-reservationType"
                name="reservationType"
                data-cy="reservationType"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.sendReminderEmail')}
                id="reservation-sendReminderEmail"
                name="sendReminderEmail"
                data-cy="sendReminderEmail"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.sendreminderSms')}
                id="reservation-sendreminderSms"
                name="sendreminderSms"
                data-cy="sendreminderSms"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.sourceClientId')}
                id="reservation-sourceClientId"
                name="sourceClientId"
                data-cy="sourceClientId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.userId')}
                id="reservation-userId"
                name="userId"
                data-cy="userId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.userName')}
                id="reservation-userName"
                name="userName"
                data-cy="userName"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.techLineage')}
                id="reservation-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.techCreatedDate')}
                id="reservation-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.techUpdatedDate')}
                id="reservation-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.techMapping')}
                id="reservation-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.reservation.techComment')}
                id="reservation-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="reservation-client"
                name="client"
                data-cy="client"
                label={translate('sevenRoomsToHubApplicationApp.reservation.client')}
                type="select"
              >
                <option value="" key="0" />
                {clients
                  ? clients.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/reservation" replace color="info">
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

export default ReservationUpdate;
