import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Animated, { FadeInRight, FadeInDown } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

// Define custom Colors object with the necessary color codes
const Colors = {
  tint: '#4CAF50', // Tint color for button background (green)
  white: '#FFFFFF', // White color for text
};

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground 
        source={require('@/assets/images/getting-started.jpg')} 
        style={{ flex: 1 }} 
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          {/* Animated title using Animated.Text */}
          <Animated.Text 
            style={styles.title} 
            entering={FadeInRight.delay(300).duration(1500)}
          >
            Stay Updated!
          </Animated.Text>
          
          {/* Animated description text */}
          <Animated.Text 
            style={styles.description} 
            entering={FadeInRight.delay(700).duration(500)}
          >
            Get breaking news and personalized updates directly to your feed.
          </Animated.Text>

          {/* Animated button container */}
          <Animated.View entering={FadeInDown.delay(1200).duration(500)}>
            <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>        
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
  },
  title: {
    color: Colors.white, // Use white from Colors object
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.5,
    lineHeight: 36,
    textAlign: 'center',
  },
  description: {
    color: Colors.white, // Use white from Colors object
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.2,
    lineHeight: 22,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: Colors.tint, // Use tint color for button background
    paddingVertical: 15,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
  },
  btnText: {
    color: Colors.white, // Use white color for button text
    fontSize: 16,
    fontWeight: '700', // Bold text for button
  },
});
