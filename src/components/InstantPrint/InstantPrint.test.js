import React from 'react'
import ReactDOM from 'react-dom'
import InstantPrint from './InstantPrint'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <InstantPrint
      altText="A random placeholder image"
      captionText="Something"
      fadeDuration="360s"
      filter="xpro2"
      src="https://picsum.photos/300/300"
    />,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
