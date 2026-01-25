import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style='dark' />
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  );
}
