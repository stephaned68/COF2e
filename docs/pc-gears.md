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

Cette liste de propriétés se présente sous la forme d'une suite d'élements séparés les uns des autres par des virgules. Chaque élément est lui-même constitué d'un code de propriété et d'une valeur, séparés par <kbd>:</kbd> et un espace.

<kbd>code: valeur,code: valeur,code: valeur</kbd>

Les codes et valeurs correspondantes que vous pouvez indiquer sont :
- <kbd>critique:</kbd> seuil de réussite critique
- <kbd>dm-1m:</kbd> jet de DM quand l'arme est maniée à une main
- <kbd>dm-2m:</kbd> jet de  DM quand l'arme est maniée à deux mains
- <kbd>type-dm:</kbd> type de DM
- <kbd>bonus-def:</kbd> bonus apporté à la DEF par l'armure
- <kbd>portee:</kbd> portée de l'arme à distance

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