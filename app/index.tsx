import { View } from 'react-native';

import { Text } from '@/components/atoms/Text';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text format="H2" letterCase="CAPITALIZE" fontStyle="ITALIC">
        Hello World!
      </Text>
    </View>
  );
}
