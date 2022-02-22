import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { Workout } from "../types/data";
import { formatTime } from "../utils/time";

interface WorkoutItemProps {
  item: Workout;
  children?: React.ReactNode;
  // How to pass styles to a component with childrenStyles
  childrenStyles?: StyleProp<ViewStyle>;
}

export default function WorkoutItem({
  item,
  children,
  childrenStyles = {},
}: WorkoutItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {formatTime(item.duration)}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
      {children && <View>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
