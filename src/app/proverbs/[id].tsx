import { AppText } from "@/components/AppText";
import { Button, View } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

 const proverbs = [
            { 
                id: "1", 
                proverb: "The best time to plant a tree was 20 years ago. The second best time is now.", source: "Chinese Proverb" },
            { id: "2", proverb: "Fall seven times and stand up eight.", source: "Japanese Proverb" },
            { id: "3", proverb: "The journey of a thousand miles begins with a single step.", source: "Lao Tzu" },
            { id: "4", proverb: "When the winds of change blow, some people build walls and others build windmills.", source: "Chinese Proverb" },
            { id: "5", proverb: "Do not be afraid of going slowly, be afraid only of standing still.", source: "Chinese Proverb" },
            { id: "6", proverb: "A smooth sea never made a skilled sailor.", source: "English Proverb" },
            { id: "7", proverb: "He who has a why to live can bear almost any how.", source: "Friedrich Nietzsche" },
            { id: "8", proverb: "The harder you fall, the higher you bounce.", source: "Unknown" },
            { id: "9", proverb: "If you want to go fast, go alone. If you want to go far, go together.", source: "African Proverb" },
            { id: "10", proverb: "What you get by achieving your goals is not as important as what you become by achieving your goals.", source: "Zig Ziglar" },
        ];


export default function ProverbScreen() {
    const params = useLocalSearchParams<{ id: string }>();
    const proverb = proverbs.find(p => p.id === params.id);
    if (!proverb) {
        return (
            <View className="justify-center flex-1 p-4">
                <AppText center size="large" bold>
                    Proverb not found
                </AppText>
            </View>
        );
    }
    return (
    <View className="justify-center flex-1 p-4"> 
      <AppText center size="large" bold>
        "{proverb.proverb}"
      </AppText>
      <AppText center>- {proverb.source}</AppText>
    </View>
  );
};