import { Stack, Tabs } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
     <Tabs 
      screenOptions={{ tabBarActiveTintColor: "teal"}}
      backBehavior="order"
     >
        <Tabs.Screen name="(home)" options={{
           title: "Home",
           //href: null,
           tabBarLabel: "Home",
           headerShown: false,
           tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-1-box-outline" size={24} color={color} />
            }} />
        <Tabs.Screen name="second" options={{  
          title: "Second",
          headerShown: false,
          popToTopOnBlur: true,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-2-box-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="third" options={{ 
          title: "Third",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-3-box-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="fourth" options={{ 
          title: "Fourth",
          tabBarBadge: "2",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="numeric-4-box-outline" size={24} color={color} />
        }} />
      </Tabs>
    </React.Fragment>
  );
}
