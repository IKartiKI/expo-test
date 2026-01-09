import { Stack, Tabs } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      {/* <Stack>
        <Stack.Screen name="proverbs/[id]" 
          options={{ title: "Proverb" }} />
        <Stack.Screen name="products/[category]/[productId]" />
      </Stack> */}
      <Tabs />
    </React.Fragment>
  );
}
