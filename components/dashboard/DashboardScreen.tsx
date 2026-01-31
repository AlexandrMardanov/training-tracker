import { StyleSheet, Text } from 'react-native';

import { COLORS, FONTS } from '@/constants/colors';
import { useAuth } from '@/contexts/AuthContext';

import { ScreenContainer } from '../shared/ScreenContainer';

export function DashboardScreen() {
  const { user } = useAuth();

  return (
    <ScreenContainer>
      <Text style={styles.text}>
        Привіт, <Text style={styles.text}>{user?.user_metadata.name}</Text>
      </Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: COLORS.text,
  },
});
