import React from 'react'
import ReactDOM from 'react-dom'
import Reactaroid from '../../src/components/Reactaroid'

const ReactaroidComponent = <Reactaroid alt="A bear"
  caption="A bear"
  fadeDuration="2s"
  filter="lofi"
  src="https://placebear.com/600/600"
/>

ReactDOM.render(ReactaroidComponent, document.querySelector('#demo'))