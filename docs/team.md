---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const direction = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/514782007071604754/5ca4b8adb2644143556c9453e945c9df.png',
    name: 'Tom',
    title: 'Fondateur',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/tom.gougler' },
      { icon: 'discord', link: 'https://discord.com/users/514782007071604754' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/630097366212411407/0335df89d5aec750c3e721fc5ded47b5.png',
    name: 'Raptories',
    title: 'Co-Fondateur',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/630097366212411407' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/487629267723747328/2302b30a4955459cf3b3365a2fe1a032.png',
    name: 'Ninovui',
    title: 'Co-Fondateur',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/487629267723747328' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/368847558170378250/a_26109e3dbc996b0c1fd1bbe1e5d20d92.gif',
    name: 'Menokaa',
    title: 'Responsable staff',
    links: [
      { icon: 'discord', link: 'https://discord.gg/DWWem3eGXR' },
    ]
  },
]

const staff = [
  {
    avatar: 'https://cdn.discordapp.com/avatars/252555769700941824/5b63ea184fb45238cde22e2a12305a50.png',
    name: 'MisterGriff',
    title: 'Développeur',
    links: [
      { icon: 'discord', link: 'https://discord.gg/DWWem3eGXR' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1088118096335745094/1e656721d204045ffd1bc58fb0d04321.png',
    name: 'Locviidv',
    title: 'Community Manager',
    links: [
      { icon: 'discord', link: 'https://discord.gg/DWWem3eGXR' },
    ]
  },
  {
    avatar: 'https://cdn.discordapp.com/avatars/1083063100649001050/70ad100bc1b1f48afc3ff59abf4d430d.png',
    name: 'Leo62e',
    title: 'Support',
    links: [
      { icon: 'discord', link: 'https://discord.gg/DWWem3eGXR' },
    ]
  },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>La direction</template>
    <template #lead>L'équipe fondatrice et dirigeante d'HelvetiaRP</template>
  </VPTeamPageTitle>
    <VPTeamMembers size="medium" :members="direction.slice(0, 1)"/>
    <VPTeamMembers size="medium" :members="direction.slice(1, 4)"/>

  <VPTeamPageSection>
    <template #title>Le staff</template>
    <template #lead>L'équipe dédiée au développement, à la modération et à l'accompagnement des joueurs au quotidien</template>
    <template #members>
      <VPTeamMembers size="small" :members="staff"/>
    </template>
  </VPTeamPageSection>
</VPTeamPage>