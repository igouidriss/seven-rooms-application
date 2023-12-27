import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Client from './client';
import MemberGroup from './member-group';
import ClientTag from './client-tag';
import CustomField from './custom-field';
import ClientVenueStats from './client-venue-stats';
import ClientPhoto from './client-photo';
import Reservation from './reservation';
import ResCustomField from './res-custom-field';
import ResPosTicket from './res-pos-ticket';
import ResPosticketsItem from './res-postickets-item';
import ResTag from './res-tag';
import TableNumber from './table-number';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="client/*" element={<Client />} />
        <Route path="member-group/*" element={<MemberGroup />} />
        <Route path="client-tag/*" element={<ClientTag />} />
        <Route path="custom-field/*" element={<CustomField />} />
        <Route path="client-venue-stats/*" element={<ClientVenueStats />} />
        <Route path="client-photo/*" element={<ClientPhoto />} />
        <Route path="reservation/*" element={<Reservation />} />
        <Route path="res-custom-field/*" element={<ResCustomField />} />
        <Route path="res-pos-ticket/*" element={<ResPosTicket />} />
        <Route path="res-postickets-item/*" element={<ResPosticketsItem />} />
        <Route path="res-tag/*" element={<ResTag />} />
        <Route path="table-number/*" element={<TableNumber />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
