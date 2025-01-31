import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { Badge } from '@/src/shared/ui/badge';
import { Button } from '@/src/shared/ui/button';
import { Checkbox } from '@/src/shared/ui/checkbox';
import { Divider } from '@/src/shared/ui/divider';
import { Input } from '@/src/shared/ui/input';
import { Radio } from '@/src/shared/ui/radio';

export default function ComponentsIndex() {
  const [value, setValue] = useState('apple');
  const [checkValues, setCheckValues] = useState<string[]>(['kimchi']);

  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <View className="p-4">
        <Text className="text-headline-lg">Components Index page</Text>
        <View className="mb-4 gap-2">
          <Text className="text-headline-md">Inputs</Text>
          <TextInput
            className="placeholder-shown:border-red-500 focus:border"
            placeholder="enter text"
          />

          <Input>
            <Input.FieldWrap>
              <Input.Field placeholder="아이디" value={inputValue} onChangeText={setInputValue} />
              <Input.IconWrap>
                {!!inputValue && (
                  <Input.Icon
                    height={16}
                    name="cancel"
                    width={16}
                    onPress={() => setInputValue('')}
                  />
                )}
                <Input.Icon height={24} name="eye" width={24} />
              </Input.IconWrap>
            </Input.FieldWrap>
            <Input.Description>
              존재하지 않는 아이디이거나 비밀번호가 정확하지 않아요.
            </Input.Description>
          </Input>

          <Input error>
            <Input.FieldWrap>
              <Input.Field
                error
                placeholder="비밀번호"
                secureTextEntry={!showPassword}
              ></Input.Field>
              <Input.Icon
                height={24}
                name="eye"
                width={24}
                onPress={() => setShowPassword((prev) => !prev)}
              />
            </Input.FieldWrap>
            <Input.Description>
              존재하지 않는 아이디이거나 비밀번호가 정확하지 않아요.
            </Input.Description>
          </Input>

          <Input disabled>
            <Input.FieldWrap>
              <Input.Field disabled defaultValue="123" placeholder="비밀번호"></Input.Field>
            </Input.FieldWrap>
            <Input.Description>
              존재하지 않는 아이디이거나 비밀번호가 정확하지 않아요.
            </Input.Description>
          </Input>
        </View>

        <View className="mb-4 gap-2">
          <Text className="text-headline-md">Badges</Text>
          <View className="gap-[8]">
            <View className="flex-row gap-[8]">
              <Badge>
                <Badge.Text>근무</Badge.Text>
              </Badge>
              <Badge color="secondary">
                <Badge.Text>대근</Badge.Text>
              </Badge>
              <Badge color="info">
                <Badge.Text>휴가</Badge.Text>
              </Badge>
              <Badge color="warning">
                <Badge.Text>결근</Badge.Text>
              </Badge>
            </View>

            <View className="flex-row gap-[8]">
              <Badge>
                <Badge.Text>근무</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge color="secondary">
                <Badge.Text>대근</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge color="info">
                <Badge.Text>휴가</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge color="warning">
                <Badge.Text>결근</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
            </View>

            <View className="flex-row gap-[8]">
              <Badge accentTarget="text">
                <Badge.Text>근무</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge accentTarget="text" color="secondary">
                <Badge.Text>대근</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge accentTarget="text" color="info">
                <Badge.Text>휴가</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
              <Badge accentTarget="text" color="warning">
                <Badge.Text>결근</Badge.Text>
                <Badge.Icon name="arrowDownMedium" />
              </Badge>
            </View>
          </View>
        </View>

        <View className="mb-4 gap-2 rounded-sm bg-white p-4">
          <Text className="text-headline-md">Dividers</Text>

          <View>
            <Text className="text-body-sm">게시판에 게시한다</Text>
            <Divider className="my-[8]" />
            <Text className="text-body-sm">게시판에 게시한다2</Text>
            <Divider className="my-[8]" />
            <View className="flex-row items-center gap-[4]">
              <Text className="text-body-sm">Blog</Text>
              <Divider className="mx-[4]" direction="vertical" />
              <Text className="text-body-sm">Docs</Text>
              <Divider className="mx-[4]" direction="vertical" />
              <Text className="text-body-sm">Home</Text>
            </View>
          </View>
        </View>

        <View className="mb-4 gap-2">
          <Text className="text-headline-md">Checkboxes</Text>
          <View className="flex-col gap-2">
            <Checkbox.Group
              className="flex-row gap-2"
              value={checkValues}
              onChange={setCheckValues}
            >
              <Checkbox.Item value="kimchi"></Checkbox.Item>
              <Checkbox.Item size="lg" value="rice"></Checkbox.Item>

              <Checkbox.Item color="white" value="kimchi"></Checkbox.Item>
              <Checkbox.Item color="white" size="lg" value="rice"></Checkbox.Item>

              <Checkbox.Item activeColor="secondary" color="white" value="kimchi"></Checkbox.Item>
              <Checkbox.Item
                activeColor="secondary"
                color="white"
                size="lg"
                value="rice"
              ></Checkbox.Item>

              <Checkbox.Item activeColor="info" color="white" value="kimchi"></Checkbox.Item>
              <Checkbox.Item
                activeColor="info"
                color="white"
                size="lg"
                value="rice"
              ></Checkbox.Item>

              <Checkbox.Item activeColor="warning" color="white" value="kimchi"></Checkbox.Item>
              <Checkbox.Item
                activeColor="warning"
                color="white"
                size="lg"
                value="rice"
              ></Checkbox.Item>
            </Checkbox.Group>
          </View>

          <View className="mt-4">
            <Checkbox.Group
              className="flex-col gap-[20]"
              value={checkValues}
              onChange={setCheckValues}
            >
              <Checkbox.Wrap label="게시판에 게시한다." value="kimchi"></Checkbox.Wrap>
              <Checkbox.Wrap label="게시판에 게시한다." value="rice"></Checkbox.Wrap>
            </Checkbox.Group>
          </View>
        </View>

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
