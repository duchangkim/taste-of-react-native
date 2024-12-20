import classNames from 'classnames';
import { ScrollView, Text, View, ViewProps } from 'react-native';

function ColorSampleBox({ className, children }: ViewProps) {
  return (
    <View className="flex-row gap-2">
      <View className={classNames('h-8 w-8 rounded-sm', className)}></View>
      <Text>{children}</Text>
    </View>
  );
}

function ColorSampleBoxCol({ className, children }: ViewProps) {
  return (
    <View className="gap-2">
      <View className={classNames('h-8 w-8 rounded-sm', className)}></View>
      <Text>{children}</Text>
    </View>
  );
}

function ElevationBox({ className, children }: ViewProps) {
  return (
    <View className="gap-2">
      <View className={classNames('h-16 w-16 rounded-sm bg-white', className)}></View>
      <Text>{children}</Text>
    </View>
  );
}

function RoundedBox({ className, children }: ViewProps) {
  return (
    <View className="gap-2">
      <View className={classNames('h-16 w-16 bg-grey-300', className)}></View>
      <Text className="text-label-sm">{children}</Text>
    </View>
  );
}

export default function FoundationsIndex() {
  return (
    <ScrollView className="font-sans text-black">
      <View className="gap-4 p-4">
        <Text className="text-headline-lg">Foundations</Text>
        <Text className="text-headline-md">Colors</Text>
        <ColorSampleBox className="bg-brand-primary">Primary</ColorSampleBox>
        <ColorSampleBox className="bg-brand-secondary">Secondary</ColorSampleBox>
        <ColorSampleBox className="bg-error">Error</ColorSampleBox>
        <ColorSampleBox className="bg-info">Info</ColorSampleBox>
        <ColorSampleBox className="bg-white">White</ColorSampleBox>
        <ColorSampleBox className="bg-black">Black</ColorSampleBox>
        <View className="flex-row gap-2">
          <ColorSampleBoxCol className="bg-sky-50">50</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-100">100</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-200">200</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-300">300</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-400">400</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-500">500</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-600">600</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-700">700</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-800">800</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-sky-900">900</ColorSampleBoxCol>
        </View>
        <View className="flex-row gap-2">
          <ColorSampleBoxCol className="bg-grey-50">50</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-100">100</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-200">200</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-300">300</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-400">400</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-500">500</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-600">600</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-700">700</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-800">800</ColorSampleBoxCol>
          <ColorSampleBoxCol className="bg-grey-900">900</ColorSampleBoxCol>
        </View>
      </View>

      <View className="mt-4 gap-4 p-4">
        <Text className="text-headline-md">Typography</Text>
        <View className="gap-2 rounded-md border border-grey-300 p-2">
          <Text className="text-display-lg">Display Large - Pretendard 56/64 -1.5%</Text>
          <Text className="font-bold text-display-lg">Display Large - Pretendard 56/64 -1.5%</Text>
          <Text className="text-display-md">Display Medium - Pretendard 42/52 -1.5%</Text>
          <Text className="text-display-md font-bold">
            Display Medium Prominent - Pretendard 42/52 -1.5%
          </Text>
          <Text className="text-display-sm">Display Small - Pretendard 36/44 -1.5%</Text>
          <Text className="font-bold text-display-sm">
            Display Small Prominent - Pretendard 36/44 -1.5%
          </Text>
        </View>
        <View className="gap-2 rounded-md border border-grey-300 p-2">
          <Text className="text-headline-lg">Headline Large - Pretendard 32/40 -1%</Text>
          <Text className="font-bold text-headline-lg">
            Headline Large Prominent - Pretendard 32/40 -1%
          </Text>
          <Text className="text-headline-md">Headline Medium - Pretendard 28/36 -1%</Text>
          <Text className="text-headline-md font-bold">
            Headline Medium Prominent - Pretendard 28/36 -1%
          </Text>
          <Text className="text-headline-sm">Headline Small - Pretendard 24/32 -1%</Text>
          <Text className="font-bold text-headline-sm">
            Headline Small Prominent - Pretendard 24/32 -1%
          </Text>
        </View>
        <View className="gap-2 rounded-md border border-grey-300 p-2">
          <Text className="text-title-lg">Title Large - Pretendard Regular 22/28 -1%</Text>
          <Text className="font-bold text-title-lg">
            Title Large Prominent - Pretendard Regular 22/28 -1%
          </Text>
          <Text className="text-title-md">Title Medium - Pretendard Medium 16/24 -1%</Text>
          <Text className="text-title-md font-bold">
            Title Medium Prominent - Pretendard Medium 16/24 -1%
          </Text>
          <Text className="text-title-sm">Title Small - Pretendard Medium 14/22 -1%</Text>
          <Text className="font-bold text-title-sm">
            Title Small Prominent - Pretendard Medium 14/22 -1%
          </Text>
        </View>
        <View className="gap-2 rounded-md border border-grey-300 p-2">
          <Text className="text-label-lg">Label Large - Pretendard Medium 16/24 -1%</Text>
          <Text className="font-bold text-label-lg">
            Label Large Prominent - Pretendard Medium 16/24 -1%
          </Text>
          <Text className="text-label-md">Label Medium - Pretendard Medium 14/22 -1%</Text>
          <Text className="text-label-md font-bold">
            Label Medium Prominent - Pretendard Medium 14/22 -1%
          </Text>
          <Text className="text-label-sm">Label Small - Pretendard Medium 12/18 -1%</Text>
          <Text className="font-bold text-label-sm">
            Label Small Prominent - Pretendard Medium 12/18 -1%
          </Text>
        </View>
        <View className="gap-2 rounded-md border border-grey-300 p-2">
          <Text className="text-body-lg">Body Large - Pretendard 19/28 -1%</Text>
          <Text className="font-bold text-body-lg">
            Body Large Prominent - Pretendard 19/28 -1%
          </Text>
          <Text className="text-body-md">Body Medium - Pretendard 17/26 -1%</Text>
          <Text className="text-body-md font-bold">
            Body Medium Prominent - Pretendard 17/26 -1%
          </Text>
          <Text className="text-body-sm">Body Small - Pretendard 15/24 -1%</Text>
          <Text className="font-bold text-body-sm">
            Body Small Prominent - Pretendard 15/24 -1%
          </Text>
        </View>
      </View>

      <View className="mt-4 p-4">
        <Text className="text-headline-m">Elevation</Text>
        <View className="flex-row gap-2">
          <ElevationBox className="shadow-sm">Elevation/1</ElevationBox>
          <ElevationBox className="shadow-md">Elevation/2</ElevationBox>
          <ElevationBox className="shadow-lg">Elevation/3</ElevationBox>
        </View>
      </View>

      <View className="mt-4 p-4">
        <Text className="text-headline-m">Round</Text>
        <View className="flex-row gap-2">
          <RoundedBox className="rounded-xs">x-small</RoundedBox>
          <RoundedBox className="rounded-sm">Small</RoundedBox>
          <RoundedBox className="rounded-md">Medium</RoundedBox>
          <RoundedBox className="rounded-lg">Large</RoundedBox>
          <RoundedBox className="rounded-xl">x-large</RoundedBox>
          <RoundedBox className="rounded-full">Full</RoundedBox>
        </View>
      </View>
    </ScrollView>
  );
}
