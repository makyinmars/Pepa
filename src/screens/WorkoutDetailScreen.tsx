import { useState } from "react";
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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const workout = useWorkoutBySlug(route.params.slug);

  if (!workout) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>
      <PressableText
        text="Check Sequence"
        onPress={() => setIsModalVisible(true)}
      />
      <Modal visible={isModalVisible} transparent={false} animationType="fade">
        <View style={styles.modalView}>
          <Text>Hello</Text>
          <PressableText
            text="Close"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
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
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
