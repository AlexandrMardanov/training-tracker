import { useRouter } from 'expo-router';

import { HeaderIconButton } from '@/components/shared/HeaderIconButton';

export function ProfileButton() {
  const router = useRouter();

  return <HeaderIconButton iconName='person' onPress={() => router.push('/(tabs)/(dashboard)/profile')} />;
}
