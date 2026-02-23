const en = {
  tabs: {
    home: 'Home',
    explore: 'Explore',
  },
  language: {
    label: 'Language',
    english: 'English',
    vietnamese: 'Vietnamese',
  },
  modal: {
    title: 'Modal',
    body: 'This is a modal',
    goHome: 'Go to home screen',
  },
  home: {
    welcome: 'Welcome!',
    step1: {
      title: 'Step 1: Try it',
      body: 'Edit <file>{{file}}</file> to see changes. Press <shortcut>{{shortcut}}</shortcut> to open developer tools.',
    },
    step2: {
      title: 'Step 2: Explore',
      body: "Tap the Explore tab to learn more about what's included in this starter app.",
      menu: {
        action: 'Action',
        share: 'Share',
        more: 'More',
        delete: 'Delete',
      },
    },
    step3: {
      title: 'Step 3: Get a fresh start',
      body: 'When you are ready, run <command>{{command}}</command> to get a fresh <app>{{app}}</app> directory. This will move the current <app>{{app}}</app> to <appExample>{{appExample}}</appExample>.',
    },
  },
  explore: {
    title: 'Explore',
    intro: 'This app includes example code to help you get started.',
    sections: {
      routing: {
        title: 'File-based routing',
        body1:
          'This app has two screens: <file>{{homeFile}}</file> and <file>{{exploreFile}}</file>.',
        body2:
          'The layout file in <file>{{layoutFile}}</file> sets up the tab navigator.',
        link: 'Learn more',
      },
      platforms: {
        title: 'Android, iOS, and web support',
        body: 'You can open this project on Android, iOS, and the web. To open the web version, press <key>{{key}}</key> in the terminal running this project.',
      },
      images: {
        title: 'Images',
        body: 'For static images, you can use the <suffix>{{suffix2x}}</suffix> and <suffix>{{suffix3x}}</suffix> suffixes to provide files for different screen densities',
        link: 'Learn more',
      },
      themes: {
        title: 'Light and dark mode components',
        body: "This template has light and dark mode support. The <hook>{{hook}}</hook> hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.",
        link: 'Learn more',
      },
      animations: {
        title: 'Animations',
        body: 'This template includes an example of an animated component. The <component>{{component}}</component> component uses the powerful <library>{{library}}</library> library to create a waving hand animation.',
        iosBody:
          'The <component>{{component}}</component> component provides a parallax effect for the header image.',
      },
    },
  },
};

export default en;
