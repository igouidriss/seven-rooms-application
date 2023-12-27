import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/client">
        <Translate contentKey="global.menu.entities.client" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/member-group">
        <Translate contentKey="global.menu.entities.memberGroup" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/client-tag">
        <Translate contentKey="global.menu.entities.clientTag" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/custom-field">
        <Translate contentKey="global.menu.entities.customField" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/client-venue-stats">
        <Translate contentKey="global.menu.entities.clientVenueStats" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/client-photo">
        <Translate contentKey="global.menu.entities.clientPhoto" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/reservation">
        <Translate contentKey="global.menu.entities.reservation" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/res-custom-field">
        <Translate contentKey="global.menu.entities.resCustomField" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/res-pos-ticket">
        <Translate contentKey="global.menu.entities.resPosTicket" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/res-postickets-item">
        <Translate contentKey="global.menu.entities.resPosticketsItem" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/res-tag">
        <Translate contentKey="global.menu.entities.resTag" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/table-number">
        <Translate contentKey="global.menu.entities.tableNumber" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
