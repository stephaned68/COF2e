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

---

[Retour]({{ site.baseurl }}/pc-main)