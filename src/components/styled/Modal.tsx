import { View, Text, Modal as ReactModal, StyleSheet } from "react-native";
import { useState } from "react";

import PressableText from "./PressableText";

export default function Modal() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <ReactModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.modalView}>
          <Text>Hello</Text>
          <PressableText
            text="Close"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </ReactModal>

      <PressableText
        text="Check Sequence"
        onPress={() => setIsModalVisible(true)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
