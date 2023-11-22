/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeStackNavigator from './apstack/HomeStackNavigator/HomeStackNavigator';
import { useLocaleStore } from './store/useLocalStore';
import theme from './themes/ThemeType';
import { translations } from './translations';
import { ThemeProvider } from 'styled-components/native';

const queryClient = new QueryClient();

function App(): JSX.Element {
  const language = useLocaleStore(state => state.language);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <IntlProvider messages={translations[language]} locale={language}>
          <ThemeProvider theme={{ ...theme }}>
            <StatusBar />
            <NavigationContainer>
              <HomeStackNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </IntlProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
export default App;
