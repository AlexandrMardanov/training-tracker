import { DashboardScreen } from '@/components/dashboard/DashboardScreen';
import { ProfileButton } from '@/components/dashboard/components/ProfileButton';
import { useAuth } from '@/contexts/AuthContext';
import { useScreenOptions } from '@/hooks/useScreenOptions';

export default function Dashboard() {
  const { user } = useAuth();

  useScreenOptions({
    title: `ТурнікМен ${user?.user_metadata.name}` || 'Дашборд',
    headerRight: () => <ProfileButton />,
  });

  return <DashboardScreen />;
}
