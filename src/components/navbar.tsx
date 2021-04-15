import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

function Navbar() {
  const classes = makeStyles({
    nav: {
      display: 'flex',
      backgroundColor: 'rgba(0,0,0,.5)',
      justifyContent: 'space-between',
      padding: '20px'
    },
    nav__link: {
      color: '#d0bc8d',
      fontSize: '1.355rem',
      textDecoration: 'none',
      fontFamily: '"Beleren Bold", serif'
    }
  })();

  return <nav>
    <ul className={classes.nav}>
      <li>
        <Link className={classes.nav__link} to="/">Home</Link>
      </li>
      <li>
        <Link className={classes.nav__link} to="/library">Library</Link>
      </li>
      <li>
        <Link className={classes.nav__link} to="/new">Create a new Character</Link>
      </li>
    </ul>
  </nav>
}

export default Navbar;
