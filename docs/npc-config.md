# Options de configuration

Les préférence et réglages possibles de la fiche sont configurés dans cet onglet :
- Jets
  - Public : Tous les joueurs voient les jets du PJ dans le chat.
  - Chuchotés au MJ : Seul le joueur et le MJ voient les jets (uniquement le MJ pour une fiche de PNJ non partagées aux joueurs).
  - Avec token : Le token par défaut du PNJ apparaît dans tous les messages envoyés dans le chat par la fiche.
- Un seul jet d'attaque, au lieu des deux jets effectués par défaut par la fiche.

## Règles optionnelles

- Initiative variable : Un jet de 1d6 sans limite est ajouté au score d'initiative en début de combat.
- Départager les inits identiques : La valeur de <kbd>(AGI+PER)/10</kbd> est ajoutée au jet d'initiative.
- Critiques différenciés : Les réussites critiques en combat provoquent des effets différenciés selon le type de DM de l'arme utilisée.

## Compagnon

Cette section permet d'identifier le PNJ comme le compagnon ou familier d'un PJ, dans le cas où certains traits du PNJ sont calculés à partir de valeurs d'attributs du PJ.

Pour ce faire, il faut indiquer le nom **exact** du PJ dans le PNJ est le compagnon, puis définir une expression pour le calcul des traits du PNJ, en spécifiant le nom d'un attribut du PJ dont il dépend entre <kbd>[ ]</kbd>. Comme il s'agit d'expressions mathématiques interprétées par du code Javascript, la multiplication est représentée par le signe <kbd>*</kbd> et la division par le signe <kbd>/</kbd>.

_Exemple : Loup (rôdeur)_

- Défense : <kbd>12 + [rang_voie?]</kbd> 
  
  _En remplaçant ? par le no de la voie du compagnon animal_ sur la fiche du rôdeur.

- Vigueur : <kbd>[niveau]*4</kbd>
- Initiative : <kbd>[init]</kbd>
- Attaque : <kbd>[atkmag]</kbd>

## Importer un statblock

Cette section dépliable permet d'importer les données techniques du PNJ en copiant un statblock depuis un document PDF. Le bouton <kbd>Importer</kbd> analyse le texte collé dans le champ de texte, et en extrait les données utilisables.

# Menus et macros

Divers boutons disséminés dans la fiche permettent d'afficher dans le chat Roll20 des menus avec des listes d'actions. Ces boutons peuvent être configurés en tant que macros Roll20 et insérés dans la barre rapide des macros et/ou configurés en tant qu'action de jetons.

Les macros à configurer sont les suivantes :
- <kbd>%{selected|npc_menus-btn}</kbd> affiche un menu de tous les autres sous-menus possibles
- <kbd>%{selected|caract_menu-btn}</kbd> affiche un menu pour les jets de caractéristiques
- <kbd>%{selected|npcatks_menu-btn}</kbd> affiche un menu pour les jets d'attaque
- <kbd>%{selected|npcrolls_menu-btn}</kbd> affiche un menu des jets de capacités

---

[Retour]({{ site.baseurl }}/npc-main)