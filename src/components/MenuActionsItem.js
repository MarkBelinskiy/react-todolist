import React  from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'material-ui/Tooltip';
console.log ( this );
const MenuActionsItem = ( { title, iconURL } ) =>
  <li>
    <Tooltip title={title}
             placement="top">
      <img src={iconURL}
           alt={title}/>
    </Tooltip>
  </li>;
MenuActionsItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconURL: PropTypes.string.isRequired
}

export default MenuActionsItem;