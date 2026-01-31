import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTS } from '@/constants/colors';

type InfoItemProps = {
  label: string;
  value: string;
};

export function InfoItem(props: InfoItemProps) {
  const { label, value } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.text,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
});
