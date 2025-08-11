# Equipements

Cette section permet de tenir à jour l'inventaire du matériel possédé par le personnage.

Le trésor affiché est la somme de toutes les pièces dans la bourse du personnage. Selon l'option choisie, cette somme est convertie en pièces d'argent ou en pièces d'or.

Pour chaque élément de l'inventaire, vous indiquez :
- Le nom de la pièce d'équipement.
- Sa valeur d'encombrement (qui n'est utilisée que si la règle optionnelle d'encombrement est active).
- Le nombre de pièces d'équipement de ce type actuellement possédées par le PJ.
- Si l'équipement est actuellement porté (case à cocher).

Une section dépliante permet d'ajouter plus de détail :
- Un description plus longue de l'équipement.
- Une liste de propriétés (cf ci-dessous).
- Si cet équipement correspond à une arme pour laquelle un ligne d'attaque doit être ajoutée sur l'onglet [attributs](({{ site.baseurl }}/pc-attribs)).
- Une liste de prédicats si l'équipement est porté.

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
  - <kbd>lancer</kbd> : portée de l'arme lancée
  - <kbd>usure</kbd> : seuil d'usure
- Pour les protections (armures et boucliers) :
  - <kbd>bonus-def</kbd> : bonus apporté à la DEF par l'armure ou le bouclier
  - <kbd>armure</kbd> : bonus apporté à la DEF par l'armure
  - <kbd>armure-malus</kbd> : malus à l'AGI de l'armure portée
  - <kbd>bouclier</kbd> : bonus apporté à la DEF par le bouclier
  - <kbd>bouclier-malus</kbd> : malus à l'AGI du bouclier porté
  - <kbd>casque</kbd> : RD du casque contre les DM critiques
  - <kbd>casque-malus</kbd> : malus à la PER & Init du casque porté
  - <kbd>agi-max</kbd> : valeur maximum d'AGI pour port de l'armure
- Pour les armes magiques :
  - <kbd>bonus-magique</kbd> : valeur du bonus au jet pour toucher et DM
  - <kbd>magique-att</kbd> : valeur du bonus magique au jet pour toucher
  - <kbd>magique-dm</kbd> : valeur du bonus magique aux DM (peut être un jet de dé)
  - <kbd>affutee</kbd> : pour réduire de 1 le seuil de critique et ajouter 1d4° DM en cas de coup critique
  - <kbd>element</kbd> : nom d'élément/substance pour ajouter une ligne de 1d4° DM élémentaires (2d4° si le nom de l'élément est suivi d'un espace et du mot <kbd>intense</kbd>)
  - <kbd>fleau</kbd> : nom d'un type de créature pour que Roll20 demande confirmation lors de l'attaque et qu'une ligne de 1d4° DM soit ajoutée si la créature ciblée est du même type

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

Si l'arme possède la propriété <kbd>lancer</kbd>, la fiche crée deux lignes d'attaque : une pour le maniement au contact et une pour le lancer.

# Ressources

Dans cette section, vous pouvez renseigner une liste de ressources ou de consommables.

Pour chaque élément de la liste, vous indiquez :
- Le nom de la ressource,
- Le nombre actuellement en possession du PJ,
- Une liste optionnelle de propriétés permettant de préciser la nature de la ressource.

Si vous spécifiez une propriété <kbd>type</kbd> avec la valeur <kbd>munitions</kbd>, la fiche recherche dans les armes une ligne dont le type d'attaque est _Trait_ et dont le nom de munition correspond au nom de la ressource. Elle établit la relation entre les deux éléments pour décrémenter la ressource à chaque attaque et afficher un message d'avertissement lorsque le personnage est à court de munitions.

# Munitions

Cette section n'apparait que si le script **COFantasy2** est installé dans la partie.

Elle permet de gérer une liste de munitions spéciales de manière plus détaillée que le suivi des munitions simplifié intégré de base à la fiche.

Pour chaque élément de la liste, vous indiquez :
- Le nom de la munition
- Son type (et donc le type d'arme susceptible de l'utiliser)
- Les quantités possédées courantes et maximum
- Le taux de perte de la munition une fois utilisée
- Les effets particuliers de la munition, exprimés comme une liste de mots-clefs
- Des effets étendus, exprimés avec la même syntaxe que les options d'attaque

# Equipement divers et notes

Ces deux zones de saisie libre permettent d'enregistrer des détails supplémentaires sur le matériel du PJ.

---

[Retour]({{ site.baseurl }}/pc-main)