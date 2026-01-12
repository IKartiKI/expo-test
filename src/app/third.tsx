import { AppText } from "@/components/AppText"
import { Link } from "expo-router"
import { View } from "react-native"


export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
      <AppText center size = "heading" bold>
        Index Screen
      </AppText>
    </View>
  );
}