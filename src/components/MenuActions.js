import React from 'react';
import PropTypes from 'prop-types';
import MenuActionsItem from './MenuActionsItem';
import './MenuActions.css';

const MenuActions = ( { menuData } ) =>
  <div className="actions-menu-wrapper">
    <ul className="actions-menu">
      {(menuData.length === 0) ?
        <p>Soryan, there is no actions, yet</p> :
        menuData.map ( menuItem =>
          <MenuActionsItem key={menuItem.id} {...menuItem} />,
        )
      }
    </ul>
  </div>;

MenuActions.propTypes = {
  menuData: PropTypes.array,
};
MenuActions.defaultProps = {
  menuData: [],
};

export default MenuActions;

