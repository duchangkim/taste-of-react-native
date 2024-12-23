import classNames from 'classnames';
import { Text, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { ColorToken } from '@/src/shared/ui/color-tokens';
import { Icon } from '@/src/shared/ui/icon';

import { BadgeContextProvider, useBadgeContext } from './context';
import { BADGE_ACCENT, BADGE_COLOR, BadgeIconProps, BadgeRootProps, BadgeTextProps } from './types';

const badge = tv({
  slots: {
    base: 'flex-row items-center gap-[2] rounded-xs px-[8] py-[2]',
    text: 'font-bold text-label-md',
  },
  variants: {
    accentTarget: {
      [BADGE_ACCENT.BACKGROUND]: {
        text: 'text-white',
      },
      [BADGE_ACCENT.TEXT]: '',
    },
    color: {
      [BADGE_COLOR.PRIMARY]: {
        base: 'bg-brand-primary',
      },
      [BADGE_COLOR.SECONDARY]: {
        base: 'bg-brand-secondary',
      },
      [BADGE_COLOR.INFO]: {
        base: 'bg-info',
      },
      [BADGE_COLOR.WARNING]: {
        base: 'bg-error',
      },
    },
  },
  compoundVariants: [
    {
      accentTarget: BADGE_ACCENT.TEXT,
      color: BADGE_COLOR.PRIMARY,
      class: {
        base: 'bg-white',
        text: 'text-brand-primary',
      },
    },
    {
      accentTarget: BADGE_ACCENT.TEXT,
      color: BADGE_COLOR.SECONDARY,
      class: {
        base: 'bg-white',
        text: 'text-brand-secondary',
      },
    },
    {
      accentTarget: BADGE_ACCENT.TEXT,
      color: BADGE_COLOR.INFO,
      class: {
        base: 'bg-white',
        text: 'text-info',
      },
    },
    {
      accentTarget: BADGE_ACCENT.TEXT,
      color: BADGE_COLOR.WARNING,
      class: {
        base: 'bg-white',
        text: 'text-error',
      },
    },
  ],
});

function BadgeRoot({
  accentTarget = BADGE_ACCENT.BACKGROUND,
  color = BADGE_COLOR.PRIMARY,
  className,
  ...props
}: BadgeRootProps) {
  const { base } = badge({ accentTarget, color });

  return (
    <BadgeContextProvider value={{ accentTarget, color }}>
      <View className={classNames(base(), className)} {...props} />
    </BadgeContextProvider>
  );
}

function BadgeText({ className, ...props }: BadgeTextProps) {
  const { accentTarget, color } = useBadgeContext();
  const { text } = badge({ accentTarget, color });

  return <Text className={classNames(text(), className)} {...props} />;
}

function BadgeIcon({ width = 16, height = 16, ...props }: BadgeIconProps) {
  const { accentTarget, color } = useBadgeContext();
  let iconColor: ColorToken = 'white';

  if (accentTarget === BADGE_ACCENT.TEXT) {
    iconColor = (
      {
        [BADGE_COLOR.PRIMARY]: 'brand-primary',
        [BADGE_COLOR.SECONDARY]: 'brand-secondary',
        [BADGE_COLOR.INFO]: 'info',
        [BADGE_COLOR.WARNING]: 'error',
      } as const
    )[color];
  }

  return <Icon color={iconColor} height={height} width={width} {...props} />;
}

export const Badge = Object.assign(BadgeRoot, {
  Text: BadgeText,
  Icon: BadgeIcon,
});
