import { Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
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
  title: 'text-2xl font-bold leading-8',
  subtitle: 'text-xl font-bold',
  link: 'text-base leading-[30px] text-[#0a7ea4]',
};

const textColorClasses = new Set([
  'black',
  'white',
  'transparent',
  'current',
  'inherit',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]);

const textSizeClasses = new Set([
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl',
]);

const textColorPattern = new RegExp(
  `^text-(?:${Array.from(textColorClasses).join('|')})(?:-\\d{2,3})?(?:/\\d{1,3})?$`,
);

const isArbitraryTextColor = (token: string) => {
  if (!token.startsWith('text-[') || !token.endsWith(']')) {
    return false;
  }
  const value = token.slice(6, -1);
  return (
    value.startsWith('#') ||
    value.startsWith('rgb') ||
    value.startsWith('hsl') ||
    value.startsWith('color:') ||
    value.startsWith('var(')
  );
};

const hasTextColorClass = (value?: string) => {
  if (!value) {
    return false;
  }
  const tokens = value.split(/\s+/).filter(Boolean);
  return tokens.some((token) => {
    if (textSizeClasses.has(token)) {
      return false;
    }
    return textColorPattern.test(token) || isArbitraryTextColor(token);
  });
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const combinedClassName = cn(typeClasses[type], className);
  const shouldUseThemeColor = type !== 'link' && !hasTextColorClass(className);
  const textStyle = shouldUseThemeColor ? { color } : undefined;

  return (
    <Text className={combinedClassName} style={[textStyle, style]} {...rest} />
  );
}
