import React from 'react';
import './RulesButton.scss';

const RulesButton = ({ toggle }) => {
  return (
    <button className='rulesbutton' onClick={toggle}>RULES</button>
  )
}

export default RulesButton