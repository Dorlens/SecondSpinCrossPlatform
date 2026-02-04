import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  onFinish: () => void; // callback to notify App.tsx when splash is done
}

export default function SplashScreen({ onFinish }: Props) {
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start(); 
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <MaterialIcons name="cached" size={64} color="#333" />
        </Animated.View>
        <Text style={styles.brandText}>SECONDSPIN</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {  
    flex: 1, 
    justifyContent: "center",
     alignItems: "center", 
     backgroundColor: "#fff" },

  logoWrapper: 
  { 
    justifyContent: "center", 
    alignItems: "center" 
  },

  brandText: 
  { 
    marginTop: 16, 
    fontSize: 28, 
    fontWeight: "bold", 
    color: "#333" },
});
