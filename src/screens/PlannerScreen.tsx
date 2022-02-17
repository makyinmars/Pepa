import { View, Text, Button } from "react-native";
import React from "react";

export default function PlannerScreen({ navigation }: any) {
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.push("Home")}
      ></Button>
    </View>
  );
}
