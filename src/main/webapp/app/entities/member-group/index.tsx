import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import MemberGroup from './member-group';
import MemberGroupDetail from './member-group-detail';
import MemberGroupUpdate from './member-group-update';
import MemberGroupDeleteDialog from './member-group-delete-dialog';

const MemberGroupRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<MemberGroup />} />
    <Route path="new" element={<MemberGroupUpdate />} />
    <Route path=":id">
      <Route index element={<MemberGroupDetail />} />
      <Route path="edit" element={<MemberGroupUpdate />} />
      <Route path="delete" element={<MemberGroupDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MemberGroupRoutes;
