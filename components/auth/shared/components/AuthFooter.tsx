import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Href, Link } from 'expo-router';

import { COLORS } from '@/constants/colors';
import { FONTS } from '@/constants/fonts';

type AuthFooterProps = {
  text: string;
  linkText: string;
  href: Href;
};

export function AuthFooter(props: AuthFooterProps) {
  const { text, linkText, href } = props;

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text} </Text>
      <Link href={href} asChild>
        <Pressable>
          <Text style={styles.link}>{linkText}</Text>
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
    color: COLORS.text.secondary,
    fontSize: 14,
    fontFamily: FONTS.regular,
  },
  link: {
    color: COLORS.text.secondary,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
  },
});
