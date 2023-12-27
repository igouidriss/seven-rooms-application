import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './client-venue-stats.reducer';

export const ClientVenueStatsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const clientVenueStatsEntity = useAppSelector(state => state.clientVenueStats.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientVenueStatsDetailsHeading">
          <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.detail.title">ClientVenueStats</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.id}</dd>
          <dt>
            <span id="venueId">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueId">Venue Id</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.venueId}</dd>
          <dt>
            <span id="avgRating">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.avgRating">Avg Rating</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.avgRating}</dd>
          <dt>
            <span id="bookedByNames">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.bookedByNames">Booked By Names</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.bookedByNames}</dd>
          <dt>
            <span id="lastVisitDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.lastVisitDate">Last Visit Date</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.lastVisitDate}</dd>
          <dt>
            <span id="numRatings">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.numRatings">Num Ratings</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.numRatings}</dd>
          <dt>
            <span id="totalCancellations">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalCancellations">Total Cancellations</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalCancellations}</dd>
          <dt>
            <span id="totalCovers">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalCovers">Total Covers</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalCovers}</dd>
          <dt>
            <span id="totalNoShows">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalNoShows">Total No Shows</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalNoShows}</dd>
          <dt>
            <span id="totalSpend">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpend">Total Spend</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpend}</dd>
          <dt>
            <span id="totalSpendLocal">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocal">Total Spend Local</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpendLocal}</dd>
          <dt>
            <span id="totalSpendLocalperCover">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalperCover">
                Total Spend Localper Cover
              </Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpendLocalperCover}</dd>
          <dt>
            <span id="totalSpendLocalPerVisit">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendLocalPerVisit">
                Total Spend Local Per Visit
              </Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpendLocalPerVisit}</dd>
          <dt>
            <span id="totalSpendperCover">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendperCover">Total Spendper Cover</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpendperCover}</dd>
          <dt>
            <span id="totalSpendPerVisit">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalSpendPerVisit">Total Spend Per Visit</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalSpendPerVisit}</dd>
          <dt>
            <span id="totalVisit">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.totalVisit">Total Visit</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.totalVisit}</dd>
          <dt>
            <span id="venueMarketingOptin">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptin">Venue Marketing Optin</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.venueMarketingOptin ? 'true' : 'false'}</dd>
          <dt>
            <span id="venueMarketingOptints">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.venueMarketingOptints">
                Venue Marketing Optints
              </Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.venueMarketingOptints}</dd>
          <dt>
            <span id="techLineage">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techLineage">Tech Lineage</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.techLineage}</dd>
          <dt>
            <span id="techCreatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techCreatedDate">Tech Created Date</Translate>
            </span>
          </dt>
          <dd>
            {clientVenueStatsEntity.techCreatedDate ? (
              <TextFormat value={clientVenueStatsEntity.techCreatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techUpdatedDate">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techUpdatedDate">Tech Updated Date</Translate>
            </span>
          </dt>
          <dd>
            {clientVenueStatsEntity.techUpdatedDate ? (
              <TextFormat value={clientVenueStatsEntity.techUpdatedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="techMapping">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techMapping">Tech Mapping</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.techMapping}</dd>
          <dt>
            <span id="techComment">
              <Translate contentKey="sevenRoomsToHubApplicationApp.clientVenueStats.techComment">Tech Comment</Translate>
            </span>
          </dt>
          <dd>{clientVenueStatsEntity.techComment}</dd>
        </dl>
        <Button tag={Link} to="/client-venue-stats" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client-venue-stats/${clientVenueStatsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientVenueStatsDetail;
