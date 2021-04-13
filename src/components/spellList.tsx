import React from 'react'
import DOCUMENTATION from '../db/Documentation.json'
import Chip from '@material-ui/core/Chip'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import manaStyles from '../components/manaStyles'

const useStyles = makeStyles({
  wrapper: {
    listStyle: 'none',
    margin: '20px',
    display: 'flex'
  },
  line: {
    cursor: 'hover',
    lineHeight: '1.5'
  },
  spell__card: {
    maxWidth: '300px;',
    width: '100%',
    margin: '5px'
  },
  spell__name: {
    fonSize: '1.3rem',
    fontWeight: 'bold'
  },
  spell__cost: {},
  spell__description: {
    fontSize: '.9rem',
    fontStyle: 'italic'
  },
  spell__dice: {
    fontStyle: 'normal',
    fontWeight: 'bold'
  }
})

export default function CardList({ spellList }) {
  const classes = useStyles();
  const manaClasses = manaStyles();

  const generateDescription = (spell, description) => {
    const { reforceMana, canBeReforced, isOverload, overloadMana } = spell

    let newDescription = description.replace(/([1-9]{1,}d[1-9]{1,})/gm, `<span class='${classes.spell__dice}'>$1</span>`)
    if (canBeReforced) {
      newDescription = newDescription.replace(/%reforce/gm, reforceMana.map(m => `<span class="ms ms-${m}"}></span>`))
    }

    if (isOverload) {
      newDescription = newDescription.replace(/%overload/gm, overloadMana.map(m => `<span class="ms ms-${m}"}></span>`))
    }

    return <em dangerouslySetInnerHTML={{ __html: newDescription }}></em>
  }

  return <div className={classes.wrapper}>
    {spellList.map((spell, i) => <Card variant="outlined" className={classes.spell__card} key={i}>
      <CardContent>
        <Typography className={classes.spell__cost} color="textSecondary" gutterBottom>
          <Chip size="small" label={<><span className={`ms ms-${spell.type}`}></span> <span>{DOCUMENTATION.TYPES[spell.type]}</span></>} />
          {spell.canBeReforced && <Chip size="small" label={<><span className={`ms ms ms-ability-kicker`}></span> <span>{DOCUMENTATION.TYPES['reforce']}</span></>} />}
          {spell.isOverload && <Chip size="small" label={<><span className={`ms ms ms-guild-izzet`}></span> <span>{DOCUMENTATION.TYPES['overload']}</span></>} />}
        </Typography>
        <Typography className={classes.spell__name} variant="h5" component="h2">
          {spell.name} {spell.mana.map(m => <span className={`ms ms-${m} ${manaClasses[m]} ${manaClasses.mana}`}></span>)}
        </Typography>
        <Typography className={classes.spell__description} variant="body2" component="p">
          {generateDescription(spell, spell.description)}
        </Typography>
      </CardContent>
    </Card>
    )}
  </div>
}
