import React from 'react'

import { useFonts } from 'expo-font'
import TaskList from './src/screens/TaskList'

const App = () => {
    const [fontsLoaded] = useFonts({
        'Lato' : require('./assets/fonts/Lato.ttf')
    })

    if(!fontsLoaded){
        return null
    }
  return (

    <TaskList/>
  )
}

export default App