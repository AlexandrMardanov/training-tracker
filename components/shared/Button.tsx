import { ActivityIndicator, Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { COLORS } from '@/constants/colors';

type ButtonProps = PressableProps & {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'danger' | 'secondary';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function Button(props: ButtonProps) {
  const { title, loading = false, variant = 'primary', onPress, disabled, style, ...restProps } = props;
  const isDisabled = disabled || loading;

  return (
    <Pressable
      style={[
        styles.button,
        variant === 'primary' && styles.buttonPrimary,
        variant === 'danger' && styles.buttonDanger,
        variant === 'secondary' && styles.buttonSecondary,
        isDisabled && styles.buttonDisabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      {...restProps}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'secondary' ? COLORS.primary : '#fff'} />
      ) : (
        <Text style={[styles.buttonText, variant === 'secondary' && styles.buttonTextSecondary]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonDanger: {
    backgroundColor: '#FF3B30',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: COLORS.primary,
  },
});
