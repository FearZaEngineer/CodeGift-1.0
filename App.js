import React, { useEffect,useState } from 'react'
import { View,Text,I18nManager } from 'react-native'
import {Drawer,} from './src/navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MyHeader } from './src/components/header'
import { Home } from './src/screens/home'
import { Stack } from './src/navigation/stack'

import RNRestart from 'react-native-restart'
import './src/i18n/index'
import { useTranslation } from "react-i18next";
import { LangPicker } from './src/screens/LangPicker'
import { Test } from './src/test'
import SplashScreen from 'react-native-splash-screen'



function App(){
  useEffect(()=>{
    storeData()
    SplashScreen.hide()
    
  },[])
  const [firstTime,SetFirstTime]=useState(false)

  async function storeData ()  {
    try {
     const me = await AsyncStorage.getItem('language')
      if(me==null){
        SetFirstTime(true)
      }
      if (me=='ar'){    
        i18n.changeLanguage('ar')
        

      
      }
      if(me=='en'){ 
        i18n.changeLanguage('en')
       

      }
    } catch (e) {
      
    }
    
  }
  const [t, i18n ] = useTranslation();

  return(
    <NavigationContainer>
      {firstTime && <LangPicker/>}
     {!firstTime && <Stack/>}
    </NavigationContainer>

  )
}
export default App