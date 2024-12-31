# Options de configuration

Les préférence et réglages possibles de la fiche sont configurés dans cet onglet :
- Jets
  - Public : Tous les joueurs voient les jets du PJ dans le chat.
  - Chuchotés au MJ : Seul le joueur et le MJ voient les jets (uniquement le MJ pour une fiche de PNJ non partagées aux joueurs).
  - Avec token : Le token par défaut du PNJ apparaît dans tous les messages envoyés dans le chat par la fiche.

## Règles optionnelles

- Initiative variable : Un jet de 1d6 sans limite est ajouté au score d'initiative en début de combat.
- Critiques différenciés : Les réussites critiques en combat provoquent des effets différenciés selon le type de DM de l'arme utilisée.

## Compagnon

Cette section permet d'identifier le PNJ comme le compagnon ou familier d'un PJ, dans le cas où certains attributs du PNJ sont calculés à partir d'autres attributs du PJ.

Pour ce faire, il faut indiquer le nom **exact** du PJ dans le PNJ est le compagnon, puis définir une expression pour le calcul des attributs du PNJ, en spécifiant le nom d'un attribut du PJ dont il dépend entre [ ]. Comme il s'agit d'expressions mathématiques, la multiplication est représentée par le signe <kbd>*</kbd> et la division par le signe <kbd>/</kbd>.

_Exemple : Loup (rôdeur)_

- Défense : <kbd>12 + [rang_voie?]</kbd> 
  
  _En remplaçant ? par le no de la voie du compagnon animal_

- Vigueur : <kbd>[niveau]*4</kbd>
- Initiative : <kbd>[init]</kbd>
- Attaque : <kbd>[atkmag]</kbd>

## Importer un statblock

Cette section dépliable permet d'importer les données techniques du PNJ en copiant un statblock depuis un document PDF. Le bouton <kbd>Importer</kbd> analyse le texte collé dans le champ de texte, et en extrait les données utilisables.

---

[Retour]({{ site.baseurl }}/npc-main)