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
  - Un paramètre optionnel, 
  
    _Exemples d'utilisation :_
    - _Nom de la fiche de PNJ du compagnon (rôdeur, chevalier, etc...)_
    - _Précision sur la capacité (type d'arme pour la voie du maître d'armes)_

  - Une liste de propriétés optionnelles, principalement utilisées par le script MOD COFantasy2.
  
    La syntaxe de cette liste est la même que pour les [prédicats]({{ site.baseurl }}/pc-script).

    Voir le paragraphe _Propriétés des capacités_ ci-dessous pour les propriétés de capacités prises en charge directement par la fiche

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

- `fx: xxxxx N` suivi du nom d'un effet spécial xxxxxx et d'un nombre éventuel N de répétitions pour que la fiche joue un FX Roll20 (commande `/fx`) lorsque la capacité est utilisée.
- `pm:` suivi d'un chiffre pour faire varier le nombre de PM consommés par cette capacité. Ce chiffre peut être absolu (`pm: 3` pour consommer 3 PM) ou relatif (`pm: -1` pour consommer 1 PM de moins que la normale).
- `selonRang: valeur1,valeur2,valeur3,valeur4,valeur5` suivi de 5 valeurs séparées par des virgules pour indiquer qu'un paramètre de la capacité évolue selon le rang atteint dans la voie.
  - `valeur1` est la valeur du paramètre évolutif au rang 1
  - `valeur2` est la valeur du paramètre évolutif au rang 2
  - `valeur3` est la valeur du paramètre évolutif au rang 3
  - `valeur4` est la valeur du paramètre évolutif au rang 4
  - `valeur5` est la valeur du paramètre évolutif au rang 5
  
  Le texte de la capacité doit comporter l'expression `{ {selonRang} }` pour que la fiche y insère la valeur dépendant du rang atteint.

- `epic:` suivi d'un espace pour identifier la capacité comme épique.
- `buff: xxx [valeur1,valeur2,valeur3,valeur4,valeur5]` permet de spécifier un buff nommé xxx qui évolue selon le rang atteint dans la voie.
- `roll: xxx` où xxx peut prendre les valeurs `contact` ou `distance` ou `magie` permet de demander à la fiche de faire le jet d'attaque correspondant lors de l'utilisation de la capacité. Un autre type de jet peut être indiqué, en spécifiant le nom du bouton (généralement suffixé par `-btn` et affiché au survol de la souris sur les différentes rubriques de la fiche).
- `action:` suivi d'un espace pour identifier la capacité comme active afin qu'un bouton d'action lui soit assigné dans le menu d'actions dans le chat.

### Exemples :

- Afficher une explosion de paillettes roses quand une capacité est utilisée en cliquant sur la bulle

  `fx: nova-charm 6`

- Paramétrer la capacité de sort _Arc de feu_ avec son évolution au rang 4 :

  Propriété : `selonRang: 1d4°,1d4°,1d4°,2d4°,2d4°`

  Description : _Des flammes jaillissent des doigts tendus du magicien. Jusqu’à 3 cibles au contact subissent [\{\{selonRang\}\}+INT] DM, les cibles peuvent faire un test d’AGI difficulté [10 + INT] pour ne subir que la moitié des DM_

- Paramétrer le buff à la DEF octroyé par la capacité _Peau de pierre_ selon le rang atteint dans la _voie du Pagne_ renseignée en voie n°3

  Propriété : `buff: def [0,1,1,2,2]`

  Cette propriété crée une valeur nommée `voie3_buff_def`. Cette valeur change selon le rang atteint dans la voie n°3 en utilisant l'énumération indiquée entre `[]` : 0 au rang 1, 1 au rang 2, 2 à partir du rang 4. Cette valeur peut être indiquée comme une référence d'attribut dans une ligne de buff en spécifiant `[voie3_buff_def]`.

- Paramétrer la capacité de sort _Flèche de feu_ pour effectuer le jet d'attaque magique

  Propriété : `roll: magie`

## Capacités épiques

Pour que les calculs des rangs atteints dans les voies, des PV et des points de capacités dépensés soient corrects, une capacité épique ne doit **pas** être cochée.

# Jets de capacités

