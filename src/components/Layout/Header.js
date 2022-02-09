import React from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = () => {
  return (
  <>
      <header className={classes.header}>
         <h1>Meals App</h1> 
         <HeaderCartButton />
      </header>
      <div className={classes["main-image"]} >
          <img src={mealsImage} alt="Food table" />
      </div>

  </>
  );
};

export default Header;
