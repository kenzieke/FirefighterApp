import React from "react";
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import BottomTabNavigator from "../components/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Link is used when you want the user to be directed to a link
// This would work for the resource library
// Router is used when you want to redirect a user programmatically
// When you're redirecting to different pages/screens use router

// For some reason the index.tsx file is the main one that expo routes to when pulling up the app instead
// of App.tsx; this might have to do with the 'main:' component in the package.json file
// For now I'm just putting everything that would go in the App.tsx file into the index.tsx file

const HomePage = () => {
    return (
        // <View>
        //     <Text>Home Page</Text>
        //     <Link href="/screens/SignUpScreen">Go to sign up screen</Link>
        //     <Link href="/users/1">Go to user 1</Link>
        //     <Pressable onPress={() => router.push("/users/2")}>
        //         <Text>Go to user 2</Text>
        //     </Pressable>
        //     <Pressable onPress={() => router.push("/screens/LoginScreen")}>
        //         <Text>Go to login screen</Text>
        //     </Pressable>
        //     <Link href="/screens/LoginScreen">Go to login screen link</Link>
        //     <Pressable onPress={() => router.push("/screens/SleepAssessment")}>
        //         <Text>Go to sleep assesment screen</Text>
        //     </Pressable>
        //     <Pressable onPress={() => router.push("/screens/SleepTracker")}>
        //         <Text>Go to Sleep Tracker Screen</Text>
        //     </Pressable>
        //     <Pressable onPress={() => router.push("/screens/HealthTracker")}>
        //         <Text>Go to Health Tracker Screen</Text>
        //     </Pressable>
        //     <Pressable onPress={() => router.push("/screens/ResourceLibrary")}>
        //         <Text>Go to Resource Library Screen</Text>
        //     </Pressable>
        //     <Pressable onPress={() => router.push("/screens/WeeklyGoals")}>
        //         <Text>Go to Weekly Goals</Text>
        //     </Pressable>
        // </View>
    //   <NavigationContainer>
    //     <BottomTabNavigator/>
    //   </NavigationContainer>

      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    );
};

export default HomePage;