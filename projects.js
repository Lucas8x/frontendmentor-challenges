const repoRootURL =
  'https://github.com/Lucas8x/frontendmentor-challenges/tree/main';

const repoRawContent =
  'https://raw.githubusercontent.com/Lucas8x/frontendmentor-challenges/main';

const isDev = process.env.NODE_ENV !== 'production';

/**
 * @param {string} imgPath
 * @return {string}
 */
function normalizeImgURL(imgPath) {
  return `${isDev ? '.' : repoRawContent}${
    imgPath.startsWith('/') ? imgPath : `/${imgPath}`
  }`;
}

export const projects = [
  {
    id: 'qr-code-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL('/qr-code-component-main/design/desktop-design.jpg'),
    liveURL: './qr-code-component-main',
    repoURL: `${repoRootURL}/qr-code-component-main`,
  },
  {
    id: 'age-calculator-app-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL(
      '/age-calculator-app-main/design/desktop-design.jpg',
    ),
    liveURL: './age-calculator-app-main',
    repoURL: `${repoRootURL}/age-calculator-app-main`,
  },
  {
    id: 'interactive-rating-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL(
      '/interactive-rating-component-main/design/desktop-design.jpg',
    ),
    liveURL: './interactive-rating-component-main',
    repoURL: `${repoRootURL}/interactive-rating-component-main`,
  },
  {
    id: 'advice-generator-app-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL(
      '/advice-generator-app-main/design/desktop-design.jpg',
    ),
    liveURL: './advice-generator-app-main',
    repoURL: `${repoRootURL}/advice-generator-app-main`,
  },
  {
    id: 'order-summary-component-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL(
      '/order-summary-component-main/design/desktop-design.jpg',
    ),
    liveURL: './order-summary-component-main',
    repoURL: `${repoRootURL}/order-summary-component-main`,
  },
  {
    id: 'faq-accordion-main',
    techs: ['HTML', 'TailwindCSS'],
    image: normalizeImgURL('/faq-accordion-main/design/desktop-design.jpg'),
    liveURL: './faq-accordion-main',
    repoURL: `${repoRootURL}/faq-accordion-main`,
  },
];
