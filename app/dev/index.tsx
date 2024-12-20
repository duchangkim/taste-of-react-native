import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function DevIndex() {
  return (
    <View>
      <Text>Dev index page</Text>
      <Link href="/dev/foundations">Foundation</Link>
      <Link href="/dev/components">Components</Link>
    </View>
  );
}
