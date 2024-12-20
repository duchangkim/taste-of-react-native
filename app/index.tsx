import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="p-4 color-green-500">안녕 리액트 네이티브 세상???</Text>

      <Link href="/dev">DEV</Link>
    </View>
  );
}
