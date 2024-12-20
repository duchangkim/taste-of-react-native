import { ScrollView, Text, View } from 'react-native';

import { Icon } from '@/src/shared/ui';

export default function IconsIndex() {
  return (
    <ScrollView>
      <View className="p-4">
        <Text className="mb-4 text-headline-lg">Icons</Text>
        <View className="flex-row gap-2">
          <Icon name="check" />
          <Icon name="flashLight" />
          <Icon name="schedule" />
          <Icon name="vacation" />
          <Icon name="enter" />
          <Icon name="out" />
        </View>
        <View className="flex-row flex-wrap gap-2">
          <Icon name="empty" />

          <Icon name="arrowBack" />
          <Icon name="arrowNext" />
          <Icon name="arrowRight" />
          <Icon name="backspace" />
          <Icon name="bell" />
          <Icon name="bellDot" />
          <Icon name="close" />
          <Icon name="drawer" />
          <Icon name="eye" />
          <Icon name="eyeOff" />
          <Icon name="people" />
          <Icon name="place" />
          <Icon name="search" />
          <Icon name="setting" />
          <Icon name="arrowDownMedium" />
          <Icon name="arrowNextMedium" />
          <Icon name="cancelWithe" />
          <Icon name="cancel" />
        </View>
      </View>
    </ScrollView>
  );
}
