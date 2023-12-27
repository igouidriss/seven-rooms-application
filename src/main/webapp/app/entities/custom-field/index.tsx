import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CustomField from './custom-field';
import CustomFieldDetail from './custom-field-detail';
import CustomFieldUpdate from './custom-field-update';
import CustomFieldDeleteDialog from './custom-field-delete-dialog';

const CustomFieldRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CustomField />} />
    <Route path="new" element={<CustomFieldUpdate />} />
    <Route path=":id">
      <Route index element={<CustomFieldDetail />} />
      <Route path="edit" element={<CustomFieldUpdate />} />
      <Route path="delete" element={<CustomFieldDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CustomFieldRoutes;
