import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';

import { DismissKeyboard } from './DismissKeyboard';

type FormContainerProps = {
  children: React.ReactNode;
};

export function FormContainer(props: FormContainerProps) {
  const { children } = props;

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
});
