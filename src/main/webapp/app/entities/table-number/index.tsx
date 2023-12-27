import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import TableNumber from './table-number';
import TableNumberDetail from './table-number-detail';
import TableNumberUpdate from './table-number-update';
import TableNumberDeleteDialog from './table-number-delete-dialog';

const TableNumberRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<TableNumber />} />
    <Route path="new" element={<TableNumberUpdate />} />
    <Route path=":id">
      <Route index element={<TableNumberDetail />} />
      <Route path="edit" element={<TableNumberUpdate />} />
      <Route path="delete" element={<TableNumberDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default TableNumberRoutes;
