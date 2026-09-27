# 🗑️ Vider son Cache FiveM

Vider le cache de FiveM est la méthode la plus efficace pour résoudre les problèmes de chargement de textures, les plantages inopinés (*crashes*), les erreurs d'interface ou les désynchronisations de modèles 3D après une mise à jour du serveur.

---

## 🛑 Étape 1 : Fermer complètement FiveM

Assurez-vous que FiveM et GTA V ne sont plus en cours d'exécution sur votre ordinateur (vérifiez au besoin dans le Gestionnaire des tâches avec <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>Échap</kbd>).

---

## 📂 Étape 2 : Accéder au dossier de données FiveM

1. Appuyez simultanément sur les touches <kbd>Windows</kbd> + <kbd>R</kbd> pour ouvrir la fenêtre **Exécuter**.
2. Tapez `%LocalAppData%` puis appuyez sur **Entrée** (ou <kbd>OK</kbd>).
3. Ouvrez le dossier nommé **FiveM**.
4. Ouvrez ensuite le dossier **FiveM Application Data** (reconnaissable à son icône d'escargot).

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Dossier FiveM Application Data</div>
  <div class="image-placeholder-desc">Vue de l'explorateur de fichiers Windows dans le dossier FiveM Application Data avec mise en surbrillance du dossier "data".</div>
</div>

---

## 🧹 Étape 3 : Supprimer les fichiers de cache

1. Ouvrez le sous-dossier **`data`**.
2. **Supprimez les dossiers suivants** :
   - 📁 `cache`
   - 📁 `server-cache`
   - 📁 `server-cache-priv`
   - 📁 `nui-storage`

::: warning ⚠️ Important : Ne pas supprimer le dossier `game-storage`
Conservez impérativement le dossier **`game-storage`** pour ne pas avoir à retélécharger les données de base du jeu lors du prochain lancement !
:::

---

## 🚀 Étape 4 : Relancer FiveM

Relancez FiveM et reconnectez-vous à **HelvetiaRP V2**. Le client téléchargera à nouveau les dernières versions optimisées des ressources du serveur.
