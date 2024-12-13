import { Image,Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import icons from '../../constants/icons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2B4763',
        tabBarInactiveTintColor: '#9B9B9B',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#9B9B9B',
          height: 64,
          paddingTop: 12
        }
      }}
    >
      <Tabs.Screen 
        name='cycle'
        options={{
          title: "Cycle",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.cycle}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"}`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                Cycle
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name='med'
        options={{
          title: "Med",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.med}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"}`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                Medicine
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name='challenge'
        options={{
          title: "challenge",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.challenge}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"} text-nowrap`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                Challenge
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name='bmi'
        options={{
          title: "BMI",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.bmi}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"}`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                BMI
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name='community'
        options={{
          title: "Community",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.community}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"}`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                Community
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View className='flex items-center justify-center' >
              <Image
                source={icons.profile}
                resizeMode="contain"
                tintColor={color}
                className='w-7 h-7'
              />
              <Text
                className={`${focused ? "font-aRegular" : "font-aLight"}`}
                style={{color: color, fontSize: 8, flexWrap: 'nowrap'}}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout