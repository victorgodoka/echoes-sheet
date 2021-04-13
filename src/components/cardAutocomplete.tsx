import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  position: absolute;
  top: 72px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 2;
  line-height: 2;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
`

const Line = styled.li`
`

const Button = styled.button`
  border: none;
  outline: none;
  text-align: left;
  width: 100%;
  transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  background-color: #e8e8e8;
  padding: 10px 8px;
  cursor: pointer;

  &:hover {
    background-color: #bcbcbc;
  }
`

export default function AutoComplete({ spellList, cards, selectCard }) {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setOpen(true)
  }, [cards])

  const selectAndClose = (card) => {
    selectCard(card);
    setOpen(false)
  }

  return <Wrapper isOpen={open}>
    {cards.map((card, i) => <Line key={i}><Button disabled={spellList.find(spell => spell.name === card.name)} onClick={() => selectAndClose(card) }>{card.name}</Button></Line>)}
  </Wrapper>
}
