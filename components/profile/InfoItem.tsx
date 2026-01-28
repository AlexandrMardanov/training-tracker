import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/colors';

type InfoItemProps = {
  label: string;
  value: string;
  small?: boolean;
};

export function InfoItem(props: InfoItemProps) {
  const { label, value, small = false } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, small && styles.valueSmall]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: COLORS.text + '80',
    marginBottom: 4,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: COLORS.text,
  },
  valueSmall: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
});
