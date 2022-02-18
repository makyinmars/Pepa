import { View, Text, StyleSheet, FlatList } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import data from "../data/data.json";
import { Workout } from "../types/data";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const renderItem = ({ item }: { item: Workout }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.difficulty}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data as [Workout]}
        renderItem={renderItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: "center",
  },
});
