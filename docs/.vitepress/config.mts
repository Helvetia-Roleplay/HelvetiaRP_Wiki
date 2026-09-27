import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/HelvetiaRP_Wiki/',
  title: "HelvetiaRP V2",
  description: "Wiki officiel du serveur FiveM Helvetia Roleplay V2 - Suisse Romande",
  appearance: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/HelvetiaRP_Wiki/LogoHelvetiaRP.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🚀 Se Connecter', link: 'https://cfx.re/join/gmxpxq' },
      { text: '📜 Règlements', link: '/Reglements/reglements' },
      { text: '🏢 Entreprises', link: '/Entreprises/entreprises' },
      {
        text: '🌐 Liens Utiles',
        items: [
          { text: 'Voter sur TopServeurs', link: 'https://top-serveurs.net/gta/vote/helvetiarp' },
          { text: 'Linktree', link: 'https://linktr.ee/helvetiarp.ch' },
          { text: 'Instagram', link: 'https://www.instagram.com/helvetia.rp.ch' },
          { text: 'TikTok', link: 'https://tiktok.com/@helvetiaroleplay' }
        ]
      }
    ],

    sidebar: [
      {
        text: '📜 Règlements Officiels',
        collapsed: false,
        items: [
          { text: 'Règles Générales & Principes RP', link: '/Reglements/reglements' },
          { text: '⚖️ Règlement Légal & Vie Civile', link: '/Reglements/reglement-legal' },
          { text: '🏴 Règlement Illégal & Braquages', link: '/Reglements/reglement-illegal' },
        ],
      },
      {
        text: '🇨🇭 Découverte & Vie Citoyenne',
        collapsed: false,
        items: [
          { text: '📖 Sommaire des Guides', link: '/Guides/guides' },
          { text: '✈️ Se connecter au serveur', link: '/Guides/connecter-au-serveur' },
          { text: '🇨🇭 Bien débuter à Helvetia', link: '/Guides/bien-debuter' },
          { text: '🪪 Guichet Cantonal & Documents', link: '/Guides/identite-documents' },
          { text: '💳 Banque, Bancomats & Finances', link: '/Guides/banque-finances' },
          { text: '📱 Smartphone & Téléphonie', link: '/Guides/telephone' },
          { text: '🎓 Écoles de Pilotage & Permis', link: '/Guides/auto-ecole-permis' },
          { text: '🏡 Logements & Immobilier', link: '/Guides/immobilier-logement' },
        ],
      },
      {
        text: '🎮 Systèmes & Gameplay',
        collapsed: false,
        items: [
          { text: '🎒 Inventaire Ox (Poids & Slots)', link: '/Guides/inventaire-ox' },
          { text: '🎯 Interactions (Ox Target)', link: '/Guides/ox-target' },
          { text: '🚗 Véhicules, Garages & Essence', link: '/Guides/vehicules-garages' },
          { text: '🎙️ Chat Vocal PMA & Radio', link: '/Guides/chat-vocal' },
          { text: '🔊 Gestion du Volume Audio', link: '/Guides/gestion-volume' },
        ],
      },
      {
        text: '💼 Économie & Entreprises',
        collapsed: false,
        items: [
          { text: '🏢 Entreprises & Institutions', link: '/Entreprises/entreprises' },
          { text: '📦 Métiers Libres (Swiss Post, etc.)', link: '/Entreprises/metiers-libres' },
        ],
      },
      {
        text: '🚨 Services d\'Urgence',
        collapsed: false,
        items: [
          { text: '👮 Police Cantonale & DARD', link: '/Services/police-securite' },
          { text: '🏥 Réseau Hospitalier (144)', link: '/Services/hopital-secours' },
        ],
      },
      {
        text: '⌨️ Touches & Commandes',
        collapsed: false,
        items: [
          { text: '⌨️ Guide Complet des Touches', link: '/Guides/touches-commandes/touches' },
          { text: '📇 Liste des Commandes', link: '/Guides/touches-commandes/commandes' },
          { text: '⚙️ Configurer ses Touches', link: '/Guides/touches-commandes/configurer-touche' },
        ],
      },
      {
        text: '🛠️ Résolution des Problèmes',
        collapsed: false,
        items: [
          { text: '🗑️ Vider son cache FiveM', link: '/Guides/resolution-problemes/vider-cache-fivem' },
          { text: '🗺️ Textures ou Map qui ne charge pas', link: '/Guides/resolution-problemes/texture-map-charge-pas' },
          { text: '⚡ Lag des Interfaces (NUI)', link: '/Guides/resolution-problemes/lag-interfaces' },
        ],
      },
      {
        text: '👥 Communauté',
        collapsed: false,
        items: [
          { text: 'L\'Équipe HelvetiaRP', link: '/team' },
        ],
      },
    ],

    darkModeSwitchLabel: 'Apparence',
    lightModeSwitchTitle: 'Passer au thème clair',
    darkModeSwitchTitle: 'Passer au thème sombre',

    logo: '/LogoHelvetiaRP.svg',

    lastUpdated: {
      text: 'Mis à jour le',
      formatOptions: {
        dateStyle: 'short'
      }
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/GXNs54yhf3' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher dans le wiki',
            buttonAriaLabel: 'Rechercher dans le wiki'
          },
          modal: {
            displayDetails: 'Afficher les détails',
            resetButtonTitle: 'Effacer la recherche',
            backButtonTitle: 'Fermer la recherche',
            noResultsText: 'Aucun résultat trouvé pour',
            footer: {
              selectText: 'pour choisir',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer'
            }
          }
        }
      }
    },

    footer: {
      message: 'Wiki officiel du serveur <a href="https://discord.gg/GXNs54yhf3">Helvetia Roleplay V2</a> (Suisse Romande).',
      copyright: 'Copyright © 2026 Helvetia RP. Tous droits réservés.'
    },
  }
})
