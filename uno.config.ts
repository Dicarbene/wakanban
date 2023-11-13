// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn-square', 'w-3 h-3 p-2 rounded-8px backdrop-blur-30 flex flex-justify-center items-center bg-white bg-opacity-10'],
    ['btn', 'b-0 p-2 rounded-8px backdrop-blur-30 flex flex-justify-center items-center bg-white bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30'],
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
