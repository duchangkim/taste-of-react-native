import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function DevIndex() {
  return (
    <View className="p-4">
      <Text className="text-headline-lg">Dev index page</Text>
      <Link className="text-title-md" href="/dev/foundations">
        Foundations
      </Link>
      <Link className="text-title-md" href="/dev/icons">
        Icons
      </Link>
      <Link className="text-title-md" href="/dev/components">
        Components
      </Link>
    </View>
  );
}
