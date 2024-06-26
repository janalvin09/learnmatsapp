import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '@_screens/Account/HomeScreen'
import { MaterialScreen } from '@_screens/Account/Home/MaterialScreen'
import { MaterialDetailScreen } from '@_screens/Account/Home/MaterialDetailScreen'
import { QuestionaireScreen } from '@_screens/Account/Home/QuestionairesScreen'
import { ResultScreen } from '@_screens/Account/Home/ResultScreen'

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}  
    >
      <Stack.Screen  
        name="Home" component={HomeScreen} 
        options={{
          animation:'slide_from_right'
        }}
      />
      <Stack.Screen  
        name="Material" component={MaterialScreen} 
        options={{
          animation:'slide_from_right'
        }}
      />

      <Stack.Screen  
        name="Materialdetail" component={MaterialDetailScreen} 
        options={{
          animation:'slide_from_right'
        }}
      />

      <Stack.Screen  
        name="Question" component={QuestionaireScreen} 
        options={{
          animation: "slide_from_right"
        }}
      />

      <Stack.Screen  
        name="Result" component={ResultScreen} 
        options={{
          animation: "slide_from_right"
        }}
      />
  </Stack.Navigator>
  )
}