# Buffs / Debuffs

Ce sous-onglet permet de créer une liste de buffs / debuffs, c'est à dire des bonus ou malus obtenus par certaines capacités ou circonstances, qui peuvent s'ajouter de manière temporaire ou permanente à certains attributs du PJ.

Pour chaque élément de la liste, vous pouvez indiquer :
- Si le buff est actif ou pas (case à cocher)
- Le nom ou origine du buff
- Si ce buff est temporaire (case à cocher)
- L'attribut auquel ce buff s'applique :
  - Une caractéristique (_AGI_, _CON_, etc), éventuellement tous les jets de caractéristiques
  - Un score de combat (Initiative, Défense, DM)
  - Un score d'attaque (Contact, Distance, Magique), éventuellement tous les jets d'attaque
  - Une ressource (PV, DR, PM, PC)
- La valeur du buff, qui peut s'exprimer :
  - Comme une valeur fixe, par exemple `+1`, `-2`
  - Comme la valeur d'un autre attribut, en référençant celui-ci entre crochets, par exemple `[CHA]`
  - Comme le niveau du personnage, en le référençant sous la forme `[niveau]`
  - Comme le rang dans une voie, éventuellement ajusté d'un bonus `X`, en référençant celle-ci sous l'une des formes suivantes :
    - `[rang voie N]` ou `[rang voie N] + X` pour la voie no `N`
    - `[rang nom]` ou `[rang nom] + X` pour la voie `nom`
  - Comme une formule de jet de dés
- Une éventuelle limitation d'armure, au cas où le buff provient d'une capacité de profil et ne doit s'appliquer que si le personnage porte une armure autorisée pour son profil. Cette limitation est comparée à la propriété `agi-max` de l'armure : si elle est supérieure, le buff n'est pas pris en compte. Par exemple, un buff provenant d'une capacité d'un profil limité au cuir simple (`agi-max` = 6) ne s'applique pas si le personnage porte une armure de cuir renforcée (`agi-max` = 5).

Plusieurs buffs peuvent s'appliquer au même attribut du PJ. Si c'est le cas, le total des buffs actuellement actifs (cochés) est calculé.

## Activation / désactivation par nom

Une icone _Interrupteur_ à côté du titre _Nom du buff_ permet l'activation et désactivation rapide de plusieurs buffs. Un popup Roll20 affiche les noms des buffs de type temporaire. Tous les buffs correspondants au nom sélectionné voient leur état basculer entre actif et inactif.

_Exemple :_ 

Pour gérer un buff pour le sort de _Bénédiction_ du prêtre, créer deux lignes avec le même nom, une avec _Tests de caracs_ et l'autre avec _Tests d'attaque_ en cible et la valeur du bonus octroyée par le sort. Cochez la case _Temporaire_ pour ces deux lignes. Lorsque vous cliquez sur l'icône _Interrupteur_, un popup Roll20 s'affiche avec une liste de choix dont _Bénédiction_. Sélectionnez-le, les deux lignes de buffs correspondantes sont activées ou désactivées.

## Détail par attribut

Cette section dépliable permet de consulter la liste des buffs actuellement appliqués à chaque attribut et leur somme.

---

[Retour]({{ site.baseurl }}/pc-abilities)