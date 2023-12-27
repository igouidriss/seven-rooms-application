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
import { IResCustomField } from 'app/shared/model/res-custom-field.model';
import { getEntity, updateEntity, createEntity, reset } from './res-custom-field.reducer';

export const ResCustomFieldUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const reservations = useAppSelector(state => state.reservation.entities);
  const resCustomFieldEntity = useAppSelector(state => state.resCustomField.entity);
  const loading = useAppSelector(state => state.resCustomField.loading);
  const updating = useAppSelector(state => state.resCustomField.updating);
  const updateSuccess = useAppSelector(state => state.resCustomField.updateSuccess);

  const handleClose = () => {
    navigate('/res-custom-field' + location.search);
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
    if (values.displayOrder !== undefined && typeof values.displayOrder !== 'number') {
      values.displayOrder = Number(values.displayOrder);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...resCustomFieldEntity,
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
          ...resCustomFieldEntity,
          techCreatedDate: convertDateTimeFromServer(resCustomFieldEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(resCustomFieldEntity.techUpdatedDate),
          reservation: resCustomFieldEntity?.reservation?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.resCustomField.home.createOrEditLabel" data-cy="ResCustomFieldCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.resCustomField.home.createOrEditLabel">
              Create or edit a ResCustomField
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
                  id="res-custom-field-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.systemName')}
                id="res-custom-field-systemName"
                name="systemName"
                data-cy="systemName"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.displayOrder')}
                id="res-custom-field-displayOrder"
                name="displayOrder"
                data-cy="displayOrder"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.name')}
                id="res-custom-field-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.value')}
                id="res-custom-field-value"
                name="value"
                data-cy="value"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.techLineage')}
                id="res-custom-field-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.techCreatedDate')}
                id="res-custom-field-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.techUpdatedDate')}
                id="res-custom-field-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.techMapping')}
                id="res-custom-field-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.techComment')}
                id="res-custom-field-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="res-custom-field-reservation"
                name="reservation"
                data-cy="reservation"
                label={translate('sevenRoomsToHubApplicationApp.resCustomField.reservation')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/res-custom-field" replace color="info">
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

export default ResCustomFieldUpdate;
