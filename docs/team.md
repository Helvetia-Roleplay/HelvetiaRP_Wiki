---
layout: page
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
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'test',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

const staff = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>La direction</template>
    <template #lead>L'équipe dirigeante du serveur</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="direction" />
  <VPTeamPageSection>
    <template #title>Le staff</template>
    <template #lead>Ceux qui font tourner le serveur</template>
    <template #members>
      <VPTeamMembers size="small" :members="staff" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>