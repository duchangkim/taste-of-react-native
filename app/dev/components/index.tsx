import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '@/src/shared/ui/button';
import { Radio } from '@/src/shared/ui/radio';

export default function ComponentsIndex() {
  const [value, setValue] = useState('apple');

  return (
    <ScrollView>
      <View className="p-4">
        <Text className="text-headline-lg">Components Index page</Text>
        <View className="mb-4 gap-2">
          <Text className="text-headline-md">Radios</Text>
          <View className="flex-col gap-2">
            <Radio.Group className="flex-row gap-2" value={value} onChange={setValue}>
              <Radio.Item value="apple"></Radio.Item>
              <Radio.Item value="banana"></Radio.Item>

              <Radio.Item disabled size="lg" value="apple"></Radio.Item>
              <Radio.Item disabled size="lg" value="banana"></Radio.Item>
            </Radio.Group>

            <Radio.Group className="flex-row gap-2" value={value} onChange={setValue}>
              <Radio.Item color="brand-primary" value="apple"></Radio.Item>
              <Radio.Item color="brand-primary" value="banana"></Radio.Item>

              <Radio.Item disabled color="brand-primary" size="lg" value="apple"></Radio.Item>
              <Radio.Item disabled color="brand-primary" size="lg" value="banana"></Radio.Item>
            </Radio.Group>

            <Radio.Group className="flex-row gap-2" value={value} onChange={setValue}>
              <Radio.Item color="error" value="apple"></Radio.Item>
              <Radio.Item color="error" value="banana"></Radio.Item>

              <Radio.Item disabled color="error" size="lg" value="apple"></Radio.Item>
              <Radio.Item disabled color="error" size="lg" value="banana"></Radio.Item>
            </Radio.Group>
          </View>

          <View className="mt-4">
            <Radio.Group className="gap-[20]" value={value} onChange={setValue}>
              <Radio.Wrap label="연차" value="apple"></Radio.Wrap>
              <Radio.Wrap label="오후반차" value="banana"></Radio.Wrap>
            </Radio.Group>
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-headline-md">Buttons</Text>
          <View className="flex-row gap-2">
            <Button variant="ghost">
              <Button.Icon name="flashLight" />
              <Button.Text>후레쉬</Button.Text>
            </Button>

            <Button disabled variant="ghost">
              <Button.Icon name="flashLight" />
              <Button.Text>후레쉬</Button.Text>
            </Button>
          </View>

          <View className="flex-row gap-2">
            <Button color="brand-primary">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="brand-primary">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button disabled color="brand-primary">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>
          <View className="flex-row gap-2">
            <Button color="brand-primary" size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="brand-primary" size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="brand-primary" size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>

          <View className="flex-row gap-2">
            <Button size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>
          <View className="flex-row gap-2">
            <Button size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>

          <View className="flex-row gap-2">
            <Button color="error">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="error">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="error">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>
          <View className="flex-row gap-2">
            <Button color="error" size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="error" size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
            </Button>
            <Button color="error" size="large">
              <Button.Icon name="backspace" />
              <Button.Text>확인</Button.Text>
              <Button.Icon name="arrowRight" />
            </Button>
          </View>

          <View className="gap-2">
            <Button fullWidth color="brand-primary">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button fullWidth>
              <Button.Text>확인</Button.Text>
            </Button>
            <Button fullWidth color="error">
              <Button.Text>확인</Button.Text>
            </Button>

            <Button fullWidth color="brand-primary" size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button fullWidth size="large">
              <Button.Text>확인</Button.Text>
            </Button>
            <Button fullWidth color="error" size="large">
              <Button.Text>확인</Button.Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
