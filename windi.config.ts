import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: [
      "./**/*.{vue,ts}",
    ],
  },
})
