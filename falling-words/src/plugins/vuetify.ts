// plugins/vuetify.ts
// @ts-ignore
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '#00D2FF',    // Electric Cyan
                    secondary: '#5E6D82',  // Cool Slate
                    accent: '#7F00FF',     // Neon Purple
                    error: '#FF4C4C',      // Alert Red
                    info: '#00D2FF',
                    success: '#22C55E',    // Green 500
                    warning: '#FBBF24',    // Amber 400
                    background: '#0B0E14', // Deep Space Black
                    surface: '#151921',    // Midnight Navy/Grey
                },
                dark: true,
            },
            light: {
                colors: {
                    primary: '#0083B0',
                    secondary: '#475569',
                    background: '#F1F5F9',
                    surface: '#FFFFFF',
                },
                dark: false,
            },
        },
    },
    defaults: {
        vList: {
            density: 'compact',
            nav: true,
            class: 'pa-0', // Remove list padding
        },
        vListItem: {
            density: 'compact',
            ripple: false,
            class: 'pa-1 px-3 min-height-0', // Extremely compact
        },
        vWindow: {
            transition: false,
            reverseTransition: false,
        },
        vTabs: {
            height: 48,
        },
        vDialog: {
            width: 'auto',
            maxWidth: '960',
        },
        vBtn: {
            rounded: 'lg',
            fontWeight: '600',
        },
        vCard: {
            rounded: 'xl',
            elevation: 0,
        },
        vColorPicker: {
            elevation: 0,
            rounded: 'lg',
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
