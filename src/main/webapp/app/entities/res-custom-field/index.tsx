import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ResCustomField from './res-custom-field';
import ResCustomFieldDetail from './res-custom-field-detail';
import ResCustomFieldUpdate from './res-custom-field-update';
import ResCustomFieldDeleteDialog from './res-custom-field-delete-dialog';

const ResCustomFieldRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ResCustomField />} />
    <Route path="new" element={<ResCustomFieldUpdate />} />
    <Route path=":id">
      <Route index element={<ResCustomFieldDetail />} />
      <Route path="edit" element={<ResCustomFieldUpdate />} />
      <Route path="delete" element={<ResCustomFieldDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ResCustomFieldRoutes;
