import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ResPosTicket from './res-pos-ticket';
import ResPosTicketDetail from './res-pos-ticket-detail';
import ResPosTicketUpdate from './res-pos-ticket-update';
import ResPosTicketDeleteDialog from './res-pos-ticket-delete-dialog';

const ResPosTicketRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ResPosTicket />} />
    <Route path="new" element={<ResPosTicketUpdate />} />
    <Route path=":id">
      <Route index element={<ResPosTicketDetail />} />
      <Route path="edit" element={<ResPosTicketUpdate />} />
      <Route path="delete" element={<ResPosTicketDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ResPosTicketRoutes;
