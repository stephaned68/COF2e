# Voies et capacités

La convention adoptée dans la fiche COF 2E est la suivante :
- La voie n°1 est la voie de peuple,
- Les voies n°2 à 6 sont les voies de profil,
- Les voies n°7 et 8 sont la ou les voies de prestige.

Cet onglet de la fiche de personnage présente deux vues (_Affichage_ et _Edition_), une case à cocher permet de basculer d'un mode à l'autre.

## Mode Edition

Pour chaque voie, vous indiquez :
- Le nom de la voie,
- Pour chacun des 5 rangs :
  - Le nom de la capacité,
  - S'il s'agit d'un sort (pour le calcul des PM maximum du PJ),
  - La description de la capacité.

## Mode Affichage

Les informations saisies en mode _Edition_ sont reprises mais non modifiables dans cet vue.

Pour chaque rang :
- Une case à cocher permet d'indiquer si la capacité est possédée ou non (permet le calcul du rang du PJ dans ses voies),
- Une icone permet d'afficher le texte de la capacité dans le chat Roll20.

Le texte de la capacité est transformé par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

# Jets de capacités

Ce sous-onglet permet de lister des jets liés aux capacités du PJ. Pour chaque jet, vous pouvez indiquer :
- Le nom de la capacité
- Le jet de dé correspondant :
  - Soit un jet de d20 normal, soit un jet avec _dé bonus_ ou _dé malus_, soit un autre type de jet.
  - Le score de caractéristique éventuel à ajouter au jet. L'option _Demander_ permet d'afficher un popup Roll20 pour choisir la caractéristique selon les circonstances.
  - La voie dont le rang doit être ajouté au jet s'il y a lieu.
  - Un bonus fixe (_+2 pour les voies de profil, +3 pour les voies de peuple, +5 pour les voies de prestige_).
- Une description ou un jet spécial
  - Avant envoi dans le chat, cette description est transformée par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

# Jets de compétences

Ce sous-onglet n'apparaît que si la règle optionnelle est activée dans l'onglet _Configuration_ de la fiche.

- Cliquez sur le nom de la compétence pour faire un jet dans le chat Roll20.
- La caractéristique la plus souvent utilisée est indiquée par défaut mais vous pouvez la changer selon les circonstances. La dernière caractéristique utilisée pour chaque jet de compétence est sauvegardée.
- Le choix _Demander_ permet d'afficher un popup Roll20 pour sélectionner la caractéristique au moment du jet.
- Indiquez le bonus de compétence qui s'ajoute au jet.

# Buffs / Debuffs

Ce sous-onglet permet de créer une liste de buffs / debuffs, c'est à dire des bonus ou malus obtenus par certaines capacités ou circonstances, qui peuvent s'ajouter de manière temportaire ou permanente à certains attributs du PJ.

Pour chaque élément de la liste, vous pouvez indiquer :
- Si le buff est actif ou pas (case à cocher).
- Le nom ou origine du buff.
- L'attribut auquel ce buff s'applique :
  - Une caractéristique (_AGI_, _CON_, etc)
  - Un score de combat (Initiative, Attaques, Défense)
  - Une ressource (PV, DR, PM, PC)
- La valeur du buff, qui peut s'exprimer :
  - Comme une valeur fixe, par exemple <kbd>+1</kbd>, <kbd>-2</kbd>
  - Comme le score d'un autre attribut, en référençant celui-ci entre crochets, par exemple <kbd>[CHA]</kbd>
  - Comme un rang dans une voie, en référençant celle-ci par son n° ou son nom, sous la forme <kbd>[rang n]</kbd> ou <kbd>[rang voie n]</kbd> ou <kbd>[rang Nom De La Voie]</kbd>

Plusieurs buffs peuvent s'appliquer au même attribut du PJ. Si c'est le cas, le total des buffs actuellement actifs (cochés) est calculé.

Une section dépliable _Détail par attribut_ permet de consulter la liste des buffs actuellement appliqués à chaque attribut et leur somme.

# Jets en ligne (inline-Rolls)

Avant d'être envoyé dans le chat, les descriptions des capacités sont analysées et des cartains motifs de texte sont remplacés par des jets en ligne (_in-line rolls_) :
- <kbd>[AGI]</kbd>, <kbd>[CON]</kbd>, <kbd>[FOR]</kbd>, etc... sont remplacés par le score de la caractéristique correspondante.
- <kbd>[{nombre} +/- XXX]</kbd>, où <kbd>XXX</kbd> est un nom de  caractéristique, sont remplacés par le résultat du calcul.
- <kbd>[rang n]</kbd>, <kbd>[rang voie n]</kbd> et <kbd>[rang Nom De La Voie]</kbd> sont remplacés par la valeur du rang dans la voie correspondante.
- <kbd>Nd4°</kbd> est remplacé par un jet du nombre <kbd>N</kbd> de dés évolutifs.
- <kbd>[Nd4° + XXX]</kbd> est remplacé par un jet du nombre <kbd>N</kbd> de dés évolutifs auquel le score de la caractéristique <kbd>XXX</kbd> (_AGI_, _CHA_ etc...) est ajouté.
- Les formules de dés sont remplacés par le jet correspondant. Exemple : <kbd>1d10</kbd>, <kbd>2d6+6</kbd>, <kbd>1d8 + 2</kbd>...

Si vous connaissez le langage de macro de Roll20, vous pouvez indiquer ces inline-rolls vous-même dans le texte de la capacité.

Exemples : 

<kbd>[[1d8 + @{for}]]</kbd> pour lancer un d8 et ajouter le score de Force du personnage.

<kbd>[[1d@{drecup} + floor(@{niveau}/2)]]</kbd> pour lancer un dé de récupération et ajouter la moitié du niveau du PJ arrondi à l'entier inférieur.

<kbd>[[?{Nombre de dés ?}@{devol}]]</kbd> pour demander un nombre de dés évolutifs à lancer.
