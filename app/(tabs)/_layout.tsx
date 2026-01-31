import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name='(dashboard)'>
        <Label>Дашборд</Label>
        <Icon sf='square.grid.2x2.fill' />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
