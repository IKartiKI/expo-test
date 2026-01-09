import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";


export default function SecondScreen() {
  const params = useLocalSearchParams<{ name?: string }>();  
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
      <AppText center size = "heading" bold>
        Second Screen
      </AppText>
      {params.name ? (
        <AppText center className="mt-2">
          Hello, <AppText bold>{params.name}</AppText>!
        </AppText>
      ) : null}
      <Link href="/third" push asChild>
        <Button title = "Push to third"/>
      </Link>   
    </View>
    
  );
}
