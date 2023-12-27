import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ClientPhoto from './client-photo';
import ClientPhotoDetail from './client-photo-detail';
import ClientPhotoUpdate from './client-photo-update';
import ClientPhotoDeleteDialog from './client-photo-delete-dialog';

const ClientPhotoRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ClientPhoto />} />
    <Route path="new" element={<ClientPhotoUpdate />} />
    <Route path=":id">
      <Route index element={<ClientPhotoDetail />} />
      <Route path="edit" element={<ClientPhotoUpdate />} />
      <Route path="delete" element={<ClientPhotoDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ClientPhotoRoutes;
