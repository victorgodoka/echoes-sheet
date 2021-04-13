import React, { useRef, useState } from "react";
import debounce from 'lodash.debounce';
import { TextField } from "@material-ui/core";
import Library from '../db/Spells.json'
import AutoComplete from "./cardAutocomplete";
import SpellList from "./spellList";

const DefaultInput: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [spellList, setSpellList] = useState<any[]>([]);
  const [value, setValue] = useState<string>("");

  const debouncedSave = useRef(debounce((nextValue: string) => findACard(nextValue), 500)).current;

  function findACard(cardName: string) {
    setCards([]);
    const foundSpells = Library.filter(spell => spell.name.toLowerCase().indexOf(cardName.toLowerCase()) > -1)
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
    <div>
      <div style={{ position: 'relative' }}>
        <TextField
          id="filled-basic"
          label="Select a Spell"
          variant="filled"
          type="text"
          value={value}
          fullWidth
          onChange={handleChange}
        />
      </div>
      <AutoComplete spellList={spellList} selectCard={selectCardAndSave} cards={cards} />

      <SpellList spellList={spellList} />
    </div>
  );
};

export default DefaultInput;