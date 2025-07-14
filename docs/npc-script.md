# Script COFantasy2

Le contenu de cet onglet n'est affiché que si le script MOD COfantasy2 est installé dans la partie.

## Options

L'option _Renuméroter les attaques_ permet que les attaques du PNJ soient renumérotées selon l'ordre dans lequel elles apparaissent dans l'onglet _Attributs_. Les macros utilisant les anciens nos d'attaque devront bien sûr être re-configurées.

## Listes d'actions

Cette section permet de créer jusqu'à 4 listes d'actions. Chaque liste peut être nommée.

Pour chaque action, vous indiquez :
- Si l'action est active ou pas
- Le nom de l'action
- Un type d'action (Gratuite/Mouvement/Attaque/Limitée)
- La commande de script à lancer pour réaliser l'action

## Prédicats

Un champs de texte libre permet de saisir la liste des prédicats pour le personnage.

### Syntaxe des prédicats

Chaque ligne de prédicat est constituée d'un code et d'une valeur, séparés par <kbd>:</kbd> et d'un nombre quelconque d'espaces.

La ligne peut ne comporter qu'un code sans <kbd>:</kbd> ni valeur, pour activer une option booléenne.

Les lignes vides ou commençant par <kbd>//</kbd> (pour insérer un texte de commentaire) sont autorisées mais non traitées.

## Autres scripts MOD

La fiche COF2 peut interagir avec d'autres scripts MOD disponibles dans la bibliothèque Roll20.

Il est nécessaire de disposer d'un compte payant <strong>Pro</strong> pour pouvoir utiliser les scripts MOD.

### TokenMod

Ce script permet de modifier les propriétés d'un token grâce à des commandes de chat Roll20.

Lorsque le script est activé, trois boutons sont affichés sous le token du PNJ dans l'entête de la fiche.
- <kbd>-</kbd> permet de diminuer la taille du token de 10%
- <kbd>🗸</kbd> permet de lier les barres du token aux attributs de la fiche (cf Liaison par défaut)
- <kbd>-</kbd> permet d'augmenter la taille du token de 10%

D'autres options peuvent être activées :
- Marker 0 PV : permet d'indiquer un nom de marker à appliquer au token lorsque le nombre de PV tombe à 0.

#### Liaison par défaut des barres de tokens

2. 🔵 : Défense
3. 🔴 : Valeur des points de Vigueur courants/max (mook)

---

[Retour]({{ site.baseurl }}/npc-main)