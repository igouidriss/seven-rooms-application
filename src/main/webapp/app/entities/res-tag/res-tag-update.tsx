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
import { IResTag } from 'app/shared/model/res-tag.model';
import { getEntity, updateEntity, createEntity, reset } from './res-tag.reducer';

export const ResTagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const reservations = useAppSelector(state => state.reservation.entities);
  const resTagEntity = useAppSelector(state => state.resTag.entity);
  const loading = useAppSelector(state => state.resTag.loading);
  const updating = useAppSelector(state => state.resTag.updating);
  const updateSuccess = useAppSelector(state => state.resTag.updateSuccess);

  const handleClose = () => {
    navigate('/res-tag' + location.search);
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
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...resTagEntity,
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
          ...resTagEntity,
          techCreatedDate: convertDateTimeFromServer(resTagEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(resTagEntity.techUpdatedDate),
          reservation: resTagEntity?.reservation?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.resTag.home.createOrEditLabel" data-cy="ResTagCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.resTag.home.createOrEditLabel">Create or edit a ResTag</Translate>
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
                  id="res-tag-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.tag')}
                id="res-tag-tag"
                name="tag"
                data-cy="tag"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.tagDisplay')}
                id="res-tag-tagDisplay"
                name="tagDisplay"
                data-cy="tagDisplay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.group')}
                id="res-tag-group"
                name="group"
                data-cy="group"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.groupDisplay')}
                id="res-tag-groupDisplay"
                name="groupDisplay"
                data-cy="groupDisplay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.color')}
                id="res-tag-color"
                name="color"
                data-cy="color"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.techLineage')}
                id="res-tag-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.techCreatedDate')}
                id="res-tag-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.techUpdatedDate')}
                id="res-tag-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.techMapping')}
                id="res-tag-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.resTag.techComment')}
                id="res-tag-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="res-tag-reservation"
                name="reservation"
                data-cy="reservation"
                label={translate('sevenRoomsToHubApplicationApp.resTag.reservation')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/res-tag" replace color="info">
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

export default ResTagUpdate;
