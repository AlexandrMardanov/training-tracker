import { HeaderIconButton } from '@/components/shared/HeaderIconButton';

import { useLogout } from '../hooks/useLogout';

export function LogoutButton() {
  const { handleLogout } = useLogout();

  return <HeaderIconButton iconName='log-out-outline' onPress={handleLogout} />;
}
