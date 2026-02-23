import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Trans, useTranslation } from 'react-i18next';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const { t, i18n } = useTranslation();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;
  const isEnglish = activeLanguage?.startsWith('en');
  const isVietnamese = activeLanguage?.startsWith('vi');
  const devShortcut =
    Platform.select({
      ios: 'cmd + d',
      android: 'cmd + m',
      web: 'F12',
      default: 'F12',
    }) ?? 'F12';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('home.welcome')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.languageContainer}>
        <ThemedText type="subtitle">{t('language.label')}</ThemedText>
        <ThemedView style={styles.languageButtons}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: Boolean(isEnglish) }}
            onPress={() => {
              void i18n.changeLanguage('en');
            }}
            style={[
              styles.languageButton,
              isEnglish
                ? {
                    backgroundColor: theme.tint,
                    borderColor: theme.tint,
                  }
                : { borderColor: theme.icon },
            ]}
          >
            <ThemedText
              style={[
                styles.languageButtonText,
                isEnglish ? { color: theme.background } : undefined,
              ]}
            >
              {t('language.english')}
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={{ selected: Boolean(isVietnamese) }}
            onPress={() => {
              void i18n.changeLanguage('vi');
            }}
            style={[
              styles.languageButton,
              isVietnamese
                ? {
                    backgroundColor: theme.tint,
                    borderColor: theme.tint,
                  }
                : { borderColor: theme.icon },
            ]}
          >
            <ThemedText
              style={[
                styles.languageButtonText,
                isVietnamese ? { color: theme.background } : undefined,
              ]}
            >
              {t('language.vietnamese')}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.step1.title')}</ThemedText>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="home.step1.body"
            components={{
              file: <ThemedText type="defaultSemiBold" />,
              shortcut: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              file: 'app/(tabs)/index.tsx',
              shortcut: devShortcut,
            }}
          />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">{t('home.step2.title')}</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title={t('home.step2.menu.action')}
              icon="cube"
              onPress={() => alert('Action pressed')}
            />
            <Link.MenuAction
              title={t('home.step2.menu.share')}
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title={t('home.step2.menu.more')} icon="ellipsis">
              <Link.MenuAction
                title={t('home.step2.menu.delete')}
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>{t('home.step2.body')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home.step3.title')}</ThemedText>
        <ThemedText>
          <Trans
            t={t}
            i18nKey="home.step3.body"
            components={{
              command: <ThemedText type="defaultSemiBold" />,
              app: <ThemedText type="defaultSemiBold" />,
              appExample: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              command: 'npm run reset-project',
              app: 'app',
              appExample: 'app-example',
            }}
          />
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  languageContainer: {
    gap: 8,
    marginBottom: 8,
  },
  languageButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  languageButton: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  languageButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
