import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';
import { RootStackParamList } from "./src/types/app";

const Stack = createStackNavigator<RootStackParamList>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    }
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
