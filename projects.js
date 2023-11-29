const repoRootURL =
  'https://github.com/Lucas8x/frontendmentor-challenges/tree/main';

const repoRawContent =
  'https://raw.githubusercontent.com/Lucas8x/frontendmentor-challenges/main';

const isDev = process.env.NODE_ENV !== 'production';

export const projects = [
  {
    id: 'qr-code-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './qr-code-component-main/design/desktop-design.jpg'
      : repoRawContent.concat(
          '/qr-code-component-main/design/desktop-design.jpg',
        ),
    liveURL: './qr-code-component-main',
    repoURL: repoRootURL.concat('/qr-code-component-main'),
  },
  {
    id: 'age-calculator-app-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './age-calculator-app-main/design/desktop-design.jpg'
      : repoRawContent.concat(
          '/age-calculator-app-main/design/desktop-design.jpg',
        ),
    liveURL: './age-calculator-app-main',
    repoURL: repoRootURL.concat('/age-calculator-app-main'),
  },
];