Ce sous-onglet permet de lister des jets liés aux capacités du PJ. Pour chaque jet, vous pouvez indiquer :
- Un nom
- Le jet de dé correspondant :
  - Soit un jet de d20 normal, soit un jet avec _dé bonus_ ou _dé malus_, soit un autre type de jet.
  - Le score de caractéristique éventuel à ajouter au jet. L'option _Demander_ permet d'afficher un popup Roll20 pour choisir la caractéristique selon les circonstances.
  - La voie de profil dont le rang doit être ajouté au jet s'il y a lieu.
  - Un bonus fixe (_+2_ pour une voie de profil, _+3_ pour la voie de peuple, _+5_ pour la voie de prestige).
- Une description ou un jet spécial. Avant envoi du jet dans le chat, cette description est transformée par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

L'icone située à côté de **Nom** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de capacité.

Si la description du jet est vide, mais que son nom correspond au nom d'une capacité possédée par le personnage, le texte de cette capacité est récupéré. **Attention** : si la capacité mise en correspondance par ce mécanisme est un sort, le nombre de PM n'est pas décompté lorsque le jet est effectué.

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

A moins que l'option de configuration _Un seul jet de compétence_ ne soit active ou que le PJ ne soit _Affaibli_, deux jets distincts sont effectués. En cas de jet normal, prenez en compte le premier jet affiché. Prenez le plus élevé des deux jets si le PJ bénéficie d'un _dé bonus_ ou le moins élevé s'il subit un _dé malus_.

# Buffs / Debuffs

Ce sous-onglet permet de créer une liste de buffs / debuffs, c'est à dire des bonus ou malus obtenus par certaines capacités ou circonstances, qui peuvent s'ajouter de manière temporaire ou permanente à certains attributs du PJ.

Pour chaque élément de la liste, vous pouvez indiquer :
- Si le buff est actif ou pas (case à cocher)
- Le nom ou origine du buff
- Si ce buff est temporaire (case à cocher)
- L'attribut auquel ce buff s'applique :
  - Une caractéristique (_AGI_, _CON_, etc), éventuellement tous les jets de caractéristiques
  - Un score de combat (Initiative, Attaques, Défense, DM)
  - Un score d'attaque (Contact, Distance, Magique), éventuellement tous les jets d'attaque
  - Une ressource (PV, DR, PM, PC)
- La valeur du buff, qui peut s'exprimer :
  - Comme une valeur fixe, par exemple `+1`, `-2`
  - Comme la valeur d'un autre attribut, en référençant celui-ci entre crochets, par exemple `[CHA]`
  - Comme le niveau du personnage, en le référençant sous la forme `[niveau]`
  - Comme le rang dans une voie, éventuellement ajusté d'un bonus `X`, en référençant celle-ci sous l'une des formes suivantes :
    - `[rang voie N]` ou `[rang voie N] + X` pour la voie no `N`
    - `[rang nom]` ou `[rang nom] + X` pour la voie `nom`
  - Comme une formule de jet de dés (principalement pour les buffs aux DM)

Plusieurs buffs peuvent s'appliquer au même attribut du PJ. Si c'est le cas, le total des buffs actuellement actifs (cochés) est calculé.

Dans le cas d'un buff aux DM, celui-ci s'applique à tous les jets d'attaque effectuées à partir du moment où il est actif. Il est possible de le rendre optionnel en indiquant un `?` au début de son nom. La fiche demandera alors si ce buff s'applique quand un jet d'attaque est effectué. Il est possible d'indiquer une liste de DM différents pour un même buff. Voir exemple ci-dessous.

## Exemples de buffs optionnels

### Attaque sournoise

Pour créer un buff optionnel de DM d'_Attaque sournoise_, indiquez :
- `? Attaque sournoise` dans le nom du buff,
- `DM` dans l'attribut cible,
- `2d4°` dans la valeur

Cochez la case d'activation. A chaque fois que le voleur effectue une attaque, la fiche demandera s'il s'agit d'une attaque sournoise, et si oui, lancera les dés de DM supplémentaires.

NB : Pour ne pas avoir à actualiser le nombre de d4° quand le voleur atteint le rang 4 dans une voie de profil, vous pouvez commencer par créer un attribut personnalisé `sournoise` (cf. onglet [Configuration]({{ site.baseurl }}/pc-config)) dont la valeur est calculée à partir de l'attribut standard `voies_rang4`, et va donc suivre l'évolution des rangs acquis dans les voies. Puis indiquez `[voleur_sournoise]` dans la valeur du buff.

