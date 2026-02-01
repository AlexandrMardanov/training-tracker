import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

import { COLORS } from '@/constants/colors';
import { FONTS } from '@/constants/fonts';

export function ForgotPasswordLink() {
  return (
    <View style={styles.container}>
      <Link href={'/(auth)/forgot-password'} asChild>
        <Pressable>
          <Text style={styles.link}>Забули пароль?</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  link: {
    color: COLORS.text.secondary,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
});
