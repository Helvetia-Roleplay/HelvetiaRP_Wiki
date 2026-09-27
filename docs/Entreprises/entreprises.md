# 🏢 Entreprises & Institutions Cantonales

Le canton d'**Helvetia** abrite plusieurs institutions majeures et entreprises privées sous candidature (WhiteList). Pour intégrer leurs rangs, vous pouvez postuler directement sur leurs intranets Discord respectifs.

---

<script setup>
const entreprises = [
  {
    title: "Conseil d’État",
    subtitle: "Gouvernement Cantonal",
    details: "Organe exécutif suprême du canton : gestion des lois, budget cantonal et délivrance des agréments officiels.",
    link: "https://discord.gg/tJRFQWP6n",
    image: "/1erAout2025.png"
  },
  {
    title: "Police Cantonale",
    subtitle: "Ordre Public & DARD",
    details: "Maintien de la paix publique, enquêtes judiciaires, brigade d'intervention DARD et sécurité routière.",
    link: "https://discord.gg/PEFGXP2vnm",
    image: "/DARDSurvivor3.png"
  },
  {
    title: "Réseau Hospitalier",
    subtitle: "Secours & Urgences Médicales (144)",
    details: "Prise en charge des urgences préhospitalières, interventions SAMU/ambulances et soins spécialisés.",
    link: "https://discord.gg/qVDf56p4R",
    image: "/ambulance.png"
  },
  {
    title: "Ministère Public",
    subtitle: "Justice & Tribunaux",
    details: "Poursuites pénales, instruction des délits majeurs, barreau des avocats et tenue des procès cantonaux.",
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
  margin-top: 24px;
}
.entreprise-card {
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none !important;
  transition: all 0.25s ease;
}
.entreprise-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.entreprise-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-top: 0px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.entreprise-content {
  padding: 16px;
}
.entreprise-title {
  margin: 0 0 4px 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.entreprise-subtitle {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}
.entreprise-desc {
  margin: 0;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>

<div class="entreprises-grid">
  <a v-for="ent in entreprises" :key="ent.title" :href="ent.link" target="_blank" rel="noopener noreferrer" class="entreprise-card">
    <img :src="ent.image" alt="Logo Entreprise" class="entreprise-image" />
    <div class="entreprise-content">
      <div class="entreprise-subtitle">{{ ent.subtitle }}</div>
      <h3 class="entreprise-title">{{ ent.title }}</h3>
      <p class="entreprise-desc">{{ ent.details }}</p>
    </div>
  </a>
</div>

---

## 🛠️ Entreprises Commerciales & Garages Agréés

D'autres entreprises privées animent le tissu économique du canton :
- **Garages Mécaniciens Agréés** : Diagnostic, entretien moteur, vidanges, réparation de carrosserie, pose de pièces de performance et customisation esthétique.
- **Concessions Automobiles & Occasions** : Vente de véhicules certifiés et reprise d'anciens modèles.
- **Taxis & Transports Privés** : Prise en charge des usagers urbains et liaisons aéroportuaires.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Atelier du garage mécanique agréé</div>
  <div class="image-placeholder-desc">Vue de l'atelier mécanique avec les ponts élévateurs, l'établi d'outillage pour mécaniciens et le banc de diagnostic moteur en service.</div>
</div>
