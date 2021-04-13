import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: grid;
  list-style: none;
  margin: 0 auto;
  grid-template-columns: repeat(${() => Math.floor(window.innerWidth / 100)}, 1fr);
  grid-gap: 4px;
`

const Line = styled.li`
  cursor: hover;
`

const Image = styled.img`
  width: 100%;
`

export default function CardList({ cards, selectCard }) {

  return <Wrapper>
    {cards.map((card, i) => <Line key={i} onClick={() => selectCard(card)}><Image title={card?.name} src={card?.image_uris?.png} /></Line>)}
  </Wrapper>
}
