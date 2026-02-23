import { Image } from 'expo-image';
import { Trans, useTranslation } from 'react-i18next';
import { Platform, StyleSheet } from 'react-native';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  const { t } = useTranslation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          {t('explore.title')}
        </ThemedText>
      </ThemedView>
      <ThemedText>{t('explore.intro')}</ThemedText>
      <Collapsible title={t('explore.sections.routing.title')}>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.routing.body1"
            components={{
              file: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              homeFile: 'app/(tabs)/index.tsx',
              exploreFile: 'app/(tabs)/explore.tsx',
            }}
          />
        </ThemedText>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.routing.body2"
            components={{
              file: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              layoutFile: 'app/(tabs)/_layout.tsx',
            }}
          />
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">
            {t('explore.sections.routing.link')}
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.sections.platforms.title')}>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.platforms.body"
            components={{
              key: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              key: 'w',
            }}
          />
        </ThemedText>
      </Collapsible>
      <Collapsible title={t('explore.sections.images.title')}>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.images.body"
            components={{
              suffix: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              suffix2x: '@2x',
              suffix3x: '@3x',
            }}
          />
        </ThemedText>
        <Image
          source={require('@assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">
            {t('explore.sections.images.link')}
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.sections.themes.title')}>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.themes.body"
            components={{
              hook: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              hook: 'useColorScheme()',
            }}
          />
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">
            {t('explore.sections.themes.link')}
          </ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore.sections.animations.title')}>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="explore.sections.animations.body"
            components={{
              component: <ThemedText type="defaultSemiBold" />,
              library: (
                <ThemedText
                  type="defaultSemiBold"
                  style={{ fontFamily: Fonts.mono }}
                />
              ),
            }}
            values={{
              component: 'components/HelloWave.tsx',
              library: 'react-native-reanimated',
            }}
          />
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <Trans
                t={t}
                i18nKey="explore.sections.animations.iosBody"
                components={{
                  component: <ThemedText type="defaultSemiBold" />,
                }}
                values={{
                  component: 'components/ParallaxScrollView.tsx',
                }}
              />
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
