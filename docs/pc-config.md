# Options de configuration

Les préférence et réglages possibles de la fiche sont configurés dans cet onglet :
- Jets
  - Public : Tous les joueurs voient les jets du PJ dans le chat.
  - Chuchotés au MJ : Seul le joueur et le MJ voient les jets (uniquement le MJ pour une fiche de PNJ non partagées aux joueurs).
  - Avec token : Le token par défaut du personnage apparaît dans tous les messages envoyés dans le chat par la fiche.
- Calcul automatique PV max. : Cette option permet que la fiche calcule automatiquement les PV maximums (cf. ci-dessous)
- Contrôle points de capacités : Cette option permet que la fiche vérifie les dépassements de points de capacité (cf. ci-dessous)
- Afficher voies 7-8-9 : Cette option permet d'afficher les voies supplémentaires (voies de prestige)
- Afficher compétences : Cette option permet d'activer ou de désactiver le sous-onglet _Compétences_ de l'onglet _Capacités_.

### Calcul automatique des PV maximums

Pour un fonctionnement correct de cette option, il est nécessaire de respecter les contraintes suivantes :
- La voie n°1 est la voie de peuple ou du mage
- Les voies n°2 et 3 sont les voies où sont choisies les deux capacités au niveau 1
- La capacité supplémentaire prise par les profils de mages au niveau 1 doit avoir la propriété <kbd>initial</kbd>
- Les PV de la voie (qui sont ceux de la famille de profil auquel appartient la voie) doivent être spécifiés. Ceux-ci sont initialisés automatiquement si le nom de la voie est reconnu par la fiche.

Les PV maximums sont calculés en faisant la somme des éléments suivants :
- [niveau] x [CON]
- pour toutes les capacités possédées (cochées) qui n'ont pas la propriété <kbd>doublon</kbd> (cf capacité en doublon, p. 171)
  - Si rang 1 de la voie 1 : 0 PV
  - Sinon si rang 1 de voie 2 ou 3 : [PV de voie]
  - Sinon si rang 2 de voie 1,2 ou 3 et propriété <kbd>initial</kbd> : 0 PV
  - Sinon si rang 1 ou 2 : [PV de voie]/2
  - Sinon (rang >2) : [PV de voie]

### Contrôle des points de capacités

Pour un fonctionnement correct de cette option, il est nécessaire de respecter les mêmes contraintes que ci-dessus :
- La voie n°1 est la voie de peuple ou du mage
- Les voies n°2 et 3 sont les voies où sont choisies les deux capacités au niveau 1
- La capacité supplémentaire prise par les profils de mages au niveau 1 doit avoir la propriété <kbd>initial</kbd>

La fiche décompte pour les capacités possédées (cochées) :
- Si rang 1 de la voie 1 : 0 point
- Sinon si rang 1 de voie 2 ou 3 : 1 point
- Sinon si rang 2 de voie 1,2 ou 3 et propriété <kbd>initial</kbd> : 0 point
- Sinon si rang 1 ou 2 : 1 point
- Sinon (rang >2) : 2 points

Si le nombre de points de capacités utilisé dépasse le nombre maximum disponble soit 2 x [niveau], un message d'alerte s'affiche dans le chat Roll20.

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