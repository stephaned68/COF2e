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

## Propriétés des capacités

Les propriétés suivantes peuvent être configurées dans les capacités. Le nom de la propriété doit être immédiatement suivi de `:` et d'un espace.

### Animation (fx)

`fx: xxxxx N`

Vous pouvez indiquer le nom d'une animation `xxxxxx` et un nombre éventuel `N` de répétitions pour que la fiche joue un FX Roll20 (commande `/fx`) lorsque la capacité est utilisée.

_Exemple :_

_Afficher une explosion de paillettes roses quand une capacité est utilisée en cliquant sur la bulle_

`fx: nova-charm 6`

### Points de Mana (pm)

`pm: N` 

Vous pouvez indiquer un nombre pour faire varier le nombre de PM consommés par cette capacité. Ce nombre peut être absolu (`pm: 3` pour consommer 3 PM) ou relatif (`pm: -1` pour consommer 1 PM de moins que la normale).

### Points d'Ego (pe)

`pe: N` 

Idem ci-dessus pour les Points d'Ego du Psionique (profil optionnel du _Compagnon_).

### Effet selon le rang (selonRang)

`selonRang: valeur1,valeur2,valeur3,valeur4,valeur5` 

Vous pouvez indiquer une suite de 5 valeurs séparées par des virgules pour indiquer qu'un paramètre de la capacité évolue selon le rang atteint dans la voie.
- `valeur1` est la valeur du paramètre évolutif au rang 1
- `valeur2` est la valeur du paramètre évolutif au rang 2
- `valeur3` est la valeur du paramètre évolutif au rang 3
- `valeur4` est la valeur du paramètre évolutif au rang 4
- `valeur5` est la valeur du paramètre évolutif au rang 5
  
Le texte de la capacité doit comporter l'expression `%selonRang%` pour que la fiche y insère la valeur correspondant au rang atteint.

_Exemple :_

_Paramétrer la capacité de sort __Arc de feu__ avec son évolution au rang 4 :_

`selonRang: 1d4°,1d4°,1d4°,2d4°,2d4°`

_Dans la description, indiquez :_

_Des flammes jaillissent des doigts tendus du magicien. Jusqu’à 3 cibles au contact subissent [%selonRang%+INT] DM, les cibles peuvent faire un test d’AGI difficulté [10 + INT] pour ne subir que la moitié des DM_

#### Avec création d'un attribut personnalisé

Vous pouvez optionnellement précéder la liste des valeurs d'un nom d'attribut et d'un signe `|`.

`selonRang: attribut|valeur1,valeur2,valeur3,valeur4,valeur5`

_Exemple :_

`selonRang: dm-arcfeu|valeur1,valeur2,valeur3,valeur4,valeur5`

Cette syntaxe permet de créer un attribut _dm-arcfeu_ que vous pouvez ensuite utiliser dans une macro Roll20 à l'aide de la syntaxe habituelle `@{dm-arcfeu}`.

### Buff selon rang (buff)

`buff: xxx|valeur1,valeur2,valeur3,valeur4,valeur5` 

Vous pouvez indiquer un identifiant xxx suivi d'un `|` et d'une série de 5 valeurs séparées par des virgules. La fiche crée un attribut nommé `voieN_buff_xxxx`, où `N` correspond au no de la voie où figure la capacité, et dont la valeur évolue selon le rang atteint dans la voie.

_Exemple :_

_Paramétrer le buff à la DEF octroyé par la capacité __Peau de pierre__ selon le rang atteint dans la __Voie du Pagne__ renseignée en voie n°3_

`buff: def|0,1,1,2,2`

_Cette propriété crée une valeur nommée `voie3_buff_def`. Cette valeur change selon le rang atteint dans la voie n°3 en utilisant l'énumération indiquée après `|` : 0 au rang 1, 1 au rang 2, 2 à partir du rang 4. Cette valeur peut être indiquée comme attribut dans une ligne de buff en spécifiant le nom `[voie3_buff_def]`_

### Capacité épique (epic)

`epic: `

