# Voies et capacités

La convention adoptée dans la fiche COF 2E est la suivante :
- La voie n°1 est la voie de peuple ou du mage,
- Les voies n°2 à 6 sont les voies de profil,
- Les voies n°7 et 8 sont la ou les voies de prestige.

|        |        |        |
| ------ | ------ | ------ |
| Voie 1 | Voie 2 | Voie 3 |
| Voie 4 | Voie 5 | Voie 6 |
| Voie 7 | Voie 8 | Voie 9 |


Cet onglet de la fiche de personnage présente deux vues, les textes cliquables _Affichage_ et _Edition_ permettent de basculer d'un mode à l'autre.

## Mode Edition

Pour chaque voie, vous indiquez :
- Le nom de la voie,
- Le nombre de PV correspondant à la famille de profil pour cette voie (ce nombre est normalement inséré automatiquement si le nom de la voie est reconnu)
- Pour chacun des 5 rangs :
  - Le nom de la capacité,
  - S'il s'agit d'un sort (pour le calcul des PM maximum du PJ),
  - La description de la capacité,
  - Le nombre d'utilisation maximum s'il y a lieu,
  - La fréquence à laquelle ce nombre d'utilisation se renouvelle,
  - Un paramètre optionnel, 
  
    _Exemples d'utilisation :_
    - _Nom de la fiche de PNJ du compagnon (rôdeur, chevalier, etc...)_
    - _Précision sur la capacité (type d'arme pour la voie du maître d'armes)_

  - Une liste de propriétés optionnelles, principalement utilisées par le script MOD COFantasy2.
  
    La syntaxe de cette liste est la même que pour les [prédicats]({{ site.baseurl }}/pc-script).

    Voir le paragraphe _Propriétés des capacités_ ci-dessous pour les propriétés de capacités supportées par la fiche

- Une icône située à côté des PV de voie permet d'importer la liste des capacités à partir du texte collé dans le sous-onglet Import.

## Mode Affichage

Les informations saisies en mode _Edition_ sont reprises mais non modifiables dans cet vue.

Pour chaque rang :
- Une case à cocher permet d'indiquer si la capacité est possédée ou non (permet le calcul du rang du PJ dans ses voies),
- Une icone permet d'afficher le texte de la capacité dans le chat Roll20.
  - Si cette capacité a un nombre d'utilisations maximum configuré, cliquer sur ce bouton en compte une.
  - Si le nombre d'utilisations est dépassé, une alerte s'affiche dans le chat plutôt que le texte de la capacité.
- Le nombre de fois où cette capacité a été utilisée peut être modifié manuellement. La fréquence de renouvellement est affichée.

Le texte de la capacité est transformé par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

