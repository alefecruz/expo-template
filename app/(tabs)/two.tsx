import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text } from '@/components/atoms/Text';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text format="H1" fontStyle="ITALIC" letterCase="CAPTALIZE" color="DANGER">
        Álefe Cruz da Silva
      </Text>
      <Text format="H2" align="JUSTIFY" color="DANGER">
        Tab Two
      </Text>

      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
