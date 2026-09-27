# 🗺️ Textures Floues ou Map qui ne Charge Pas

Si vous observez des trous dans la route (le sol disparaît sous votre véhicule), des façades de bâtiments grises ou des textures qui mettent du temps à s'afficher lors de vos déplacements à grande vitesse, suivez ces étapes d'optimisation.

---

## 🛠️ Solution 1 : Augmenter l'Extended Texture Budget (Budget mémoire des textures)

C'est la cause la plus fréquente sur les serveurs moddés disposant de nombreux mappings, tenues suisses et véhicules personnalisés.

1. En jeu, ouvrez le menu pause avec <kbd>Échap</kbd>.
2. Allez dans `Paramètres` ➔ `Graphismes`.
3. Faites défiler vers le bas jusqu'au paramètre **Budget de mémoire de texture étendu** (*Extended Texture Budget*).
4. Augmentez la jauge de **3 à 6 crans** vers la droite.
5. Surveillez la jauge de mémoire vidéo (VRAM) en haut de l'écran pour rester dans la limite de votre carte graphique.
6. Validez avec <kbd>Entrée</kbd>.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Curseur Extended Texture Budget dans GTA V</div>
  <div class="image-placeholder-desc">Capture des paramètres graphiques de GTA V montrant la barre de VRAM en haut et le curseur "Budget de mémoire de texture étendu" ajusté à mi-chemin.</div>
</div>

---

## 🏎️ Solution 2 : Installer GTA V / FiveM sur un SSD

Les disques durs mécaniques (HDD) ne sont plus assez rapides pour charger les milliers de textures et modèles 3D FiveM en temps réel.
- Déplacez impérativement votre jeu GTA V ainsi que le dossier FiveM sur un disque **SSD** (ou SSD NVMe).

---

## 🧹 Solution 3 : Vider le Cache FiveM

Un cache corrompu ou saturé ralentit le chargement de la map :
- Suivez notre guide [Vider son Cache FiveM](/Guides/resolution-problemes/vider-cache-fivem).
