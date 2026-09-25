# Entreprises

Bienvenue sur la page dédiée aux entreprises de la ville. Vous trouverez ci-dessous les boutons pour rejoindre leurs serveurs Discord ou visiter leurs sites internet.

<script setup>
const entreprises = [
  {
    title: "Conseil d’État",
    details: "Recrutement ouvert! Cliquez ici pour rejoindre l'intranet de l\'entreprise.",
    link: "https://discord.gg/tJRFQWP6n",
    image: "./public/1erAout2025.png"
  },
  {
    title: "Police Cantonale",
    details: "Recrutement ouvert! Cliquez ici pour rejoindre l'intranet de l\'entreprise.",
    link: "https://discord.gg/PEFGXP2vnm",
    image: "/DARDSurvivor3.png"
  },
  {
    title: "Réseau Hospitalier",
    details: "Recrutement ouvert! Cliquez ici pour rejoindre l'intranet de l\'entreprise.",
    link: "https://discord.gg/qVDf56p4R",
    image: "/ambulance.png"
  },
  {
    title: "Ministère Public",
    details: "Recrutement ouvert! Cliquez ici pour rejoindre l'intranet de l\'entreprise.",
    link: "https://discord.gg/GmvMzpfUUy",
    image: "/BusEtDrapeau.png"
  },
]
</script>

<style scoped>
.entreprises-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;
}
.entreprise-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none !important;
  transition: border-color 0.25s;
}
.entreprise-card:hover {
  border-color: var(--vp-c-brand-1);
}
.entreprise-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-top: 0px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.entreprise-content {
  padding: 5px 20px 20px 20px;
}
.entreprise-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}
.entreprise-desc {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>

<div class="entreprises-grid">
  <a v-for="ent in entreprises" :key="ent.title" :href="ent.link" target="_blank" class="entreprise-card">
    <img :src="ent.image" alt="Logo Entreprise" class="entreprise-image" />
    <div class="entreprise-content">
      <h3 class="entreprise-title">{{ ent.title }}</h3>
      <p class="entreprise-desc">{{ ent.details }}</p>
    </div>
  </a>
</div>

