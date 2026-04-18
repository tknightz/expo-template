/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    $0: 'jest',
    args: {
      config: 'tests/e2e/jest.config.js',
      _: ['tests/e2e'],
    },
  },
  artifacts: {
    rootDir: 'artifacts/detox',
    plugins: {
      log: 'all',
      screenshot: 'failing',
      video: 'failing',
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/expotemplate.app',
      build:
        'xcodebuild -project ios/expotemplate.xcodeproj -scheme expotemplate -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Medium_Phone_API_35',
      },
    },
    waydroid: {
      type: 'android.attached',
      device: {
        adbName: '192.168.240.112:5555',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'android.emu.debug': {
      device: 'waydroid',
      app: 'android.debug',
    },
  },
};
