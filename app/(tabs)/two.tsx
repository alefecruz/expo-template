import { StyleSheet, View } from 'react-native';

import { TextInput } from '@/components/atoms/TextInput';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="CPF" mask="999.999.999-99" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
