import { View, Text, StyleSheet } from "react-native";

import { Workout } from "../types/data";
import { secToMin } from "../utils/time";

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>
        Duration: {secToMin(item.duration)} min
      </Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "notosans-bold",
  },
  duration: {
    fontSize: 15,
    fontFamily: "notosans",
  },
  difficulty: { fontSize: 15, fontFamily: "notosans" },
});
