import { Text, type TextProps } from 'react-native';

import { cn } from '@/lib/cn';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

const typeClasses: Record<NonNullable<ThemedTextProps['type']>, string> = {
  default: 'text-base leading-6',
  defaultSemiBold: 'text-base leading-6 font-semibold',
  title: 'text-[32px] font-bold leading-8',
  subtitle: 'text-xl font-bold',
  link: 'text-base leading-[30px]',
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const colorClassName =
    lightColor || darkColor
      ? cn(
          lightColor ? `text-[${lightColor}]` : null,
          darkColor ? `dark:text-[${darkColor}]` : null,
        )
      : type === 'link'
        ? 'text-tint dark:text-tint-dark'
        : 'text-text dark:text-text-dark';
  const combinedClassName = cn(typeClasses[type], colorClassName, className);

  return <Text className={combinedClassName} style={style} {...rest} />;
}
