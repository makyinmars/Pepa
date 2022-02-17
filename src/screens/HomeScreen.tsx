import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Home Screen");
    return () => console.log("Unmounting Home Screen");
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Planner"
        onPress={() => navigation.navigate("Planner")}
      ></Button>
    </View>
  );
}
