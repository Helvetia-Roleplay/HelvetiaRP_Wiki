# ⚙️ Configurer & Personnaliser ses Touches

FiveM intègre un gestionnaire complet d'affectation des touches qui permet à chaque joueur de remapper ses raccourcis selon ses préférences et son type de clavier (**QWERTZ suisse**, **AZERTY français** ou **QWERTY**).

---

## 🧭 Accéder au menu de configuration

1. Appuyez sur <kbd>Échap</kbd> pour ouvrir le menu pause de GTA V.
2. Cliquez sur l'onglet **Paramètres** (ou *Settings*).
3. Rendez-vous dans **Configuration des touches** (ou *Key Bindings*).
4. Sélectionnez la sous-catégorie **FiveM**.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Paramètres FiveM > Configuration des touches</div>
  <div class="image-placeholder-desc">Écran de configuration des touches de GTA V / FiveM montrant les lignes personnalisables comme "Ouvrir l'inventaire", "Verrouillage véhicule", "Ceinture", "Radio".</div>
</div>

---

## ✏️ Modifier une touche

1. Faites défiler la liste jusqu'à l'action souhaitée (ex: *Ouvrir l'inventaire*, *Ceinture*, *Téléphone*).
2. Cliquez sur la touche actuellement assignée.
3. Appuyez sur la nouvelle touche de votre choix sur votre clavier ou souris.
4. Appuyez sur <kbd>Échap</kbd> ou <kbd>Entrée</kbd> pour valider et enregistrer automatiquement.

---

## 🗑️ Comment réinitialiser ou dé-assigner une touche

Si deux actions entrent en conflit sur la même touche :

### Option 1 : Réinitialisation dans le menu
- Survolez l'action dans le menu des touches et appuyez sur <kbd>Suppr</kbd> ou réinitialisez la catégorie avec <kbd>Restaurer par défaut</kbd>.

### Option 2 : Via la console F8
- Ouvrez la console avec <kbd>F8</kbd>.
- Saisissez la commande : `unbind keyboard [NOM_DE_LA_COMMANDE]` puis validez avec <kbd>Entrée</kbd>.

### Option 3 : Nettoyage direct du fichier de configuration FiveM
1. Fermez FiveM.
2. Ouvrez l'explorateur Windows et collez le chemin : `%AppData%\CitizenFX`.
3. Ouvrez le fichier `fivem.cfg` avec un éditeur de texte.
4. Supprimez les lignes d'affectation personnalisées en conflit.
5. Relancez FiveM pour restaurer les attributions natives du serveur.