import { StyleSheet, View, ViewProps } from 'react-native';

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
}

export function ScreenContainer({ children, style, ...props }: ScreenContainerProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
