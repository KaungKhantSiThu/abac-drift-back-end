import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["devtools"]?: typeof import("/Users/kaungkhantsithu/.nvm/versions/node/v19.3.0/lib/node_modules/@nuxt/devtools/module.cjs").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    MONGO_URI: string,
  }
  interface PublicRuntimeConfig {
  
  }
}