import { ScrollView, Text, View } from 'react-native';

import { Button } from '@/src/shared/ui/button';

export default function ComponentsIndex() {
  return (
    <ScrollView>
      <View className="p-4">
        <Text className="text-headline-lg">Components Index page</Text>
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
