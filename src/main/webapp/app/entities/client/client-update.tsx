import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IClientPhoto } from 'app/shared/model/client-photo.model';
import { getEntities as getClientPhotos } from 'app/entities/client-photo/client-photo.reducer';
import { IClientVenueStats } from 'app/shared/model/client-venue-stats.model';
import { getEntities as getClientVenueStats } from 'app/entities/client-venue-stats/client-venue-stats.reducer';
import { IClient } from 'app/shared/model/client.model';
import { getEntity, updateEntity, createEntity, reset } from './client.reducer';

export const ClientUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clientPhotos = useAppSelector(state => state.clientPhoto.entities);
  const clientVenueStats = useAppSelector(state => state.clientVenueStats.entities);
  const clientEntity = useAppSelector(state => state.client.entity);
  const loading = useAppSelector(state => state.client.loading);
  const updating = useAppSelector(state => state.client.updating);
  const updateSuccess = useAppSelector(state => state.client.updateSuccess);

  const handleClose = () => {
    navigate('/client' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getClientPhotos({}));
    dispatch(getClientVenueStats({}));
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
    if (values.birthdayDay !== undefined && typeof values.birthdayDay !== 'number') {
      values.birthdayDay = Number(values.birthdayDay);
    }
    if (values.birthdayMonth !== undefined && typeof values.birthdayMonth !== 'number') {
      values.birthdayMonth = Number(values.birthdayMonth);
    }
    if (values.birthdayAltMonth !== undefined && typeof values.birthdayAltMonth !== 'number') {
      values.birthdayAltMonth = Number(values.birthdayAltMonth);
    }
    if (values.anniversaryDay !== undefined && typeof values.anniversaryDay !== 'number') {
      values.anniversaryDay = Number(values.anniversaryDay);
    }
    if (values.anniversaryMonth !== undefined && typeof values.anniversaryMonth !== 'number') {
      values.anniversaryMonth = Number(values.anniversaryMonth);
    }
    if (values.loyaltyRank !== undefined && typeof values.loyaltyRank !== 'number') {
      values.loyaltyRank = Number(values.loyaltyRank);
    }
    if (values.totalVisits !== undefined && typeof values.totalVisits !== 'number') {
      values.totalVisits = Number(values.totalVisits);
    }
    if (values.totalCovers !== undefined && typeof values.totalCovers !== 'number') {
      values.totalCovers = Number(values.totalCovers);
    }
    if (values.totalCancellations !== undefined && typeof values.totalCancellations !== 'number') {
      values.totalCancellations = Number(values.totalCancellations);
    }
    if (values.totalNoShows !== undefined && typeof values.totalNoShows !== 'number') {
      values.totalNoShows = Number(values.totalNoShows);
    }
    if (values.totalSpend !== undefined && typeof values.totalSpend !== 'number') {
      values.totalSpend = Number(values.totalSpend);
    }
    if (values.totalSpendPerCover !== undefined && typeof values.totalSpendPerCover !== 'number') {
      values.totalSpendPerCover = Number(values.totalSpendPerCover);
    }
    if (values.totalspendPerVisit !== undefined && typeof values.totalspendPerVisit !== 'number') {
      values.totalspendPerVisit = Number(values.totalspendPerVisit);
    }
    if (values.avgRating !== undefined && typeof values.avgRating !== 'number') {
      values.avgRating = Number(values.avgRating);
    }
    if (values.birthdayAltDay !== undefined && typeof values.birthdayAltDay !== 'number') {
      values.birthdayAltDay = Number(values.birthdayAltDay);
    }
    if (values.totalOrderCount !== undefined && typeof values.totalOrderCount !== 'number') {
      values.totalOrderCount = Number(values.totalOrderCount);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...clientEntity,
      ...values,
      clientPhoto: clientPhotos.find(it => it.id.toString() === values.clientPhoto.toString()),
      clientVenueStats: clientVenueStats.find(it => it.id.toString() === values.clientVenueStats.toString()),
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
          ...clientEntity,
          techCreatedDate: convertDateTimeFromServer(clientEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(clientEntity.techUpdatedDate),
          clientPhoto: clientEntity?.clientPhoto?.id,
          clientVenueStats: clientEntity?.clientVenueStats?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.client.home.createOrEditLabel" data-cy="ClientCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.client.home.createOrEditLabel">Create or edit a Client</Translate>
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
                  id="client-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.clientId')}
                id="client-clientId"
                name="clientId"
                data-cy="clientId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.createdDate')}
                id="client-createdDate"
                name="createdDate"
                data-cy="createdDate"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.updatedDate')}
                id="client-updatedDate"
                name="updatedDate"
                data-cy="updatedDate"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.deletedDate')}
                id="client-deletedDate"
                name="deletedDate"
                data-cy="deletedDate"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.lastname')}
                id="client-lastname"
                name="lastname"
                data-cy="lastname"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.firstname')}
                id="client-firstname"
                name="firstname"
                data-cy="firstname"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.gender')}
                id="client-gender"
                name="gender"
                data-cy="gender"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.salutation')}
                id="client-salutation"
                name="salutation"
                data-cy="salutation"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.title')}
                id="client-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.birthdayDay')}
                id="client-birthdayDay"
                name="birthdayDay"
                data-cy="birthdayDay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.birthdayMonth')}
                id="client-birthdayMonth"
                name="birthdayMonth"
                data-cy="birthdayMonth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.birthdayAltMonth')}
                id="client-birthdayAltMonth"
                name="birthdayAltMonth"
                data-cy="birthdayAltMonth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.anniversaryDay')}
                id="client-anniversaryDay"
                name="anniversaryDay"
                data-cy="anniversaryDay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.anniversaryMonth')}
                id="client-anniversaryMonth"
                name="anniversaryMonth"
                data-cy="anniversaryMonth"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.company')}
                id="client-company"
                name="company"
                data-cy="company"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.email')}
                id="client-email"
                name="email"
                data-cy="email"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.emailAlt')}
                id="client-emailAlt"
                name="emailAlt"
                data-cy="emailAlt"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.phoneNumber')}
                id="client-phoneNumber"
                name="phoneNumber"
                data-cy="phoneNumber"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.phoneNumberlocale')}
                id="client-phoneNumberlocale"
                name="phoneNumberlocale"
                data-cy="phoneNumberlocale"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.phoneNumberalt')}
                id="client-phoneNumberalt"
                name="phoneNumberalt"
                data-cy="phoneNumberalt"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.phoneNumberaltlocale')}
                id="client-phoneNumberaltlocale"
                name="phoneNumberaltlocale"
                data-cy="phoneNumberaltlocale"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.address')}
                id="client-address"
                name="address"
                data-cy="address"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.address2')}
                id="client-address2"
                name="address2"
                data-cy="address2"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.city')}
                id="client-city"
                name="city"
                data-cy="city"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.postalCode')}
                id="client-postalCode"
                name="postalCode"
                data-cy="postalCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.state')}
                id="client-state"
                name="state"
                data-cy="state"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.country')}
                id="client-country"
                name="country"
                data-cy="country"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.isContactPrivate')}
                id="client-isContactPrivate"
                name="isContactPrivate"
                data-cy="isContactPrivate"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.isOnetimeGuest')}
                id="client-isOnetimeGuest"
                name="isOnetimeGuest"
                data-cy="isOnetimeGuest"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.status')}
                id="client-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.loyaltyId')}
                id="client-loyaltyId"
                name="loyaltyId"
                data-cy="loyaltyId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.loyaltyRank')}
                id="client-loyaltyRank"
                name="loyaltyRank"
                data-cy="loyaltyRank"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.loyaltyTier')}
                id="client-loyaltyTier"
                name="loyaltyTier"
                data-cy="loyaltyTier"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.marketingOptin')}
                id="client-marketingOptin"
                name="marketingOptin"
                data-cy="marketingOptin"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.marketingOptints')}
                id="client-marketingOptints"
                name="marketingOptints"
                data-cy="marketingOptints"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.marketingOptOutts')}
                id="client-marketingOptOutts"
                name="marketingOptOutts"
                data-cy="marketingOptOutts"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.hasBillingProfile')}
                id="client-hasBillingProfile"
                name="hasBillingProfile"
                data-cy="hasBillingProfile"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.notes')}
                id="client-notes"
                name="notes"
                data-cy="notes"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.privateNotes')}
                id="client-privateNotes"
                name="privateNotes"
                data-cy="privateNotes"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.tags')}
                id="client-tags"
                name="tags"
                data-cy="tags"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalVisits')}
                id="client-totalVisits"
                name="totalVisits"
                data-cy="totalVisits"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalCovers')}
                id="client-totalCovers"
                name="totalCovers"
                data-cy="totalCovers"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalCancellations')}
                id="client-totalCancellations"
                name="totalCancellations"
                data-cy="totalCancellations"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalNoShows')}
                id="client-totalNoShows"
                name="totalNoShows"
                data-cy="totalNoShows"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalSpend')}
                id="client-totalSpend"
                name="totalSpend"
                data-cy="totalSpend"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalSpendPerCover')}
                id="client-totalSpendPerCover"
                name="totalSpendPerCover"
                data-cy="totalSpendPerCover"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalspendPerVisit')}
                id="client-totalspendPerVisit"
                name="totalspendPerVisit"
                data-cy="totalspendPerVisit"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.avgRating')}
                id="client-avgRating"
                name="avgRating"
                data-cy="avgRating"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.referenceCode')}
                id="client-referenceCode"
                name="referenceCode"
                data-cy="referenceCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.externalUserId')}
                id="client-externalUserId"
                name="externalUserId"
                data-cy="externalUserId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.venueGroupId')}
                id="client-venueGroupId"
                name="venueGroupId"
                data-cy="venueGroupId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.birthdayAltDay')}
                id="client-birthdayAltDay"
                name="birthdayAltDay"
                data-cy="birthdayAltDay"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.userId')}
                id="client-userId"
                name="userId"
                data-cy="userId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.userName')}
                id="client-userName"
                name="userName"
                data-cy="userName"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.totalOrderCount')}
                id="client-totalOrderCount"
                name="totalOrderCount"
                data-cy="totalOrderCount"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.preferredLanguageCode')}
                id="client-preferredLanguageCode"
                name="preferredLanguageCode"
                data-cy="preferredLanguageCode"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.techLineage')}
                id="client-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.techCreatedDate')}
                id="client-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.techUpdatedDate')}
                id="client-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.techMapping')}
                id="client-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.client.techComment')}
                id="client-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <ValidatedField
                id="client-clientPhoto"
                name="clientPhoto"
                data-cy="clientPhoto"
                label={translate('sevenRoomsToHubApplicationApp.client.clientPhoto')}
                type="select"
              >
                <option value="" key="0" />
                {clientPhotos
                  ? clientPhotos.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="client-clientVenueStats"
                name="clientVenueStats"
                data-cy="clientVenueStats"
                label={translate('sevenRoomsToHubApplicationApp.client.clientVenueStats')}
                type="select"
              >
                <option value="" key="0" />
                {clientVenueStats
                  ? clientVenueStats.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/client" replace color="info">
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

export default ClientUpdate;
