// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	// server config variable
	runtimeConfig: {
		MONGO_URI: process.env.MONGO_URI,
	},
	// register nitro plugin
	nitro: {
		plugins: ["@/server/db/index.ts"],
	},

});
