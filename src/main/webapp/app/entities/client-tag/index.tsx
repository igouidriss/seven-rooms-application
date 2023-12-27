import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ClientTag from './client-tag';
import ClientTagDetail from './client-tag-detail';
import ClientTagUpdate from './client-tag-update';
import ClientTagDeleteDialog from './client-tag-delete-dialog';

const ClientTagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ClientTag />} />
    <Route path="new" element={<ClientTagUpdate />} />
    <Route path=":id">
      <Route index element={<ClientTagDetail />} />
      <Route path="edit" element={<ClientTagUpdate />} />
      <Route path="delete" element={<ClientTagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ClientTagRoutes;
