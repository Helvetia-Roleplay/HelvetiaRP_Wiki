# 💳 Banque, Bancomats & Finances

Le système financier d'**HelvetiaRP V2** est pensé pour refléter la rigueur et l'ergonomie du système bancaire suisse.

---

## 🏦 1. Les Bancomats (DAB) & Guichets Bancaires

Partout sur le territoire cantonal, vous trouverez des distributeurs automatiques de billets (**Bancomats**) ainsi que de grandes agences bancaires centrales.

### Actions disponibles sur un Bancomat :
- **Consulter votre solde** : Visualisez l'état de votre compte bancaire en temps réel.
- **Retrait d'argent liquide** : Transférez de l'argent de votre compte vers votre inventaire en espèces.
- **Dépôt d'argent liquide** : Mettez vos espèces en sécurité directement sur votre compte.
- **Virement bancaire** : Effectuez un transfert sécurisé vers le compte d'un autre citoyen grâce à son identifiant bancaire / IBAN suisse.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Interface du Bancomat suisse</div>
  <div class="image-placeholder-desc">Menu tactile moderne d'un Bancomat affichant le solde du compte, les boutons de retrait rapide (100, 500, 1000 CHF), dépôt et historique des transactions.</div>
</div>

---

## 🧾 2. Système de Facturation (`/bill` & Terminaux)

Lors d'un achat dans un commerce ou d'une prestation de service (garage mécanicien, taxi, avocat, soins médicaux), le professionnel peut vous envoyer une facture officielle.

- **Paiement immédiat par terminal** : Le commerçant vous tend son terminal de paiement électronique (TPE). Vous n'avez qu'à valider sur votre écran.
- **Consultation des factures impayées** : Tapez la commande `/bill` pour afficher l'ensemble de vos factures en attente et régler celles de votre choix.

---

## 🚗 3. Crédits et Financements de Véhicules (`/myfinance`)

Certains concessionnaires automobiles proposent l'achat de véhicules haut de gamme sous forme de leasing ou de financement à tempérament :

- Tapez `/myfinance` pour afficher l'état de vos crédits en cours.
- Vous pouvez effectuer des paiements anticipés, régler des mensualités en retard ou solder intégralement la dette de votre véhicule pour lever le gage.

<div class="image-placeholder">
  <div class="image-placeholder-icon">📸</div>
  <div class="image-placeholder-title">Capture d'écran recommandée : Panneau de gestion des financements</div>
  <div class="image-placeholder-desc">Fenêtre UI `/myfinance` montrant la liste des véhicules achetés à crédit, le montant restant dû et les boutons de remboursement.</div>
</div>

---

## 🤝 4. Échange d'argent liquide de la main à la main

Pour donner du liquide à un citoyen situé juste à côté de vous :
- **Via la commande** : Tapez `/cashgive` pour ouvrir l'interface de don.
- **Via Ox Target** : Maintenez <kbd>ALT</kbd>, visez le citoyen, puis cliquez sur *"Donner de l'argent"*.
- **Via l'inventaire** : Ouvrez <kbd>TAB</kbd>, faites un glisser-déposer de vos billets sur la silhouette du joueur à proximité.
