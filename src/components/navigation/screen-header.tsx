import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { ReactNode } from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import { cn } from '@/lib/cn';

type ScreenHeaderProps = {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
  className?: string;
  right?: ReactNode;
};

export function ScreenHeader({
  title,
  onBack,
  showBack = true,
  className,
  right,
}: ScreenHeaderProps) {
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView
      edges={['top']}
      style={{ backgroundColor }}
      className={cn(className)}
    >
      <ThemedView className="h-12 flex-row items-center gap-3 px-4">
        {showBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBack}
            className="-ml-2 p-2"
          >
            <MaterialIcons name="arrow-back" size={22} color={textColor} />
          </Pressable>
        ) : null}
        <ThemedText type="defaultSemiBold" className="text-lg">
          {title}
        </ThemedText>
        {right}
      </ThemedView>
    </SafeAreaView>
  );
}
