import React ,{useContext} from 'react';
import { THEMES } from './constants';
import {  LanguageContext } from '../containers/Language';

const isActive = ({ isActive }) => `link ${isActive ? 'active' : ''}`;

const Menu = ({ onThemeChange }) => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <nav>
      <select defaultValue={"light"} onChange={(e) => onThemeChange(e.target.value)} className='select'>
        {THEMES.map(({ code, label }) => (
          <option key={code} value={code}>
            {dictionary[label]}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Menu;