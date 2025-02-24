import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolateColor } from "react-native-reanimated";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 56;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

export default function DragToSlideButton() {
  const [dragCompleted, setDragCompleted] = useState(false);

  // Animated value for X translation
  const X = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX >= 0 && e.translationX <= H_SWIPE_RANGE) {
        X.value = e.translationX;
      } else if (e.translationX < 0) {
        X.value = 0;
      } else if (e.translationX > H_SWIPE_RANGE) {
        X.value = H_SWIPE_RANGE;
      }
    })
    .onEnd((e) => {
      // if user stops at less than half the button, set value to  0
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        setDragCompleted(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        setDragCompleted(true);
      }
    });

  const AnimatedStyles = {
    // swipeCont: useAnimatedStyle(() => {
    //   return {};
    // }),
    // colorWave: useAnimatedStyle(() => {
    //   return {
    //     width: H_WAVE_RANGE + X.value,

    //     opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
    //   };
    // }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ["#fff", "#06d6a0"]
        ),
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        color: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ["#000000", "#06d6a0"]
        ),
      };
    }),
  };

  return (
    <View style={styles.swiperContainer}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
          {dragCompleted ? (
            <View style={styles.iconsWrapper}>
              <MaterialIcons name="check" color="white" size={24} />
            </View>
          ) : (
            <View style={styles.iconsWrapper}>
              <MaterialIcons name="keyboard-double-arrow-right" size={24} />
            </View>
          )}
        </Animated.View>
      </GestureDetector>

      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        {dragCompleted ? "Success" : "Swipe Button"}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: "rgba(0,0,0,0.1)", // "#2C211D20", // "green", //  '#fff',
    borderRadius: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  colorWave: {
    position: "absolute",
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  swipeText: {
    alignSelf: "center",
    // zIndex: 2,
    // color: "#1b9aaa",
  },
});
