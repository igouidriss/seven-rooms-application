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
import { ICustomField } from 'app/shared/model/custom-field.model';
import { getEntity, updateEntity, createEntity, reset } from './custom-field.reducer';

export const CustomFieldUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clients = useAppSelector(state => state.client.entities);
  const customFieldEntity = useAppSelector(state => state.customField.entity);
  const loading = useAppSelector(state => state.customField.loading);
  const updating = useAppSelector(state => state.customField.updating);
  const updateSuccess = useAppSelector(state => state.customField.updateSuccess);

  const handleClose = () => {
    navigate('/custom-field' + location.search);
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
    if (values.displayOrder !== undefined && typeof values.displayOrder !== 'number') {
      values.displayOrder = Number(values.displayOrder);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...customFieldEntity,
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
          ...customFieldEntity,
          techCreatedDate: convertDateTimeFromServer(customFieldEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(customFieldEntity.techUpdatedDate),
          client: customFieldEntity?.client?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.customField.home.createOrEditLabel" data-cy="CustomFieldCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.customField.home.createOrEditLabel">
              Create or edit a CustomField
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
                  id="custom-field-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.systemName')}
                id="custom-field-systemName"
                name="systemName"
                data-cy="systemName"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.displayOrder')}
                id="custom-field-displayOrder"
                name="displayOrder"
                data-cy="displayOrder"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.name')}
                id="custom-field-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.value')}
                id="custom-field-value"
                name="value"
                data-cy="value"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.techLineage')}
                id="custom-field-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.techCreatedDate')}
                id="custom-field-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.techUpdatedDate')}
                id="custom-field-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.techMapping')}
                id="custom-field-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.customField.techComment')}
                id="custom-field-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="custom-field-client"
                name="client"
                data-cy="client"
                label={translate('sevenRoomsToHubApplicationApp.customField.client')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/custom-field" replace color="info">
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

export default CustomFieldUpdate;
