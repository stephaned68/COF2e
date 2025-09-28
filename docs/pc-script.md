# Script COFantasy2

Le contenu de cet onglet n'est affiché que si le script MOD COfantasy2 est installé dans la partie.

## Options

L'option _Renuméroter les attaques_ permet que les attaques du personnage soient renumérotées selon l'ordre dans lequel elles apparaissent dans l'onglet _Attributs_. Les macros utilisant les anciens nos d'attaque devront bien sûr être re-configurées.

## Listes d'actions

Cette section permet de créer jusqu'à 5 listes d'actions.

La première liste est toujours "Actions du tour". Les listes n° 2 à 5 peuvent être nommée individuellement.

Pour chaque action, vous indiquez :
- Si l'action est active ou pas
- Le nom de l'action
- Un type d'action (Gratuite/Mouvement/Attaque/Limitée)
- La commande de script à lancer pour réaliser l'action

## Prédicats

Un champs de texte libre permet de saisir la liste des prédicats pour le personnage.

### Syntaxe des prédicats

Chaque ligne de prédicat est constituée d'un code et d'une valeur, séparés par <kbd>:</kbd> et d'un nombre quelconque d'espaces.

La ligne doit forcément comporter un <kbd>:</kbd> pour que la partie à gauche soit prise en compte comme un prédicat ou une propriété. Si l'option est de type vrai/faux (booléen), indiquez simplement un espace après <kbd>:</kbd>.

Les lignes vides ou commençant par <kbd>//</kbd> (pour insérer un texte de commentaire) sont autorisées mais non traitées.

## Autres scripts MOD

La fiche COF2 peut interagir avec d'autres scripts MOD disponibles dans la bibliothèque Roll20.

Il est nécessaire de disposer d'un compte payant <strong>Pro</strong> pour pouvoir utiliser les scripts MOD.

### TokenMod

Ce script permet de modifier les propriétés d'un token grâce à des commandes de chat Roll20.

L'option <em>Players can use --ids</em> doit être activée dans la configuration du script pour que les joueurs puissent interagir avec le token de leur personnage.

Lorsque le script est activé, trois boutons sont affichés sous le token du personnage dans l'entête de la fiche.
- <kbd>-</kbd> permet de diminuer la taille du token de 10%
- <kbd>🗸</kbd> permet de lier les barres du token aux attributs de la fiche (cf Liaison par défaut)
- <kbd>⤧</kbd> permet d'appliquer un coefficient multiplicateur à la taille actuelle du token
- <kbd>-</kbd> permet d'augmenter la taille du token de 10%

D'autres options peuvent être activées :
- Marker 0 PV : permet d'indiquer un nom de marker à appliquer au token lorsque le nombre de PV tombe à 0.
  
  Le nom par défaut de ce marker est <kbd>dead</kbd> et il affiche une croix rouge sur le token.

- Teinte 1/2 PV : permet d'indiquer une teinte à appliquer au token lorsque le nombre de PV tombe à la moitié du nombre de PV maximum.

  La teinte doit être indiquée sous la forme d'un code hexadécimal à 6 caractères (0-9, A-F). La valeur par défaut est ED2939.

- Marker PC : permet d'indiquer un nom de marker à appliquer au token avec un compteur correspondant au nombre de points de chance restants.

  Le nom par défaut de ce marker est <kbd>three-leaves</kbd>, il affiche 3 feuilles et le nombre de PC. Il est mis à jour à l'ouverture de la fiche et quand un PC est utilisé.

- Markers états préjudiciables : permet d'ajouter et retirer des markers selon les états préjudiciables subis par le personnage.

  Les markers de base des états préjudiciables doivent être nommés <kbd>cof-affaibli</kbd>, <kbd>cof-aveugle</kbd>, <kbd>cof-essoufle</kbd>, <kbd>cof-etourdi</kbd>, <kbd>cof-immobilise</kbd>, <kbd>cof-invalide</kbd>, <kbd>cof-paralyse</kbd>, <kbd>cof-ralenti</kbd>, <kbd>cof-renverse</kbd>, <kbd>cof-surpris</kbd>. Si vous jouez avec l'option Low-Fantasy de Peur, deux markers supplémentaires <kbd>cof-effraye</kbd> et <kbd>cof-panique</kbd> sont nécessaires.

#### Liaison par défaut des barres de tokens

1. 🟢 : Points de Mana courant/max (si le personnage en dispose)
2. 🔵 : Défense
3. 🔴 : Points de Vigueur courants/max

### ChatSetAttr

Ce script permet d'ajouter, de modifier ou de supprimer des attributs d'une fiche de personnage grâce à des commandes de chat Roll20.

Ce script est utilisé par les fonctions de _Loot_ de la fiche de personnage.

---

[Retour]({{ site.baseurl }}/pc-main)