### Dans le mille

Pour créer un buff optionnel de DM d'attaque _Dans le mille_, indiquez :
- `? Dans le mille` dans le nom du buff,
- `DM` dans l'attribut cible,
- `2d4° & Action limitée=3d4°` dans la valeur

Cochez la case d'activation. A chaque fois que le rôdeur effectue une attaque, la fiche proposera 3 possibilités d'utilisation pour _Dans le mille_ : _Non_, _Oui_, _Action Limitée_, et lancera les dés de DM supplémentaires selon le choix effectué.

## Activation / désactivation par nom

Une icone _Interrupteur_ à côté du titre _Nom du buff_ permet l'activation et désactivation rapide de plusieurs buffs. Un popup Roll20 affiche les noms des buffs de type temporaire. Tous les buffs correspondants au nom sélectionné voient leur état basculer entre actif et inactif.

_Exemple :_ 

Pour gérer un buff pour le sort de _Bénédiction_ du prêtre, créer deux lignes avec le même nom, une avec _Tests de caracs_ et l'autre avec _Tests d'attaque_ en cible et la valeur du bonus octroyée par le sort. Cochez la case _Temporaire_ pour ces deux lignes. Lorsque vous cliquez sur l'icône _Interrupteur_, un popup Roll20 s'affiche avec une liste de choix dont _Bénédiction_. Sélectionnez-le, les deux lignes de buffs correspondantes sont activées ou désactivées.

## Détail par attribut

Cette section dépliable permet de consulter la liste des buffs actuellement appliqués à chaque attribut et leur somme.

# Import

Ce sous-onglet permet de coller le texte d'une voie copié depuis le PDF des règles. 

Il suffit ensuite de cliquer sur le bouton d'import de la voie pour insérer le texte des capacités dans la fiche de personnage.
- La voie en question est remplie avec le texte copié, toutes les données précédemment saisies sont **écrasées** !
- La première ligne du texte doit être le nom de la voie, l'import efface le préfixe (_"Voie du..."_, _"Voie de la ..."_, etc...)
- Une ligne qui commence par un chiffre et se termine par `:` marque le nom d'une capacité, les lignes suivantes sont rassemblées pour former la description.
- Cette description est analysée pour trouver des références à un nombre d'utilisations limité (ex : _"une fois par combat, ..."_)
- Si le nom d'une capacité comporte un astérisque `*`, celle-ci est considérée comme un sort

# Jets en ligne (Inline-Rolls)

Avant d'être envoyé dans le chat, les descriptions des capacités sont analysées et certaines expressions sont remplacées par des jets en ligne (_in-line rolls_) :
- `[AGI]`, `[CON]`, `[FOR]`, etc... sont remplacés par le score de la caractéristique correspondante.
- `[NIV]` ou `[NIVEAU]` ou `[NC]` sont remplacés par le niveau du personnage.
- `[NOM]` est remplacé par le nom du personnage.
- `[nombre +/- XXX]`, où `XXX` est un nom de caractéristique, sont remplacés par le résultat du calcul.
- `[rang voie N]` est remplacé par la valeur du rang dans la voie indiquée par N.
- `Nd4°` ou `NdE` est remplacé par un jet du nombre `N` de dés évolutifs.
- `[Nd4° + XXX]` ou `[NdE + XXX]` est remplacé par un jet du nombre `N` de dés évolutifs auquel le score de la caractéristique `XXX` (_AGI_, _CHA_ etc...) est ajouté.
- Les formules de dés sont remplacés par le jet correspondant. Exemple : `1d10`, `2d6+6`, `1d8 + 2`...

Si vous connaissez le langage de macro de Roll20, vous pouvez indiquer ces inline-rolls vous-même dans le texte de la capacité.

## Exemples

`[[1d8 + @{for}]]` pour lancer un d8 et ajouter le score de Force du personnage.

`[[1d@{drecup} + floor(@{niveau}/2)]]` pour lancer un dé de récupération et ajouter la moitié du niveau du PJ arrondi à l'entier inférieur.

`[[?{Nombre de dés ?}@{devol}]]` pour demander un nombre de dés évolutifs à lancer.

---

[Retour]({{ site.baseurl }}/pc-main)