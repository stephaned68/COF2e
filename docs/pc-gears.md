# Equipements

Cette section permet de tenir à jour l'inventaire du matériel possédé par le personnage.

Pour chaque élément de l'inventaire, vous indiquez :
- Le nom de la pièce d'équipement.
- Sa valeur d'encombrement (qui n'est utilisée que si la règle optionnelle d'encombrement est active).
- Le nombre de pièces d'équipement de ce type actuellement possédées par le PJ.
- Si l'équipement est actuellement porté (case à cocher).

Une section dépliante permet d'ajouter plus de détail :
- Un description plus longue de l'équipement.
- Une liste de propriétés (cf ci-dessous).
- Si cet équipement correspond à une arme pour laquelle un ligne d'attaque doit être ajoutée sur l'onglet [attributs](({{ site.baseurl }}/pc-attribs)).

## Propriétés d'équipement

Pour chaque pièce d'équipement, vous pouvez indiquer une liste de propriétés qui peuvent modifier d'autres sections de la fiche.

Cette liste de propriétés est à indiquer dans le champ de texte, une propriété/valeur par ligne.

La syntaxe de cette liste est la même que pour les [prédicats]({{ site.baseurl }}/pc-script).

Les codes et valeurs correspondantes que vous pouvez indiquer sont :

- Pour les armes :
  - <kbd>critique</kbd> : seuil de réussite critique
  - <kbd>dm-1m</kbd> : jet de DM quand l'arme est maniée à une main
  - <kbd>dm-2m</kbd> : jet de  DM quand l'arme est maniée à deux mains
  - <kbd>type-dm</kbd> : type de DM
  - <kbd>portee</kbd> : portée de l'arme à distance
- Pour les protections (armures et boucliers) :
  - <kbd>bonus-def</kbd> : bonus apporté à la DEF par l'armure ou le bouclier
  - <kbd>armure</kbd> : bonus apporté à la DEF par l'armure
  - <kbd>bouclier</kbd> : bonus apporté à la DEF par le  bouclier
  - <kbd>agi-max</kbd> : valeur maximum d'AGI pour port de l'armure

## Equipement lié à la défense

Si vous cochez la case <kbd>Equipment porté</kbd> d'une armure ou d'un bouclier ou d'un casque, tout autre équipement de même nature qui était précédemment coché est décoché (une seule pièce portée à la fois), et les paramètres de calcul de la Défense sont automatiquement mis à jour à partir des propriétés.

Si aucune armure, aucun bouclier ou aucun casque n'est porté, la case correspondante de la Défense est décochée.

### Détermination de la nature de l'équipement

- Une pièce d'équipement est une armure
  - si elle a une propriété <kbd>armure</kbd> avec son bonus
  - ou si elle a une propriété <kbd>bonus-def</kbd> et que son nom ne contient pas le mot <kbd>bouclier</kbd>
- Une pièce d'équipement est un bouclier
  - si elle a une propriété <kbd>bouclier</kbd> avec son bonus
  - ou si elle a une propriété <kbd>bonus-def</kbd> et que son nom contient le mot <kbd>bouclier</kbd>
- Une pièce d'équipement est un casque si elle a une propriété <kbd>casque</kbd> avec sa RD

## Equipement lié à une attaque

Si vous cochez la case <kbd>A une attaque</kbd>, une ligne d'attaque est automatiquement ajoutée à la liste des attaques/armes du PJ. Elle est supprimée de cette liste si vous décochez la case.

La ligne d'attaque est créée en fonction des propriétés d'équipement que vous avez indiqué pour l'arme.

# Ressources

Dans cette section, vous pouvez renseigner une liste de ressources ou de consommables.

Pour chaque élément de la liste, vous indiquez :
- Le nom de la ressource,
- Le nombre actuellement en possession du PJ.

# Equipement divers et notes

Ces deux zones de saisie libre permettent d'enregistrer des détails supplémentaires sur le PJ.

---

[Retour]({{ site.baseurl }}/pc-main)