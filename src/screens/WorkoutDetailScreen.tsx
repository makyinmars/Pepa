import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import Modal from "../components/styled/Modal";
import PressableText from "../components/styled/PressableText";

type DetailsParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailsParams;

export default function WorkoutDetailScreen({ route }: Navigation) {
  const workout = useWorkoutBySlug(route.params.slug);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <Modal
        activator={({ handleOpen }) => (
          <PressableText text="Check Sequence" onPress={handleOpen} />
        )}
      />
      <Modal />
      <Modal
        activator={({ handleOpen }) => (
          <Button onPress={handleOpen} title="Custom button" />
        )}
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
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
