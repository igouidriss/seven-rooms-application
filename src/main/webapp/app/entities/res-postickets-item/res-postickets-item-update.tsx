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
import { IResPosticketsItem } from 'app/shared/model/res-postickets-item.model';
import { getEntity, updateEntity, createEntity, reset } from './res-postickets-item.reducer';

export const ResPosticketsItemUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const reservations = useAppSelector(state => state.reservation.entities);
  const resPosticketsItemEntity = useAppSelector(state => state.resPosticketsItem.entity);
  const loading = useAppSelector(state => state.resPosticketsItem.loading);
  const updating = useAppSelector(state => state.resPosticketsItem.updating);
  const updateSuccess = useAppSelector(state => state.resPosticketsItem.updateSuccess);

  const handleClose = () => {
    navigate('/res-postickets-item' + location.search);
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
    if (values.price !== undefined && typeof values.price !== 'number') {
      values.price = Number(values.price);
    }
    if (values.quantity !== undefined && typeof values.quantity !== 'number') {
      values.quantity = Number(values.quantity);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...resPosticketsItemEntity,
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
          ...resPosticketsItemEntity,
          techCreatedDate: convertDateTimeFromServer(resPosticketsItemEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(resPosticketsItemEntity.techUpdatedDate),
          reservation: resPosticketsItemEntity?.reservation?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.resPosticketsItem.home.createOrEditLabel" data-cy="ResPosticketsItemCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.resPosticketsItem.home.createOrEditLabel">
              Create or edit a ResPosticketsItem
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
                  id="res-postickets-item-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.price')}
                id="res-postickets-item-price"
                name="price"
                data-cy="price"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.name')}
                id="res-postickets-item-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.quantity')}
                id="res-postickets-item-quantity"
                name="quantity"
                data-cy="quantity"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.techLineage')}
                id="res-postickets-item-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.techCreatedDate')}
                id="res-postickets-item-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.techUpdatedDate')}
                id="res-postickets-item-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.techMapping')}
                id="res-postickets-item-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.techComment')}
                id="res-postickets-item-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="res-postickets-item-reservation"
                name="reservation"
                data-cy="reservation"
                label={translate('sevenRoomsToHubApplicationApp.resPosticketsItem.reservation')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/res-postickets-item" replace color="info">
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

export default ResPosticketsItemUpdate;
