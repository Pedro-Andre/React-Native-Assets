import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View, Text, SafeAreaView } from "react-native";
import ListItem from "./ListItem";
// import { FlatList } from "react-native-gesture-handler";

export default function App() {
  const [data, setData] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
  ]);

  // Delete Item Function
  const handleDeleteItem = (id) => {
    const updateData = data.filter((item) => item.id !== id);
    setData(updateData);
  };

  const renderItem = ({ item }) => (
    <ListItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <StatusBar style="inverted" />
      <View style={styles.orb}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 6,
    zIndex: 1,
  },
  list: {
    alignSelf: "stretch",
    width: "100%",
    marginBlockStart: 40,
  },
  orb: {
    width: 160,
    height: 160,
    position: "absolute",
    zIndex: -1,
    backgroundColor: "#ffd0a1",
    filter: "blur(160)",
  },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Text } from "react-native";
// import Animated from "react-native-reanimated";
// import {
//   GestureHandlerRootView,
//   GestureDetector,
//   Gesture,
// } from "react-native-gesture-handler";
// import {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   withTiming,
//   runOnJS,
// } from "react-native-reanimated";

// export default function App() {
//   const animation = useSharedValue(0);
//   const opacity = useSharedValue(1);
//   const height = useSharedValue(50);
//   const gestureHandler = Gesture.Pan()
//     .onStart(() => {
//       // ctx = 0;
//       "worklet";
//       // ctx.startX = animation.value;
//     })
//     .onUpdate((event) => {
//       "worklet";
//       animation.value = event.translationX;
//     })
//     .onEnd(() => {
//       "worklet";
//       if (animation.value < -50) {
//         runOnJS(swipeLeftToDelete)();
//       } else {
//         animation.value = withSpring(0);
//       }
//     });

//   // Swipe Function
//   const swipeLeftToDelete = () => {
//     opacity.value = withTiming(0, { duration: 50 });
//     height.value = withTiming(0, { duration: 50 });
//   };

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: animation.value }],
//     };
//   });

//   const containerStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       height: height.value,
//     };
//   });

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         {/* <Animated.View style={[containerStyle]}> */}
//         <GestureDetector gesture={gestureHandler}>
//           <Animated.View style={styles.notificationContainer}>
//             <Animated.View style={[styles.notificationContent, animatedStyle]}>
//               <Text style={styles.text}> Swipe To Delete</Text>
//             </Animated.View>
//           </Animated.View>
//         </GestureDetector>
//         {/* </Animated.View> */}
//         <StatusBar style="auto" />
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   notificationContainer: {
//     height: 100,
//     backgroundColor: "#888",
//     width: "100%",
//     borderRadius: 16,
//   },
//   notificationContent: {
//     height: "100%",
//     backgroundColor: "#aff",
//     width: "100%",
//     borderRadius: 16,
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View, Text } from "react-native";
// import Animated from "react-native-reanimated";
// import {
//   GestureHandlerRootView,
//   GestureDetector,
//   Gesture,
// } from "react-native-gesture-handler";
// import {
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
//   withTiming,
//   runOnJS,
// } from "react-native-reanimated";

// export default function App() {
//   const animation = useSharedValue(0);
//   const opacity = useSharedValue(1);
//   const height = useSharedValue(50);

//   const gestureHandler = Gesture.Pan()
//     .onStart((event, ctx) => {
//       // Optionally store the initial value if needed
//       "worklet";
//       ctx.startX = animation.value;
//     })
//     .onUpdate((event, ctx) => {
//       "worklet";
//       // Update the animation value based on translation
//       animation.value = ctx.startX + event.translationX;
//     })
//     .onEnd(() => {
//       "worklet";
//       // Check if the swipe is enough for a "delete"
//       if (animation.value < -50) {
//         runOnJS(swipeLeftToDelete)();
//       } else {
//         animation.value = withSpring(0);
//       }
//     });

//   // Swipe Function
//   const swipeLeftToDelete = () => {
//     opacity.value = withTiming(0, { duration: 300 });
//     height.value = withTiming(0, { duration: 300 });
//   };

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: animation.value }],
//     };
//   });

//   const containerStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       height: height.value,
//     };
//   });

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <GestureDetector gesture={gestureHandler}>
//           <Animated.View style={[styles.notificationContainer, containerStyle]}>
//             <Animated.View style={[styles.notificationContent, animatedStyle]}>
//               <Text style={styles.text}>Swipe To Delete</Text>
//             </Animated.View>
//           </Animated.View>
//         </GestureDetector>
//         <StatusBar style="auto" />
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ddd",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   notificationContainer: {
//     height: 100,
//     backgroundColor: "#888",
//     width: "100%",
//     borderRadius: 16,
//   },
//   notificationContent: {
//     height: "100%",
//     backgroundColor: "#aff",
//     width: "100%",
//     borderRadius: 16,
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
