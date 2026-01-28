import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { InfoItem } from '@/components/profile/InfoItem';
import { Button } from '@/components/shared/Button';
import { COLORS } from '@/constants/colors';
import { useAuth } from '@/contexts/AuthContext';

export function ProfileCard() {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);
    try {
      await signOut();
    } catch {
      Alert.alert('Помилка', 'Виникла помилка при виході');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.title}>Profile</Text>
        <InfoItem label='Email' value={user?.email || 'Not available'} />
        <InfoItem label='User ID' value={user?.id || 'Not available'} small />
        <Button title='Sign Out' onPress={handleSignOut} loading={loading} variant='danger' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 24,
    textAlign: 'center',
  },
});
