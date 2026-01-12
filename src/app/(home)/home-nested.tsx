import { View } from "react-native/";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";

export default function HomeNestedScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-blue-200">
      <AppText center size = "heading" bold>
        Home Nested Screen 
        </AppText>
     </View>   
  );
}