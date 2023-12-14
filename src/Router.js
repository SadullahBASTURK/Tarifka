import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import Details from "./pages/Detail/Detail";

import Loading from "./components/Loading";

const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#ffb534', fontSize: 26,}
        }} />
        <Stack.Screen name="Meals" component={Meals}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#ffb534', fontSize: 26,},
          headerTintColor: 'orange',
        }}  />
        <Stack.Screen name="Detail" component={Details}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#ffb534', fontSize: 26,},
          headerTintColor: 'orange',
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;