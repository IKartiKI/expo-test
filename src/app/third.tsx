import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";


export default function Thirdcreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-blue-200">
      <AppText center size = "heading" bold>
        Third Screen
      </AppText>
      <Link href="/" dismissTo asChild>
        <Button title = "Dismiss to /"/>
      </Link>
      <Link href="/" push asChild>
        <Button title = "Push to /"/>
      </Link>
      <Link href="/second" replace asChild>
        <Button title = "Replace with /second"/>
      </Link>
    </View>
  );
}
