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
import { IClientVenueStats } from 'app/shared/model/client-venue-stats.model';
import { getEntity, updateEntity, createEntity, reset } from './client-venue-stats.reducer';

export const ClientVenueStatsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const clients = useAppSelector(state => state.client.entities);
  const clientVenueStatsEntity = useAppSelector(state => state.clientVenueStats.entity);
  const loading = useAppSelector(state => state.clientVenueStats.loading);
  const updating = useAppSelector(state => state.clientVenueStats.updating);
  const updateSuccess = useAppSelector(state => state.clientVenueStats.updateSuccess);

  const handleClose = () => {
    navigate('/client-venue-stats' + location.search);
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
    if (values.avgRating !== undefined && typeof values.avgRating !== 'number') {
      values.avgRating = Number(values.avgRating);
    }
    if (values.numRatings !== undefined && typeof values.numRatings !== 'number') {
      values.numRatings = Number(values.numRatings);
    }
    if (values.totalCancellations !== undefined && typeof values.totalCancellations !== 'number') {
      values.totalCancellations = Number(values.totalCancellations);
    }
    if (values.totalCovers !== undefined && typeof values.totalCovers !== 'number') {
      values.totalCovers = Number(values.totalCovers);
    }
    if (values.totalNoShows !== undefined && typeof values.totalNoShows !== 'number') {
      values.totalNoShows = Number(values.totalNoShows);
    }
    if (values.totalSpend !== undefined && typeof values.totalSpend !== 'number') {
      values.totalSpend = Number(values.totalSpend);
    }
    if (values.totalSpendLocal !== undefined && typeof values.totalSpendLocal !== 'number') {
      values.totalSpendLocal = Number(values.totalSpendLocal);
    }
    if (values.totalSpendLocalperCover !== undefined && typeof values.totalSpendLocalperCover !== 'number') {
      values.totalSpendLocalperCover = Number(values.totalSpendLocalperCover);
    }
    if (values.totalSpendLocalPerVisit !== undefined && typeof values.totalSpendLocalPerVisit !== 'number') {
      values.totalSpendLocalPerVisit = Number(values.totalSpendLocalPerVisit);
    }
    if (values.totalSpendperCover !== undefined && typeof values.totalSpendperCover !== 'number') {
      values.totalSpendperCover = Number(values.totalSpendperCover);
    }
    if (values.totalSpendPerVisit !== undefined && typeof values.totalSpendPerVisit !== 'number') {
      values.totalSpendPerVisit = Number(values.totalSpendPerVisit);
    }
    if (values.totalVisit !== undefined && typeof values.totalVisit !== 'number') {
      values.totalVisit = Number(values.totalVisit);
    }
    values.techCreatedDate = convertDateTimeToServer(values.techCreatedDate);
    values.techUpdatedDate = convertDateTimeToServer(values.techUpdatedDate);

    const entity = {
      ...clientVenueStatsEntity,
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
          ...clientVenueStatsEntity,
          techCreatedDate: convertDateTimeFromServer(clientVenueStatsEntity.techCreatedDate),
          techUpdatedDate: convertDateTimeFromServer(clientVenueStatsEntity.techUpdatedDate),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sevenRoomsToHubApplicationApp.clientVenueStats.home.createOrEditLabel" data-cy="ClientVenueStatsCreateUpdateHeading">
            <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.home.createOrEditLabel">
              Create or edit a ClientVenueStats
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
                  id="client-venue-stats-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.venueId')}
                id="client-venue-stats-venueId"
                name="venueId"
                data-cy="venueId"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.avgRating')}
                id="client-venue-stats-avgRating"
                name="avgRating"
                data-cy="avgRating"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.bookedByNames')}
                id="client-venue-stats-bookedByNames"
                name="bookedByNames"
                data-cy="bookedByNames"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.lastVisitDate')}
                id="client-venue-stats-lastVisitDate"
                name="lastVisitDate"
                data-cy="lastVisitDate"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.numRatings')}
                id="client-venue-stats-numRatings"
                name="numRatings"
                data-cy="numRatings"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalCancellations')}
                id="client-venue-stats-totalCancellations"
                name="totalCancellations"
                data-cy="totalCancellations"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalCovers')}
                id="client-venue-stats-totalCovers"
                name="totalCovers"
                data-cy="totalCovers"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalNoShows')}
                id="client-venue-stats-totalNoShows"
                name="totalNoShows"
                data-cy="totalNoShows"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpend')}
                id="client-venue-stats-totalSpend"
                name="totalSpend"
                data-cy="totalSpend"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocal')}
                id="client-venue-stats-totalSpendLocal"
                name="totalSpendLocal"
                data-cy="totalSpendLocal"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalperCover')}
                id="client-venue-stats-totalSpendLocalperCover"
                name="totalSpendLocalperCover"
                data-cy="totalSpendLocalperCover"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalPerVisit')}
                id="client-venue-stats-totalSpendLocalPerVisit"
                name="totalSpendLocalPerVisit"
                data-cy="totalSpendLocalPerVisit"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendperCover')}
                id="client-venue-stats-totalSpendperCover"
                name="totalSpendperCover"
                data-cy="totalSpendperCover"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendPerVisit')}
                id="client-venue-stats-totalSpendPerVisit"
                name="totalSpendPerVisit"
                data-cy="totalSpendPerVisit"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.totalVisit')}
                id="client-venue-stats-totalVisit"
                name="totalVisit"
                data-cy="totalVisit"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptin')}
                id="client-venue-stats-venueMarketingOptin"
                name="venueMarketingOptin"
                data-cy="venueMarketingOptin"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptints')}
                id="client-venue-stats-venueMarketingOptints"
                name="venueMarketingOptints"
                data-cy="venueMarketingOptints"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.techLineage')}
                id="client-venue-stats-techLineage"
                name="techLineage"
                data-cy="techLineage"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.techCreatedDate')}
                id="client-venue-stats-techCreatedDate"
                name="techCreatedDate"
                data-cy="techCreatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.techUpdatedDate')}
                id="client-venue-stats-techUpdatedDate"
                name="techUpdatedDate"
                data-cy="techUpdatedDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.techMapping')}
                id="client-venue-stats-techMapping"
                name="techMapping"
                data-cy="techMapping"
                type="text"
              />
              <ValidatedField
                label={translate('sevenRoomsToHubApplicationApp.clientVenueStats.techComment')}
                id="client-venue-stats-techComment"
                name="techComment"
                data-cy="techComment"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/client-venue-stats" replace color="info">
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

export default ClientVenueStatsUpdate;
