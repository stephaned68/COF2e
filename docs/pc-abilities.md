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
  - Le nombre d'utilisations maximum s'il y a lieu,
  - La fréquence à laquelle ce nombre d'utilisations se renouvelle (une liste avec combat / jour / aventure est proposée, mais il est possible de saisir librement une autre valeur),
  - Un paramètre optionnel, principalement utilisé par le script MOD COFantasy2.
  
    _Exemples d'utilisation :_
    - _Nom de la fiche de PNJ du compagnon (rôdeur, chevalier, etc...)_
    - _Précision sur la capacité (type d'arme pour la voie du maître d'armes)_

  - Une liste de propriétés optionnelles, principalement utilisées par le script MOD COFantasy2.
  
    La syntaxe de cette liste est la même que pour les [prédicats]({{ site.baseurl }}/pc-script).

    Voir le paragraphe _Propriétés des capacités_ ci-dessous pour des propriétés de capacités prises en charge directement par la fiche

- Une icône située à côté des PV de voie permet d'importer la liste des capacités à partir du texte collé dans le sous-onglet Import.

### Plusieurs capacités par rang

Certaines voies de prestige permettent l'acquisition de plusieurs capacités pour chaque rang obtenu dans la voie (exemple : _Voie du maître des sorts_).

Pour les paramétrer, vous devez indiquer le nom de chaque capacité précédé de `--`, puis la description de la capacité sur les lignes suivantes.

Lorsque le bouton d'utilisation est cliqué, la fiche demande de choisir la capacité dont le nom et la description sont à afficher dans le chat Roll20.

_Exemple :_

Quand le personnage acquiert la capacité de rang 4 _Arcanes inférieures_ de la _voie du maître des sorts_ et qu'il décide d'apprendre les sorts _Murmures dans le vent_ et _Chant des héros_, il doit les indiquer de la manière suivante dans le texte de la capacité :

```
-- Murmures dans le vent
L'ensorceleur chuchote ...
-- Chant des héros
Le barde peut chanter ...
```

## Mode Affichage

Les informations saisies en mode _Edition_ sont reprises mais non modifiables dans cet vue.

Pour chaque rang :
- Une case à cocher permet d'indiquer si la capacité est possédée ou non (permet le calcul du rang du PJ dans ses voies),
- Une icone permet d'afficher le texte de la capacité dans le chat Roll20.
  - Si cette capacité a un nombre d'utilisations maximum configuré, cliquer sur ce bouton en décompte une.
  - Si le nombre d'utilisations est dépassé, une alerte s'affiche dans le chat plutôt que le texte de la capacité.
- Le nombre d'utilisations restantes de la capacité peut être modifié manuellement. La fréquence de renouvellement est affichée.
- Si la capacité est un sort, le nombre de points de mana nécessaire est décompté du maximum. Si le personnage n'a plus assez de PM, la fiche calcule et affiche le nombre de PV perdus en cas d'utilisation de la _Brûlure de Mana_.

_Le nombre d'utilisation et le nombre de PM ne sont pas décomptés si le script MOD **COFantasy2** est installé._

Le texte de la capacité est transformé par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

Le paramètre de la capacité peut aussi être modifié en mode _Affichage_.

Trois icones sont situées à côté de **Editer** :
- L'icône _Horloge_ permet de ré-initialiser le nombre d'utilisation des capacités pour un type de fréquence donné (_ex : pour ré-initialiser toutes les capacités "par jour" à la fin d'une récupération longue_).
- L'icône _Recycler_ permet de choisir une capacité dont les effets se prolongent sur la durée et d'effectuer un jet pour cet effet.
- L'icône _Options_ permet d'afficher un menu d'action dans le chat avec un bouton pour chaque voie. Chacun de ces boutons affiche ensuite un sous-menu avec un bouton d'action pour chaque capacité possédée dans cette voie.

Une quatrième icone est affichée si le personnage possède au moins un sort (et donc dispose d'une valeur maximum de Points de Mana). Ce bouton permet d'appliquer la règle de Concentration accrue à l'utilisation d'une capacité de sort. Si l'option _High Fantasy_ est active, la fiche demande s'il faut appliquer la règle de _Concentration puissante_.

## [Propriétés des capacités]({{ site.baseurl }}/pc-abilities/props)

## Capacités épiques

Pour que les calculs des rangs atteints dans les voies, des PV et des points de capacités dépensés soient corrects, une capacité épique ne doit **pas** être cochée.

# [_Jets de capacités_]({{ site.baseurl }}/pc-abilities/rolls)

# [_Maîtrises_]({{ site.baseurl }}/pc-abilities/masteries)

# [_Jets de compétences_]({{ site.baseurl }}/pc-abilities/skills)

# [_Buffs / Debuffs_]({{ site.baseurl }}/pc-abilities/buffs)

# [_Import_]({{ site.baseurl }}/pc-abilities/import)

# Jets en ligne (Inline-Rolls)

Avant d'être envoyé dans le chat, les descriptions des capacités sont analysées et certaines expressions sont remplacées par des jets en ligne (_in-line rolls_) :
- `[AGI]`, `[CON]`, `[FOR]`, etc... sont remplacés par le score de la caractéristique correspondante.
- `[XXX*]` ne fonctionne que pour un PNJ paramétré en tant que compagnon et est remplacé par le score de la caractéristique XXX du PJ.
- `[NIV]` ou `[NIVEAU]` ou `[NC]` sont remplacés par le niveau du personnage.
- `[NOM]` est remplacé par le nom du personnage.
- `[nombre +/- XXX]`, où `XXX` est une caractéristique, est remplacé par le résultat du calcul.
- `[rang voie N]` est remplacé par la valeur du rang dans la voie indiquée par N.
- `Nd4°` est remplacé par un jet du nombre `N` de dés évolutifs. `NdE`, `Nd4E` et `Nd4e` sont aussi reconnus comme spécifications de dés évolutifs.
- `[Nd4° + XXX]` est remplacé par un jet du nombre `N` de dés évolutifs auquel le score de la caractéristique `XXX` (_AGI_, _CHA_ etc...) est ajouté. `[NdE + XXX]`, `[Nd4e + XXX]` et `[Nd4E + XXX]` sont aussi reconnus comme spécifications de dés évolutifs.
- Les formules de dés sont remplacés par le jet correspondant. _Exemple : `1d10`, `2d6+6`, `1d8 + 2`..._

Si vous connaissez le langage de macro de Roll20, vous pouvez indiquer ces inline-rolls vous-même dans le texte de la capacité.

## Exemples

`[[1d8 + @{for}]]` pour lancer un d8 et ajouter le score de Force du personnage.

`[[1d@{drecup} + floor(@{niveau}/2)]]` pour lancer un dé de récupération et ajouter la moitié du niveau du PJ arrondi à l'entier inférieur.

`[[?{Nombre de dés ?}@{devol}]]` pour demander un nombre de dés évolutifs à lancer.

## Remarques

- Si vous indiquez des formules de dés avec un **D**, la fiche n'effectue **pas** la substitution par des _in-line rolls_. `1d6` est remplacé par `[[1d6]]`, mais pas `1D6`.
- Si la fiche détecte que vous avez utilisé vous-même des _in-line rolls_ dans le texte (il y a au moins une occurence de `[[...]]`), elle ne fait **aucune** des substitutions décrites ci-dessus. Soit vous laissez le texte tel qu'il apparaît dans les règles avec les syntaxes spéciales implémentées dans la fiche, soit vous les remplacez par le langage de macro de Roll20, mais il n'est pas possible de mixer les deux.

---

[Retour]({{ site.baseurl }}/pc-main)