import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HelvetiaRP Wiki",
  description: "Bienvenue sur le wiki du serveur Helvetia Roleplay !",
  appearance: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Discord', link: 'https://discord.gg/GXNs54yhf3' },
      { text: 'Ouvrir FiveM', link: 'https://cfx.re/join/gmxpxq' },
      {
        text: 'Réseaux',
        items: [
          { text: 'TopServeur', link: 'https://top-serveurs.net/gta/vote/helvetiarp' },
          { text: 'Instagram', link: 'https://www.instagram.com/helvetia.rp.ch' },
          { text: 'TikTok', link: 'https://tiktok.com/@helvetiaroleplay' }
        ]
      }
    ],

    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',

    logo: '/LogoHelvetiaRP.svg',

    sidebar: [
      {
        text: 'Tutoriels',
        base: '/tutoriels',
        collapsed: false,
        items: [
          { text: 'Se connecter au serveur', link: '/connecter-au-serveur' },
          { text: 'Vider son cache FiveM', link: '/vider-cache-fivem' },
          { text: 'Gestion du volume', link: '/gestion-volume' },
          { text: 'Commandes', link: '/chat-vocal' },
          {
            text: 'Résolution des problèmes',
            base: '/resolution-problemes',
            collapsed: false,
            items: [
              { text: 'Configurer ses touches', link: '/connecter-au-serveur' },
              { text: 'Touches', link: '/vider-cache-fivem' },
            ],
          },
        ],
      },
      {
        text: 'Touches et commandes',
        base: '/touches-commandes',
        collapsed: false,
        items: [
          { text: 'Configurer ses touches', link: '/configurer-touche' },
          { text: 'Touches', link: '/touches' },
          { text: 'Commandes', link: '/commandes' },
        ],
      },
      {
        text: 'La vie sur HelvetiaRP',
        base: '/vie-sur-helvetiarp',
        collapsed: false,
        items: [
          { text: 'Configurer ses touches', link: '/configurer-touche' },
          { text: 'Touches', link: '/touches' },
          { text: 'Commandes', link: '/commandes' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Helvetia-Roleplay' }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
  }
})