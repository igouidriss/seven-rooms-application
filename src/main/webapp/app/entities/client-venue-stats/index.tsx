import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ClientVenueStats from './client-venue-stats';
import ClientVenueStatsDetail from './client-venue-stats-detail';
import ClientVenueStatsUpdate from './client-venue-stats-update';
import ClientVenueStatsDeleteDialog from './client-venue-stats-delete-dialog';

const ClientVenueStatsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ClientVenueStats />} />
    <Route path="new" element={<ClientVenueStatsUpdate />} />
    <Route path=":id">
      <Route index element={<ClientVenueStatsDetail />} />
      <Route path="edit" element={<ClientVenueStatsUpdate />} />
      <Route path="delete" element={<ClientVenueStatsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ClientVenueStatsRoutes;
