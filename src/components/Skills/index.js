// == Import npm
import React from 'react';
// == Import
import './skills.scss';
import Front from './Front';
import Back from './Back';
import Cms from './Cms';

// == Composant
const Skills = () => (
  <div className="skills">
    <h1 className="skills_h1">Mes compétences</h1>
    <Front />
    <Back />
    <Cms />
  </div>
);

// == Export
export default Skills;
