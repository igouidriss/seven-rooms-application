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
import { IClientPhoto } from 'app/shared/model/client-photo.model';
import { getEntity, updateEntity, createEntity, reset } from './client-photo.reducer';

export const ClientPhotoUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clients = useAppSelector(state => state.client.entities);
  const clientPhotoEntity = useAppSelector(state => state.clientPhoto.entity);
  const loading = useAppSelector(state => state.clientPhoto.loading);
  const updating = useAppSelector(state => state.clientPhoto.updating);
  const updateSuccess = useAppSelector(state => state.clientPhoto.updateSuccess);

  const handleClose = () => {
    navigate('/client-photo' + location.search);
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
    if (values.largeHeight !== undefined && typeof values.largeHeight !== 'number') {
      values.largeHeight = Number(values.largeHeight);
    }
    if (values.largeWidth !== undefined && typeof values.largeWidth !== 'number') {
      values.largeWidth = Number(values.largeWidth);
    }
    if (values.mediumHeight !== undefined && typeof values.mediumHeight !== 'number') {
      values.mediumHeight = Number(values.mediumHeight);
    }
    if (values.mediumWidth !== undefined && typeof values.mediumWidth !== 'number') {
      values.mediumWidth = Number(values.mediumWidth);
    }
    if (values.smallHeight !== undefined && typeof values.smallHeight !== 'number') {
      values.smallHeight = Number(values.smallHeight);
    }
    if (values.smallWidth !== undefined && typeof values.smallWidth !== 'number') {
      values.smallWidth = Number(values.smallWidth);
    }
    if (values.cropx !== undefined && typeof values.cropx !== 'number') {
      values.cropx = Number(values.cropx);
    }
    if (values.cropy !== undefined && typeof values.cropy !== 'number') {
      values.cropy = Number(values.cropy);
    }
    if (values.cropHeight !== undefined && typeof values.cropHeight !== 'number') {
      values.cropHeight = Number(values.cropHeight);
    }
    if (values.cropWidth !== undefined && typeof values.cropWidth !== 'number') {
      values.cropWidth = Number(values.cropWidth);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...clientPhotoEntity,
      ...values,
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
          ...clientPhotoEntity,
          techCreatedDate: convertDateTimeFromServer(clientPhotoEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(clientPhotoEntity.techUpdatedDate),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.clientPhoto.home.createOrEditLabel" data-cy="ClientPhotoCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientPhoto.home.createOrEditLabel">
              Create or edit a ClientPhoto
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
                  id="client-photo-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.clientId')}
                id="client-photo-clientId"
                name="clientId"
                data-cy="clientId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.large')}
                id="client-photo-large"
                name="large"
                data-cy="large"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.largeHeight')}
                id="client-photo-largeHeight"
                name="largeHeight"
                data-cy="largeHeight"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.largeWidth')}
                id="client-photo-largeWidth"
                name="largeWidth"
                data-cy="largeWidth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.medium')}
                id="client-photo-medium"
                name="medium"
                data-cy="medium"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.mediumHeight')}
                id="client-photo-mediumHeight"
                name="mediumHeight"
                data-cy="mediumHeight"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.mediumWidth')}
                id="client-photo-mediumWidth"
                name="mediumWidth"
                data-cy="mediumWidth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.small')}
                id="client-photo-small"
                name="small"
                data-cy="small"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.smallHeight')}
                id="client-photo-smallHeight"
                name="smallHeight"
                data-cy="smallHeight"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.smallWidth')}
                id="client-photo-smallWidth"
                name="smallWidth"
                data-cy="smallWidth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.raw')}
                id="client-photo-raw"
                name="raw"
                data-cy="raw"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.cropx')}
                id="client-photo-cropx"
                name="cropx"
                data-cy="cropx"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.cropy')}
                id="client-photo-cropy"
                name="cropy"
                data-cy="cropy"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.cropHeight')}
                id="client-photo-cropHeight"
                name="cropHeight"
                data-cy="cropHeight"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.cropWidth')}
                id="client-photo-cropWidth"
                name="cropWidth"
                data-cy="cropWidth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.techLineage')}
                id="client-photo-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.techCreatedDate')}
                id="client-photo-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.techUpdatedDate')}
                id="client-photo-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.techMapping')}
                id="client-photo-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientPhoto.techComment')}
                id="client-photo-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/client-photo" replace color="info">
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

export default ClientPhotoUpdate;
