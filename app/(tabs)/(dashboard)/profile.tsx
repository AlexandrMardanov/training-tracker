import { ProfileScreen } from '@/components/profile/ProfileScreen';
import { LogoutButton } from '@/components/profile/components/LogoutButton';
import { useScreenOptions } from '@/hooks/useScreenOptions';

export default function Profile() {
  useScreenOptions({
    title: 'Профіль',
    headerRight: () => <LogoutButton />,
    presentation: 'modal',
  });

  return <ProfileScreen />;
}
