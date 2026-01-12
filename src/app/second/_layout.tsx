import { Stack, usePathname } from "expo-router";

export default function Layout() {
    const pathname = usePathname();
    console.log("Current path:", pathname);
    return (
    <Stack
    screenOptions={{
            animation: pathname.startsWith("/second") ? "default" : "none"
        }}
    >

        <Stack.Screen name="index" options={{ title: "Second" }} />
        <Stack.Screen name="nested" options={{ title: "Second Nested" }} />
        <Stack.Screen name="also-nested" options={{ title: "Second Also Nested" }} />
    </Stack>
    );
}