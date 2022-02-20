import { View, Text, StyleSheet, Modal } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import PressableText from "../components/styled/PressableText";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

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
      <PressableText
        text="Check Sequence"
        onPress={() => alert("Hello There")}
      />
      <Modal visible={false} transparent={true} animationType="none">
        <Text>Hello</Text>
      </Modal>
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
