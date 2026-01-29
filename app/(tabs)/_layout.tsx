import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='dashboard'
        options={{
          title: 'Дашборд',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Профіль',
        }}
      />
    </Tabs>
  );
}
