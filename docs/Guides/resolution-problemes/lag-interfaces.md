# ⚡ Résolution du Lag des Interfaces (NUI)

Si vous constatez des ralentissements, des baisses importantes de FPS à l'ouverture de l'inventaire (<kbd>TAB</kbd>), du smartphone (<kbd>F1</kbd>) ou du menu radial, suivez ces recommandations techniques.

---

## ⚙️ Solution 1 : Activer le GPU pour les Processus NUI

FiveM permet de décharger l'affichage des interfaces web (NUI) sur votre carte graphique plutôt que sur le processeur :

1. Sur l'écran d'accueil principal de FiveM (avant de vous connecter au serveur).
2. Cliquez sur l'icône d'engrenage **Paramètres** (en haut à droite).
3. Rendez-vous dans l'onglet **Jeu** (*Game*).
4. Cochez l'option : **Activer l'accélération matérielle de l'interface (GPU en processus NUI)**.
5. Redémarrez FiveM pour appliquer la modification.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Paramètres de l'application FiveM</div>
  <div class="image-placeholder-desc">Fenêtre des paramètres du client FiveM mettant en surbrillance l'option d'accélération matérielle GPU NUI dans l'onglet Jeu.</div>
</div>

---

## 🖥️ Solution 2 : Désactiver les Overlays Tiers

Certains logiciels en arrière-plan injectent des calques graphiques qui entrent en conflit direct avec le moteur Chromium de FiveM :

- **Discord Overlay** : Ouvrez Discord ➔ *Paramètres utilisateur* ➔ *Superposition en jeu* ➔ Désactivez la superposition.
- **Nvidia GeForce Experience (Shadowplay)** : Désactivez la superposition en jeu si vous n'enregistrez pas activement.
- **Razer Chroma / Synapse / Overwolf** : Fermez ces utilitaires en arrière-plan.

---

## 🗑️ Solution 3 : Nettoyer le dossier `nui-storage`

1. Fermez FiveM.
2. Accédez au dossier `%LocalAppData%\FiveM\FiveM.app\data`.
3. Supprimez le dossier nommé `nui-storage`.
4. Relancez FiveM.
