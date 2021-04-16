import React, { useRef, useState } from "react";
import debounce from 'lodash.debounce';
import { TextField } from "@material-ui/core";
import SpellLibrary from '../db/SpellLibrary.json'
import AutoComplete from "../components/cardAutocomplete";
import SpellList from "../components/spellList";
import List from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'
import CardList from "../components/cardList";

const useStyles = makeStyles({
  library__wrapper: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  library__base: {
    backgroundColor: '#ffffff20',
    borderRadius: '4px 0',
    position: 'relative',
    width: '100%',
    "& .MuiFormLabel-root": {
      color: '#919191 !important'
    },
    "& .MuiInputBase-input": {
      color: '#fff !important'
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: '2px solid #000'
    }
  },
  library__icon: {
    position: 'absolute',
    right: '10px',
    top: '12px',
    color: '#fff',
    fontSize: '2rem',
    zIndex: 2,
    cursor: 'pointer'
  }
})

const Library: React.FC = () => {
  const classes = useStyles()
  const [cards, setCards] = useState<any[]>([]);
  const [spellList, setSpellList] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");
  const [showSpellList, setShowSpellList] = useState<boolean>(false);

  const debouncedSave = useRef(debounce((nextValue: string) => findACard(nextValue), 500)).current;

  function findACard(cardName: string) {
    setCards([]);
    const foundSpells = SpellLibrary.filter(spell => spell.name.toLowerCase().indexOf(cardName.toLowerCase()) > -1)
    return cardName.length > 3 && setCards(foundSpells ? foundSpells : [])
  }

  const handleChange = (event: { target: { value: any; }; }) => {
    const { value: nextValue } = event.target;
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  const selectCardAndSave = (card) => {
    let _cards = spellList.slice()
    _cards.push(card)
    setSpellList(_cards.sort((a, b) => a.name.localeCompare(b.name)))
    setValue("")
  }

  return (
    <div className={classes.library__wrapper}>
      <div className={classes.library__base}>
        <TextField
          id="filled-basic"
          label="Select a Spell"
          variant="filled"
          type="text"
          value={value}
          fullWidth
          onChange={handleChange}
        />
        <List
          className={classes.library__icon}
          onClick={() => setShowSpellList(!showSpellList)}
        />
      </div>
      <AutoComplete
        spellList={spellList}
        selectCard={selectCardAndSave}
        cards={cards}
      />

      <SpellList spellList={spellList} />
      {showSpellList && <CardList close={() => setShowSpellList(false)} cards={SpellLibrary} />}
    </div>
  );
};

export default Library;