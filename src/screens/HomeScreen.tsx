import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data/data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import NotosansText from "../components/styled/Notosans";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <NotosansText style={styles.title}>New Workouts</NotosansText>
      <FlatList
        data={data as [Workout]}
        renderItem={WorkoutItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
