import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { getWorkouts } from "../storage/workout";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const getData = async () => {
      const workouts = await getWorkouts();
      setWorkouts(workouts);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("WorkoutDetail", { slug: item.slug })
              }
            >
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
