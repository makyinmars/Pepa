import { View, Text, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { getWorkout } from "../storage/workout";
import { Workout } from "../types/data";

type DetailsParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailsParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  useEffect(() => {
    const getData = async () => {
      const workout = await getWorkout(route.params.slug);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slug - {route.params.slug} </Text>
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
