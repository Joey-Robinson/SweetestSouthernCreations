import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealExampleMoveUp = () => (
  <Reveal animated='move up'>
    <Reveal.Content visible>
      <Image src='http://via.placeholder.com/350x150' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://placeimg.com/640/480/any' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealExampleMoveUp
