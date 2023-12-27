import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ResTag from './res-tag';
import ResTagDetail from './res-tag-detail';
import ResTagUpdate from './res-tag-update';
import ResTagDeleteDialog from './res-tag-delete-dialog';

const ResTagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ResTag />} />
    <Route path="new" element={<ResTagUpdate />} />
    <Route path=":id">
      <Route index element={<ResTagDetail />} />
      <Route path="edit" element={<ResTagUpdate />} />
      <Route path="delete" element={<ResTagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ResTagRoutes;
