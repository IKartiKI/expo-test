import { AppText } from "@/components/AppText"
import { Link } from "expo-router"
import { View } from "react-native"
import { Button } from "@/components/Button"

export default function SecondScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-yellow-200">
      <AppText center size = "heading" bold>
        Second Screen
      </AppText>
      <Link href= "/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
    </View>
  );
}