Vous pouvez identifier la capacité comme étant de type _épique_.

### Jet (roll)

`roll: xxxxx`

Indiquez les valeurs standard `contact` ou `distance` ou `magie` pour demander à la fiche de faire le jet d'attaque correspondant lors de l'utilisation de la capacité.

Indiquez la valeur `atk N` pour demander à la fiche de faire le Nième jet de la liste des armes / attaques.

Indiquez la valeur `jet N` pour demander à la fiche de faire le Nième jet de la liste des jets de capacités.

Vous pouvez indiquer un autre jet, en spécifiant le nom du bouton souhaité. Les noms des boutons d'action sont affichés au survol de la souris sur les éléments cliquables de la fiche (boutons, icones, certains textes) et sont généralement de la forme `%{xxxxx-btn}`. Spécifiez le nom du bouton en omettant `%{` et `}`.

_Exemples :_

_Paramétrer une capacité pour effectuer un jet d'attaque magique_

`roll: magie`

_Paramétrer une capacité pour que la fiche lance la deuxième ligne d'attaque :_

`roll: atk 2`

### Menu des actions (action)

`action: `

Vous pouvez marquer la capacité comme _active_ afin qu'un bouton d'action lui soit assigné dans le menu des actions dans le chat.

### Effets étendus (etendu)

`etendu: ...`

Vous pouvez indiquer que la capacité a un effet qui se prolonge sur plusieurs rounds. Il peut être nécessaire de préciser cet effet avec d'autres propriétés `etendu-xxx`.

`etendu: ...` est suivie d'un texte décrivant l'effet prolongé. Ce texte peut contenir une formule de dé pour des DM (y compris des dés évolutifs `1d4°`).

`etendu-duree: ...` est suivie d'un texte spécifiant la durée de l'effet. Ce texte peut être exprimé sous forme d'une valeur fixe ou d'une expression faisant référence à un attribut du personnage (_ex: `[INT] rounds` pour la durée d'un sort de magicien_).

`etendu-nom: ...` est suivie du nom de l'effet, si vous souhaitez qu'il soit différent du nom de la capacité.

`etendu-stop: ...` est suivie d'un texte permettant de rappeler les conditions dans lesquelles l'effet s'arrête, si aucune durée n'est indiquée.

_Exemples_

_Paramétrer la capacité de sort __Flèche de feu__ :_
  
`etendu: [[1d6cf<2]]` pour lancer 1d6 et afficher le résultat en rouge si le jet est de 1 ou 2 (ce qui signifie que l'effet s'interrompt)
  
`etendu-nom: DM flèche de feu` pour afficher le texte indiqué au lieu du nom de la capacité

Si une capacité est paramétrée avec des propriétés de type `etendu` et que le script MOD **AddCustomTurn** est disponible, une entrée personnalisée est ajoutée au Turn-Order Roll20 lorsque cette capacité est utilisée.

### PC orphelin (pcorphelin)

`pcorphelin: `

En cas de point de capacité orphelin, cette propriété doit être indiquée pour la dernière capacité de rang 2 acquise afin que le calcul automatique des PV maximum soit correct.

### Capacités des mages (mage)

`mage: `

Cette propriété doit être indiquée pour les capacités de sort supplémentaires acquises via le sacrifice d'une caractéristique physique. Elle permet d'ajuster le calcul automatique des PV.

## Capacités épiques

Pour que les calculs des rangs atteints dans les voies, des PV et des points de capacités dépensés soient corrects, une capacité épique ne doit **pas** être cochée.

# Sous-onglet [_Jets de capacités_]({{ site.baseurl }}/pc-abilities/rolls)

# Sous-onglet [_Maîtrises_]({{ site.baseurl }}/pc-abilities/masteries)

# Sous-onglet [_Jets de compétences_]({{ site.baseurl }}/pc-abilities/skills)

# Sous-onglet [_Buffs / Debuffs_]({{ site.baseurl }}/pc-abilities/buffs)

# Sous-onglet [_Import_]({{ site.baseurl }}/pc-abilities/import)

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