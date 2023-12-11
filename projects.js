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
  {
    id: 'interactive-rating-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './interactive-rating-component-main/design/desktop-design.jpg'
      : repoRawContent.concat(
          '/interactive-rating-component-main/design/desktop-design.jpg',
        ),
    liveURL: './interactive-rating-component-main',
    repoURL: repoRootURL.concat('/interactive-rating-component-main'),
  },
  {
    id: 'advice-generator-app-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './advice-generator-app-main/design/desktop-design.jpg'
      : repoRawContent.concat(
          '/advice-generator-app-main/design/desktop-design.jpg',
        ),
    liveURL: './advice-generator-app-main',
    repoURL: repoRootURL.concat('/advice-generator-app-main'),
  },
  {
    id: 'order-summary-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './order-summary-component-main/design/desktop-design.jpg'
      : repoRawContent.concat(
          '/order-summary-component-main/design/desktop-design.jpg',
        ),
    liveURL: './order-summary-component-main',
    repoURL: repoRootURL.concat('/order-summary-component-main'),
  },
  {
    id: 'faq-accordion-main',
    techs: ['HTML', 'TailwindCSS'],
    image: isDev
      ? './faq-accordion-main/design/desktop-design.jpg'
      : repoRawContent.concat('/faq-accordion-main/design/desktop-design.jpg'),
    liveURL: './faq-accordion-main',
    repoURL: repoRootURL.concat('/faq-accordion-main'),
  },
];
