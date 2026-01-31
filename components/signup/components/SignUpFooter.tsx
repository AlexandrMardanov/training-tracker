import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

import { COLORS, FONTS } from '@/constants/colors';

export function SignUpFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Вже маєте обліковий запис? </Text>
      <Link href='/(auth)/login' asChild>
        <Pressable>
          <Text style={styles.link}>Увійти</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: COLORS.text + 'CC',
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  link: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
});
