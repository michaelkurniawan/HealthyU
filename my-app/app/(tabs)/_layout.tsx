import { Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name='cycle'
      />
    </Tabs>
  )
}

export default TabsLayout