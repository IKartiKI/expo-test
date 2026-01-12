import { AppText } from "@/components/AppText"
import { Link, router } from "expo-router"
import { View } from "react-native"
import { Button } from "@/components/Button"

export default function SecondScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-blue-200">
      <AppText center size = "heading" bold>
        Second Screen
      </AppText>
      <Link href= "/second/nested" push asChild>
        <Button title="Push to /second/nested" />
      </Link>
      <Button 
        title="Back"
        theme= "secondary" 
        onPress={() => {
           router.back(); 
        }}
      />
    </View>
  );
}