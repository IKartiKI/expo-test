import { AppText } from "@/components/AppText"
import { Link, router } from "expo-router"
import { View } from "react-native"
import { Button } from "@/components/Button"


export default function FourthScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-blue-200">
      <AppText center size = "heading" bold>
        Index Screen
      </AppText>
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