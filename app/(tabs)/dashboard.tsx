import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/constants/colors';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Дашборд</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
});
