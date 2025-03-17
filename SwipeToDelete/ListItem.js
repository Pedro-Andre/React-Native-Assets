import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRef } from "react";

export default function ListItem({ item, onDelete }) {
  const translateX = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dx < 0) {
          translateX.setValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Swipe to Left (-90 shows de 'Delete Button' with Delete Function)
        if (gestureState.dx < -90) {
          Animated.spring(translateX, {
            toValue: -100,
            useNativeDriver: true,
          }).start();
        }
        // Swipe to Right (+90 shows de 'Archive  Button' with Archive Function)
        if (gestureState.dx > 90) {
          Animated.spring(translateX, {
            toValue: 100,
            useNativeDriver: true,
          }).start();
        }
        // If just toutched, reset the position to 0
        if (gestureState.dx === 0) {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.itemContainer}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX: translateX }],
        }}
      >
        <TouchableOpacity
          style={styles.btnDelete}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.btnText}>Delete</Text>
          <Feather name="trash" size={20} color={"#222"} />
        </TouchableOpacity>

        <View style={styles.item} {...panResponder.panHandlers}>
          <Text style={styles.text}>{item.text}</Text>;
        </View>

        <TouchableOpacity
          style={styles.btnArchive}
          onPress={() => onDelete(item.id)}
        >
          <Text style={styles.btnText}>Archive</Text>
          <Feather name="file" size={20} color={"#222"} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#00000055",
    borderRadius: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginBlock: 4,
  },
  text: {
    color: "#ddd",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnDelete: {
    backgroundColor: "#ff2b6e",
    borderRadius: 16,
    width: 80,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -100,
    marginInlineEnd: 6,
  },
  btnArchive: {
    backgroundColor: "#8affc8",
    borderRadius: 16,
    width: 80,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: -100,
    marginInlineStart: 6,
  },
});
