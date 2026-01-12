import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { Alert } from "react-native";


export default function IndexScreen() {
  const router = useRouter();
  const canGoBack = router.canGoBack(); 

  const handleOpenAlert = () => {
    // Alert.alert(
    //   "Navigation Info",
    //   canGoBack ? "You can go back to the previous screen." : "No previous screen to go back to."
    // );
    Alert.alert("Warning!", "Are you sure you want to proceed?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { 
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive"
     }
    ]);
  }
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size = "heading" bold>
        Index Screen
      </AppText>
      <Link href="/home-nested" push asChild>
        <Button title="Push to /home-nested" />
      </Link>
      {canGoBack ? (
        <Button 
          title="Back"
          theme= "secondary" 
          onPress={() => {
            router.back(); 
          }}
        />
      ) : null}
      <Button 
        title="Check Can Go Back"
        theme="secondary"
        onPress={handleOpenAlert}
      />
    </View>
  );
}
