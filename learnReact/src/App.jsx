import { useState } from 'react'
import './App.css'

import Counter from './components/stateHook/Counter'
import FormState from './components/stateHook/FormState'

import UseEffectEx1 from './components/effectHook/UseEffectEx1'
import FetchData from './components/effectHook/FetchData'
import ChangeTheme from './components/effectHook/ChangeTheme'


function App() {

    return (
        <>

            <ChangeTheme />


            {/* <Counter />
            <hr />
            <FormState />
            <hr /> */}

            {/* <UseEffectEx1 />
            <hr />
            <FetchData />
            <hr /> */}

            

        </>
    )
}

export default App
