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
import { IClientTag } from 'app/shared/model/client-tag.model';
import { getEntity, updateEntity, createEntity, reset } from './client-tag.reducer';

export const ClientTagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clients = useAppSelector(state => state.client.entities);
  const clientTagEntity = useAppSelector(state => state.clientTag.entity);
  const loading = useAppSelector(state => state.clientTag.loading);
  const updating = useAppSelector(state => state.clientTag.updating);
  const updateSuccess = useAppSelector(state => state.clientTag.updateSuccess);

  const handleClose = () => {
    navigate('/client-tag' + location.search);
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
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...clientTagEntity,
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
          ...clientTagEntity,
          techCreatedDate: convertDateTimeFromServer(clientTagEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(clientTagEntity.techUpdatedDate),
          client: clientTagEntity?.client?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.clientTag.home.createOrEditLabel" data-cy="ClientTagCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientTag.home.createOrEditLabel">Create or edit a ClientTag</Translate>
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
                  id="client-tag-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.tag')}
                id="client-tag-tag"
                name="tag"
                data-cy="tag"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.tagDisplay')}
                id="client-tag-tagDisplay"
                name="tagDisplay"
                data-cy="tagDisplay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.group')}
                id="client-tag-group"
                name="group"
                data-cy="group"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.groupDisplay')}
                id="client-tag-groupDisplay"
                name="groupDisplay"
                data-cy="groupDisplay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.color')}
                id="client-tag-color"
                name="color"
                data-cy="color"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.techLineage')}
                id="client-tag-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.techCreatedDate')}
                id="client-tag-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.techUpdatedDate')}
                id="client-tag-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.techMapping')}
                id="client-tag-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientTag.techComment')}
                id="client-tag-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="client-tag-client"
                name="client"
                data-cy="client"
                label={translate('sevenRoomsToHubApplicationApp.clientTag.client')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/client-tag" replace color="info">
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

export default ClientTagUpdate;
