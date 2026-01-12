import { Stack } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
<<<<<<< Updated upstream
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="second" />
        <Stack.Screen name="proverbs/[id]" 
          options={{ title: "Proverb" }} />
        <Stack.Screen name="products/[category]/[productId]" />
      </Stack>
=======
     <Tabs screenOptions={{ tabBarActiveTintColor: "teal"}}>
        <Tabs.Screen name="index" options={{
           title: "Home",
           //href: null,
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-1-box-outline" size={24} color={color} />
            }} />
        <Tabs.Screen name="second" options={{  
          title: "Second",
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-2-box-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="third" options={{ 
          title: "Third",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-3-box-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="fourth" options={{ 
          title: "Fourth",
          //tabBarBadge: "+1",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-4-box-outline" size={24} color={color} />
        }} />
      </Tabs>
>>>>>>> Stashed changes
    </React.Fragment>
  );
}