Deux icônes sont situées à côté de **Editer** :
- L'icône _Horloge_ permet de ré-initialiser le nombre d'utilisation des capacités pour un type de fréquence donné (_ex : pour ré-initialiser toutes les capacités "par jour" à la fin d'une récupération longue_).
- L'icône _Options_ permet d'afficher un menu d'action dans le chat avec un bouton pour chaque voie. Chacun de ces boutons affiche ensuite un sous-menu avec un bouton d'action pour chaque capacité possédée dans cette voie.

Une troisième icone est affichée si le personnage possède au moins un sort (et donc dispose d'une valeur maximum de Points de Mana). Ce bouton permet d'appliquer la règle de Concentration accrue à l'utilisation d'une capacité de sort.

## Propriétés des capacités

Les propriétés suivantes peuvent être appliquées aux capacités :

- <kbd>fx:</kbd> suivi du nom d'un effet spécial et d'un nombre éventuel de répétitions pour que la fiche joue un FX Roll20 (commande <kbd>/fx</kbd>) lorsque la capacité est utilisée.
- <kbd>pm:</kbd> suivi d'un chiffre pour faire varier le nombre de PM consommés par cette capacité. Ce chiffre peut être absolu (<kbd>3</kbd> pour consommer 3 PM) ou relatif (<kbd>-1</kbd> pour consommer 1 PM de moins que la normale)
- <kbd>evol: base rang1 evol1 rang2 evol2</kbd> suivi de 3 à 5 valeurs séparées par des espaces
  - <kbd>base</kbd> est la valeur de base du paramètre évolutif (à l'acquisition de la capacité)
  - <kbd>rang1</kbd> est le premier rang auquel la capacité évolue
  - <kbd>evol1</kbd> est la nouvelle valeur du paramètre évolutif une fois le rang1 spécifié atteint
  - <kbd>rang2</kbd> (facultatif) est le deuxième rang auquel la capacité évolue
  - <kbd>evol2</kbd> (facultatif) est la nouvelle valeur du paramètre évolutif une fois le rang2 spécifié atteint
  
  Le texte de la capacité doit comporter le mot-clé <kbd>&#123;&#123;evol&#125;&#125;</kbd> là où la substitution avec la valeur de base ou la nouvelle valeur s'effectue selon le rang atteint.

# Jets de capacités

Ce sous-onglet permet de lister des jets liés aux capacités du PJ. Pour chaque jet, vous pouvez indiquer :
- Un nom
- Le jet de dé correspondant :
  - Soit un jet de d20 normal, soit un jet avec _dé bonus_ ou _dé malus_, soit un autre type de jet.
  - Le score de caractéristique éventuel à ajouter au jet. L'option _Demander_ permet d'afficher un popup Roll20 pour choisir la caractéristique selon les circonstances.
  - La voie dont le rang doit être ajouté au jet s'il y a lieu.
  - Un bonus fixe (_+2 pour les voies de profil, +3 pour les voies de peuple, +5 pour les voies de prestige_).
- Une description ou un jet spécial
  - Si cette description est vide mais que le nom du jet correspond au nom d'une capacité possédée par le personnage, le texte de cette capacité est récupéré s'il est renseigné.
  - Avant envoi dans le chat, cette description est transformée par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

L'icone située à côté de **Nom** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de capacité.

Le bouton d20 du jet peut être épinglé dans la barre d'actions de Roll20 par glisser-déposer.

# Maîtrises

Ce sous-onglet permet d'indiquer les langues maîtrisées par le personnage.

On peut également y noter des maîtrises spécifiques d'armes et d'armures sous forme de champ de texte libre.

# Jets de compétences

Ce sous-onglet n'apparaît que si la règle optionnelle est activée dans l'onglet _Configuration_ de la fiche.

- Cliquez sur le nom de la compétence pour faire un jet dans le chat Roll20.
- La caractéristique la plus souvent utilisée est indiquée par défaut mais vous pouvez la changer selon les circonstances.
- Le choix _Demander_ permet d'afficher un popup Roll20 pour sélectionner la caractéristique au moment du jet.
- Indiquez le bonus de compétence qui s'ajoute au jet.

# Buffs / Debuffs

Ce sous-onglet permet de créer une liste de buffs / debuffs, c'est à dire des bonus ou malus obtenus par certaines capacités ou circonstances, qui peuvent s'ajouter de manière temporaire ou permanente à certains attributs du PJ.

Pour chaque élément de la liste, vous pouvez indiquer :
- Si le buff est actif ou pas (case à cocher)
- Le nom ou origine du buff
- L'attribut auquel ce buff s'applique :
  - Une caractéristique (_AGI_, _CON_, etc)
  - Un score de combat (Initiative, Attaques, Défense, DM)
  - Une ressource (PV, DR, PM, PC)
- La valeur du buff, qui peut s'exprimer :
  - Comme une valeur fixe, par exemple <kbd>+1</kbd>, <kbd>-2</kbd>
  - Comme la valeur d'un autre attribut, en référençant celui-ci entre crochets, par exemple <kbd>[CHA]</kbd>
  - Comme le niveau du personnage, en le référençant sous la forme <kbd>[niveau]</kbd>
  - Comme le rang dans une voie, éventuellement ajusté d'un bonus <kbd>X</kbd>, en référençant celle-ci sous l'une des formes suivantes :
    - <kbd>[rang voie N]</kbd> ou <kbd>[rang voie N] + X</kbd> pour la voie no <kbd>N</kbd>
    - <kbd>[rang nom]</kbd> ou <kbd>[rang nom] + X</kbd> pour la voie <kbd>nom</kbd>
  - Comme une expression de dés (principalement pour les buffs aux DM)

Plusieurs buffs peuvent s'appliquer au même attribut du PJ. Si c'est le cas, le total des buffs actuellement actifs (cochés) est calculé.

Dans le cas d'un buff aux DM, celui-ci s'applique à tous les jets d'attaque effectuées à partir du moment où il est actif. Il est possible de le rendre optionnel en indiquant un <kbd>?</kbd> au début de son nom. La fiche demandera alors si ce buff s'applique quand un jet d'attaque est effectué.

Une section dépliable _Détail par attribut_ permet de consulter la liste des buffs actuellement appliqués à chaque attribut et leur somme.

# Import

Ce sous-onglet permet de coller le texte d'une voie copié depuis le PDF des règles. 

Il suffit ensuite de cliquer sur le bouton d'import de la voie pour insérer le texte des capacités dans la fiche de personnage.
- La voie en question est remplie avec le texte copié, toutes les données précédemment saisies sont **écrasées** !
- La première ligne du texte doit être le nom de la voie, l'import efface le préfixe (_"Voie du..."_, _"Voie de la ..."_, etc...)
- Une ligne qui commence par un chiffre et se termine par <kbd>:</kbd> marque le nom d'une capacité, les lignes suivantes sont rassemblées pour former la description.
- Cette description est analysée pour trouver des références à un nombre d'utilisations limité (ex : _"une fois par combat, ..."_)
- Si le nom d'une capacité comporte un astérisque <kbd>*</kbd>, celle-ci est considérée comme un sort

# Jets en ligne (Inline-Rolls)

Avant d'être envoyé dans le chat, les descriptions des capacités sont analysées et des cartains motifs de texte sont remplacés par des jets en ligne (_in-line rolls_) :
- <kbd>[AGI]</kbd>, <kbd>[CON]</kbd>, <kbd>[FOR]</kbd>, etc... sont remplacés par le score de la caractéristique correspondante.
- <kbd>[nombre +/- XXX]</kbd>, où <kbd>XXX</kbd> est un nom de caractéristique, sont remplacés par le résultat du calcul.
- <kbd>[rang voie N]</kbd> est remplacé par la valeur du rang dans la voie indiquée par N.
- <kbd>Nd4°</kbd> ou <kbd>NdE</kbd> est remplacé par un jet du nombre <kbd>N</kbd> de dés évolutifs.
- <kbd>[Nd4° + XXX]</kbd> ou <kbd>[NdE + XXX]</kbd> est remplacé par un jet du nombre <kbd>N</kbd> de dés évolutifs auquel le score de la caractéristique <kbd>XXX</kbd> (_AGI_, _CHA_ etc...) est ajouté.
- Les formules de dés sont remplacés par le jet correspondant. Exemple : <kbd>1d10</kbd>, <kbd>2d6+6</kbd>, <kbd>1d8 + 2</kbd>...

Si vous connaissez le langage de macro de Roll20, vous pouvez indiquer ces inline-rolls vous-même dans le texte de la capacité.

Exemples : 

<kbd>[[1d8 + @{for}]]</kbd> pour lancer un d8 et ajouter le score de Force du personnage.

<kbd>[[1d@{drecup} + floor(@{niveau}/2)]]</kbd> pour lancer un dé de récupération et ajouter la moitié du niveau du PJ arrondi à l'entier inférieur.

<kbd>[[?{Nombre de dés ?}@{devol}]]</kbd> pour demander un nombre de dés évolutifs à lancer.

---

[Retour]({{ site.baseurl }}/pc-main)