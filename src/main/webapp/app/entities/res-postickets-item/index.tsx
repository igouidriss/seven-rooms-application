import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ResPosticketsItem from './res-postickets-item';
import ResPosticketsItemDetail from './res-postickets-item-detail';
import ResPosticketsItemUpdate from './res-postickets-item-update';
import ResPosticketsItemDeleteDialog from './res-postickets-item-delete-dialog';

const ResPosticketsItemRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ResPosticketsItem />} />
    <Route path="new" element={<ResPosticketsItemUpdate />} />
    <Route path=":id">
      <Route index element={<ResPosticketsItemDetail />} />
      <Route path="edit" element={<ResPosticketsItemUpdate />} />
      <Route path="delete" element={<ResPosticketsItemDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ResPosticketsItemRoutes;
