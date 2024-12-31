# Options de configuration

Les préférence et réglages possibles de la fiche sont configurés dans cet onglet :
- Jets
  - Public : Tous les joueurs voient les jets du PJ dans le chat.
  - Chuchotés au MJ : Seul le joueur et le MJ voient les jets (uniquement le MJ pour une fiche de PNJ non partagées aux joueurs).
  - Avec token : Le token par défaut du personnage apparaît dans tous les messages envoyés dans le chat par la fiche.
- Afficher voies 7-8-9 : Cette option permet d'afficher les voies supplémentaires (voies de prestige)
- Afficher compétences : Cette option permet d'activer ou de désactiver le sous-onglet _Compétences_ de l'onglet _Capacités_.

## Règles optionnelles

- Initiative variable : Un jet de 1d6 sans limite est ajouté au score d'initiative en début de combat.
- Initiative + AGI : Le score d'Initiative est calculé en ajoutant l'AGI à la somme 10 + PER.
- Encombrement : L'encombrement de l'équipement porté par le PJ est calculé et des alertes sont affichées dans le chat Roll20 selon que les divers seuils sont dépassés.
- Critiques différenciés : Les réussites critiques en combat provoquent des effets différenciés selon le type de DM de l'arme utilisée.

## High Fantasy

- Progression épique : Les scores d'attaques augmentent de +1 à chaque niveau impair à partir du niveau 11, ainsi que le score de base de la Défense.
- Récupération + niveau : Le niveau du personnage est ajouté au résultat du DR en cas de récupération rapide (1/2 niveau par défaut).
- Plus de Mana : Les sorts de rang 3 ou plus augmentent le maximum de 2 PM au lieu de 1.

## Low Fantasy

- Progression limitée : Les scores d'attaquent n'augmentent plus après le niveau 6.
- Récupération - niveau : Le jet de récupération rapide est un jet de DR sec, sans ajouter la moitié du niveau.

## Notifications

Pour chaque type de notification, le joueur peut choisir entre aucun affichage, un affichage pour tous les joueurs, ou un affichage privé pour lui et le MJ.

- Conditions : Les effets des états préjudiciables sont affichés ou pas dans le chat Roll20.
- Gain/Perte de PV : Les effets des gains ou des pertes de PV lors du clic sur les deux icones sont affichés ou pas dans le chat Roll20.

## Apparence des messages

Le joueur peut sélectionner une couleur spécifique pour les messages de chat de son personnage.

## Premiers rangs

Pour chaque voie du PJ, vous pouvez indiquer la valeur du premier rang (1 pour les voies de peuple et de profil, 3 ou 4 pour les voies de prestige).

# Import des capacités

Cette section permet d'importer les capacités d'une voie de profil ou de prestige.

Collez le texte dans le champ prévu à cet effet, saisissez le no de la voie correspondante et cliquez sur le bouton <kbd>Importer</kbd>. 

- La voie choisie est remplie avec le texte copié, toutes les données précédemment saisies sont **écrasées** !
- La description de chaque capacité est analysée pour trouver des références à un nombre d'utilisations limité (ex : _"une fois par combat, ..."_)
- Si le nom d'une capacité comporte un astérisque <kbd>*</kbd>, celle-ci est considérée comme un sort

---

[Retour]({{ site.baseurl }}/pc-main)