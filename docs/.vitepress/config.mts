import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/HelvetiaRP_Wiki/'
  title: "HelvetiaRP V2",
  description: "Bienvenue sur le wiki du serveur Helvetia Roleplay !",
  appearance: true,

  head: [['link', { rel: 'icon', href: '/LogoHelvetiaRP.ico' }]],
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

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short'
      }
    },

    sidebar: [
      {
        text: 'Règlements',
        base: '/Reglements',
        link: '/reglements',
        collapsed: false,
        items: [
          { text: 'Vider son cache FiveM', link: '/vider-cache-fivem' },
        ],
      },
      {
        text: 'Guides du serveur',
        base: '/Guides',
        collapsed: false,
        items: [
          { text: 'Se connecter au serveur', link: '/connecter-au-serveur' },
          { text: 'Gestion du volume', link: '/gestion-volume' },
          { text: 'Chat vocal', link: '/chat-vocal' },
          { text: '⚙️ Configurer ses touches', link: '/configurer-touche' },
          { text: '⌨️ Touches', link: '/touches' },
          { text: '📇 Commandes', link: '/commandes' },
          {
            text: 'Résolution des problèmes',
            base: '/Guides/resolution-problemes',
            collapsed: false,
            items: [
              { text: 'Vider son cache', link: '/vider-cache-fivem' },
              { text: 'Texture map qui charge pas', link: '/texture-map-charge-pas' },
              { text: 'Lag des interfaces', link: '/lag-interfaces' },
            ],
          },
          {
            text: 'Entreprises',
            base: '/Entreprises',
            link: '/entreprises',
            collapsed: false,
            items: [
              { text: 'Se connecter au serveur', link: '/connecter-au-serveur' },
            ],
          },
          /*{ text: 'Configurer ses touches', link: '/configurer-touche' },
          { text: 'Touches', link: '/touches' },
          { text: 'Commandes', link: '/commandes' },*/
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

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2026-present <a href="https://github.com/Helvetia-Roleplay">Helvetia RP</a>'
    },
  }
})
