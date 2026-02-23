import { View, type ViewProps } from 'react-native';

import { cn } from '@/lib/cn';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  className,
  ...otherProps
}: ThemedViewProps) {
  const backgroundClassName =
    lightColor || darkColor
      ? cn(
          lightColor ? `bg-[${lightColor}]` : null,
          darkColor ? `dark:bg-[${darkColor}]` : null,
        )
      : 'bg-background dark:bg-background-dark';

  return (
    <View
      className={cn(backgroundClassName, className)}
      style={style}
      {...otherProps}
    />
  );
}
