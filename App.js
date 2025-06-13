import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen1 from './screens/QuizScreen1';
import QuizScreen2 from './screens/QuizScreen2';
import ScoreScreen from './screens/ScoreScreen';
import { QuizProvider } from './Context/QuizContext'; // Correct import path for QuizContext

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <QuizProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Quiz 1" component={QuizScreen1} />
          <Tab.Screen name="Quiz 2" component={QuizScreen2} />
          <Tab.Screen name="Score" component={ScoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </QuizProvider>
  );
}
