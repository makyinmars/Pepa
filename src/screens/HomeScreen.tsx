import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data/data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Workouts</Text>
      <FlatList
        data={data as [Workout]}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => alert(`I am pressed - ${item.name}`)}>
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
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
    fontFamily: "notosans-bold",
  },
});
