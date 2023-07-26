// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@/assets/style/_transitions.scss" as *;
          @use "@/assets/style/_colors.scss" as *;
          @use "@/assets/style/_animations.scss" as *;
            `,
        },
      },
    },
  },
  generate: { fallback: "404.html" },
});
