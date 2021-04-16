import React from 'react'
import SpellCard from './spellCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  wrapper: {
    listStyle: 'none',
    margin: '20px',
    display: 'flex'
  }
})

export default function CardList({ spellList }) {
  const classes = useStyles();

  return <div className={classes.wrapper}>
    {spellList.map((spell, i) => <SpellCard spell={spell} key={i} />)}
  </div>
}
