import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { customTransition } from './customTransition'

import Animations from 'screens/Animations'
import AnimationOne from 'screens/AnimationOne'
import AnimationTwo from 'screens/AnimationTwo'

const Stack = createStackNavigator()

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='animations'
        screenOptions={{...customTransition}}
      >
        <Stack.Screen
          name='animations'
          component={Animations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='animation-one'
          component={AnimationOne}
          options={{
            title: 'Animación 1',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='animation-two'
          component={AnimationTwo}
          options={{
            title: 'Animación 2',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}