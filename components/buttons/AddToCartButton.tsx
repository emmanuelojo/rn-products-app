import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Animated as RNAnimated, useAnimatedValue } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolateColor } from "react-native-reanimated";
import TripleChevron from "../icons/TripleChevron";
import { Colors } from "@/constants/Colors";

type Props = {
  title?: string;
  width?: number;
  height?: number;
  bgColour?: string;
  textColour?: string;
  textAnimationColour?: string;
};

const BUTTON_WIDTH = 250;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

export default function AddToCartButton({ title, width, height, bgColour, textColour, textAnimationColour }: Props) {
  const [dragCompleted, setDragCompleted] = useState(false);
  const colorAnim = useRef(new RNAnimated.Value(0)).current;
  // const fadeAnim = useAnimatedValue(0);
  // Animated value for X translation
  const X = useSharedValue(0);

  useEffect(() => {
    // Looping animation for shimmering effect
    RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(colorAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        RNAnimated.timing(colorAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnim]);

  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   RNAnimated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   RNAnimated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  // };

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

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ff7f50", "#00ffff"], // Color range for shimmering effect (orange to cyan)
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
          [textColour ?? "#000000", textAnimationColour ?? "#06d6a0"]
        ),
      };
    }),
    shimmeringIcon: useAnimatedStyle(() => {
      return {
        color: interpolateColor(X.value, [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING], ["red", "green"]),
      };
    }),
  };
  // ["#ff7f50", "#00ffff"]

  return (
    <GestureHandlerRootView style={{}}>
      <View style={[styles.swiperContainer, { backgroundColor: bgColour ?? "rgba(0,0,0,0.1)" }]}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
            {dragCompleted ? (
              <View>
                <MaterialIcons name="check" color="white" size={24} />
              </View>
            ) : (
              <RNAnimated.View>
                <MaterialIcons name="shopping-bag" color={Colors.greenPrimary} size={20} />
              </RNAnimated.View>
            )}
          </Animated.View>
        </GestureDetector>

        {/* <TripleChevron /> */}

        <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
          {dragCompleted ? "Success" : title || "Swipe Button"}
        </Animated.Text>

        {/* <View style={{ flexDirection: "row", gap: 10 }}>
          <Pressable onPress={fadeIn}>
            <Text>Fade in</Text>
          </Pressable>

          <Pressable onPress={fadeOut}>
            <Text>Fade Out</Text>
          </Pressable>
        </View> */}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    // backgroundColor: "rgba(0,0,0,0.1)", // "#2C211D20", // "green", //  '#fff',style={{ borderWidth: 2, borderColor: "green" }}
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
  iconsShimmer: {
    color: "#06d6a0",
  },
  swipeText: {
    alignSelf: "center",
    // zIndex: 2,
    // color: "#1b9aaa",
  },
});
