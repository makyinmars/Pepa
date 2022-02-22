import { View, Text, Modal as ReactModal, StyleSheet } from "react-native";
import { FunctionComponent, useState } from "react";

import PressableText from "./PressableText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
};

export default function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <ReactModal
        visible={isModalVisible}
        transparent={false}
        animationType="fade"
      >
        <View style={styles.modalView}>
          <View style={styles.contentView}>{children}</View>
          <PressableText
            text="Close"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </ReactModal>
      {Activator ? (
        <Activator handleOpen={() => setIsModalVisible(true)} />
      ) : (
        <PressableText text="Open" onPress={() => setIsModalVisible(true)} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentView: {
    marginBottom: 20,
  },
});
