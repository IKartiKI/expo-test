import { AppText } from "@/components/AppText";
import { Redirect, Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  //return <Slot />;

//   return (
//     <View className="justify-center flex-1 items-center p-4 bg-red-200">
//         <AppText>Nothing to see here</AppText>
//     </View>
//   );
    return <Redirect href="/second" />;
}