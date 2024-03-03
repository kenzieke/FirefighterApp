// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SleepTrackerScreen from '../app/screens/SleepTracker';
import HealthTrackerScreen from '../app/screens/HealthTracker';
import WeeklyGoals from '../app/screens/WeeklyGoals';
import ResourceLibraryScreen from '../app/screens/ResourceLibrary';
import WeeklyLessonsScreen from '../app/screens/WeeklyLessonsScreen';
import Ionicons from '@expo/vector-icons/build/Ionicons';

// All of these imports are incorrect, why??
// import activeWeeklyGoalsIcon from '../../assets/navigationIcons/active_goals.png';
// import inactiveWeeklyGoalsIcon from '../../assets/navigationIcons/inactive_goals.png';
// import activeLessonIcon from '../../assets/navigationIcons/active_lesson.png';
// import inactiveLessonIcon from '../../assets/navigationIcons/inactive_lesson.png';

// See if I can change the names of the headers?

type screenType={
  SleepTrackerScreen:undefined,
  HealthTrackerScreen:undefined,
  WeeklyGoals:undefined,
  ResourceLibraryScreen:undefined,
  WeeklyLessonsScreen:undefined,
}

const Tab = createBottomTabNavigator<screenType>();

const BottomTabNavigator: React.FC = () => {
  return (
    // <Tab.Navigator initialRouteName="WeeklyGoals" screenOptions={{
    //   tabBarActiveTintColor:'#52796F',
    //   tabBarShowLabel:false, // this makes the label names dissappear
    // }}>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            height: 60,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 28,
          },
          tabBarShowLabel:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SleepTrackerScreen') {
              iconName = focused
                ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'HealthTrackerScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'WeeklyGoals') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'WeeklyLessonsScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            } else if (route.name === 'ResourceLibraryScreen') {
              iconName = focused ? 'ios-ellipse' : 'ios-ellipse';
            }

            // You can return any component that you like here
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#52796F',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen
        name="SleepTrackerScreen"
        component={SleepTrackerScreen}
        options={{ title: 'Sleep Tracker' }}
      />
      <Tab.Screen
        name="HealthTrackerScreen"
        component={HealthTrackerScreen}
        options={{ title: 'Health Tracker' }}
      />
      <Tab.Screen
        name="WeeklyLessonsScreen"
        component={WeeklyLessonsScreen}
        options={{ title: 'Weekly Lessons' }}
      />
      <Tab.Screen
        name="WeeklyGoals"
        component={WeeklyGoals}
        options={{ title: 'Weekly Goals' }}
      />
      <Tab.Screen
        name="ResourceLibraryScreen"
        component={ResourceLibraryScreen}
        options={{ title: 'Resource Library' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
