# Equipements

Cette section permet de tenir à jour l'inventaire du matériel possédé par le PNJ.

Le trésor affiché est la somme de toutes les pièces dans la bourse du PNJ, convertie en pièces d'argent ou en pièce d'or selon le type de monnaie sélectionnée.

Pour chaque élément de l'inventaire, vous indiquez :
- Le nom de la pièce d'équipement,
- Le nombre de pièces d'équipement de ce type actuellement possédées par le PNJ.

Une section dépliante permet d'ajouter plus de détail :
- Un description plus longue de l'équipement,
- Une liste de propriétés. Voir [Equipement PJ](({{ site.baseurl }}/pc-gears)) pour plus de détail.

Une icone "bulle" permet d'afficher dans le chat Roll20 un message descriptif de l'objet avec la liste éventuelle de ses propriétés. Ce message est **toujours** public même si la fiche du PNJ est configurée pour chuchoter les messages au MJ.

Les propriétés indiquées pour l'équipement ne modifient pas les différents scores du PNJ qui sont données dans le statblock. Elles sont toutefois copiées dans la fiche d'un personnage en cas de _loot_.

## Fonctions _Loot_

Si le script ChatSetAttr est installé dans la partie et que l'option de configuration correspondante est active, un bouton est ajouté dans ce message de chat afin qu'un joueur puisse cliquer et ajouter cet objet à l'inventaire de son personnage.

# Ressources

Dans cette section, vous pouvez renseigner une liste de ressources et de consommables.

Pour chaque élément de la liste, vous indiquez :
- Le nom de la ressource,
- Le nombre actuellement en possession du PNJ,
- Une liste optionnelle de propriétés permettant de préciser la nature de la ressource.

Un bouton permet de décompter une resource et éventuellement d'envoyer un message dans le chat Roll20 selon le type de consommable.

Si vous spécifiez une propriété `type: soins`, et que vous cliquez sur le bouton _Consommable_, un message de chat indiquant le nombre de PV récupérés s'affiche. Par défaut, il s'agit d'une potion de soins standard permettant de récupérer 1d4° PV. Vous pouvez si besoin indiquer une formule de dés différente à la suite du mot `soins`. _Ex :_ : pour paramétrer les Elixirs de guérison du Forgesort, indiquez `type: soins [2d4°+INT]`.

_NB :_

_La gestion simplifiée des munitions de la fiche de PJ n'existe pas dans la fiche de PNJ. Par conséquent, si vous spécifiez une propriété `type: munitions`, cela n'aura aucun effet sur les attaques du PNJ._

# Munitions

Cette section n'apparait que si le script **COFantasy2** est installé dans la partie.

Elle est identique à celle présente sur la fiche de PJ.

---

[Retour]({{ site.baseurl }}/npc-main)