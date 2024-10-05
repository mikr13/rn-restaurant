import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { ListingDetailsScreen } from './src/screens/ListingDetailsScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  ListingDetails: ListingDetailsScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'RN Restaurant',
  }
});

const AppContainer = createAppContainer(navigator);

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
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
  );
}
