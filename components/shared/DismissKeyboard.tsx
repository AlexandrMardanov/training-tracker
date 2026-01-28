import { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

type DismissKeyboardProps = {
  children: ReactNode;
};

export function DismissKeyboard(props: DismissKeyboardProps) {
  const { children } = props;

  return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>;
}
