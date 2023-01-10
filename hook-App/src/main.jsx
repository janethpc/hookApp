import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
//import { FormWithCustomook } from './02-useEffect/FormWithCustomHook.jsx'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { HookApp } from './HookApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MultipleCustomHooks />
  //</React.StrictMode>,
)
