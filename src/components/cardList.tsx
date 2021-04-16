import React from 'react'
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import SpellCard from './spellCard'
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    listStyle: "none",
    margin: "0 auto",
    flexWrap: "wrap",
    position: `fixed`,
    top: "20vh",
    left: "10vw",
    width: "80vw",
    height: "60vh",
    background: "rgba(255,255,255, .5)",
    padding: "20px",
    alignItems: "start",
    justifyContent: "start",
    overflowX: "auto",
    overflowY: "hidden",
    borderRadius: "10px",
    zIndex: 4,
    border: "2px solid rgba(0,0,0, .25)",
  },
  closeButton: {
    position: `absolute`,
    right: "0",
    top: "0",
    borderRadius: "50px",
    width: `50px`,
    height: `50px`,
    background: "rgba(255,255,255,1)",
    zIndex: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: `2rem`,
      color: `#000`,
    },
  },
});

export default function CardList({ cards, close }) {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div onClick={close} className={classes.closeButton}>
        <Close />
      </div>
      {cards.map((spell, i) => (
        <SpellCard spell={spell} />
      ))}
    </div>
  );
}
