import '../global.css'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-aExLight'>HealthyU</Text>
      <Link href={"./(tabs)/profil"} className='text-xs'>Go to profile</Link>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})