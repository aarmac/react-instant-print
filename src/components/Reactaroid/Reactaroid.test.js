import React from 'react'
import ReactDOM from 'react-dom'
import Reactaroid from './Reactaroid'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <Reactaroid alt="A bear"
      caption="A bear"
      fadeDuration="2s"
      filter="lofi"
      src="https://placebear.com/600/600"
    />,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
