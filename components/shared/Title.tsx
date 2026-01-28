import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/colors';

type TitleProps = {
  title: string;
  subtitle?: string;
};

export function Title(props: TitleProps) {
  const { title, subtitle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.text + 'CC',
    textAlign: 'center',
  },
});
