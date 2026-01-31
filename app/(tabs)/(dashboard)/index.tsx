import { DashboardScreen } from '@/components/dashboard/DashboardScreen';
import { ProfileButton } from '@/components/dashboard/components/ProfileButton';
import { useScreenOptions } from '@/hooks/useScreenOptions';

export default function Dashboard() {
  useScreenOptions({
    title: 'Дашборд',
    headerRight: () => <ProfileButton />,
  });

  return <DashboardScreen />;
}
