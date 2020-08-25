import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

import Index from './src/pages/Index';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {

    return <AppLoading />

  } else {

    return <>
      <StatusBar style="dark" />
      <Index />
    </>
  }
}