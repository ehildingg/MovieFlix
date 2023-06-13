// Skapa tre nya screens, knyt dom till knapparna, och lägg upp i App.js

import MainScreen from './screens/MainScreen';
import MovieCategoriesScreen from './screens/MovieCategoriesScreen';
import SeriesCategoriesScreen from './screens/SeriesCategoriesScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DocumentaryCategoriesScreen from './screens/DocumentaryCategoriesScreen';
import SportsCategoriesScreen from './screens/SportsCategoriesScreen';
import MovieOverviewScreen from './screens/MovieOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/ui/IconButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfileScreen from './screens/UserProfileScreen';
import Colors from './utilities/constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: Colors.primaryBackground600 },
        tabBarActiveTintColor: Colors.primaryText,
        tabBarInactiveTintColor: Colors.secondaryText,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Startsida',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          title: 'Person',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#ffffff',
            contentStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ headerShown: false, title: 'Start' }}
          />

          <Stack.Screen name="Filmer" component={MovieCategoriesScreen} />
          <Stack.Screen name="Series" component={SeriesCategoriesScreen} />
          <Stack.Screen name="Documentaries" component={DocumentaryCategoriesScreen} />
          <Stack.Screen name="Sports" component={SportsCategoriesScreen} />
          <Stack.Screen name="MovieOverview" component={MovieOverviewScreen} />
          <Stack.Screen name="Detaljer" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
