import { useAppInitialization } from '@/hooks/useAppInitialization';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

export function AppInitialization() {
  useAppInitialization();
  useAuthRedirect();

  return null;
}
