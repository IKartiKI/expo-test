import { AppText } from "@/components/AppText";
import { Redirect, Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
 return <Slot />;

//   return (
//     <View className="justify-center flex-1 items-center p-4 bg-blue-200">
//         <AppText>Stopped by intermediate layout file</AppText>
//     </View>
//   );
    //return <Redirect href="/second" />;
}