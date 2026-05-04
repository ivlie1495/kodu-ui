/** @type {import('prettier').Config} */
const config = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]', '^[../]'],
  importOrderSeparation: true,
  singleQuote: true,
  semi: false,
}

export default config
