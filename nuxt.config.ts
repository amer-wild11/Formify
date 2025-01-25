export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@prisma/nuxt", "@nuxt/icon", "@nuxtjs/netlify"],
  css: ["~/assets/scss/main.scss"],
  ssr: true,  // تأكد من تفعيل SSR
  nitro: {
    preset: "netlify", // استخدام Netlify كإعداد مسبق يمكن أن يعمل مع Render كذلك
  },
});
