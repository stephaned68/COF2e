# Voies et capacités

La convention adoptée dans la fiche COF 2E est la suivante :
- La voie n°1 est la voie de peuple,
- Les voies n°2 à 6 sont les voies de profil,
- Les voies n°7 et 8 sont la ou les voies de prestige.

Cet onglet de la fiche de personnage présente deux vues (_Affichage_ et _Edition_), une case à cocher permet de basculer d'un mode à l'autre.

## Mode Edition

Pour chaque voie, vous pouvez indiquer :
- Le nom de la voie,
- Le nom et la description des capacités pour chaque rang,
- Indiquer si la capacité en question est un sort (permet de calculer les PM maximum du PJ).

## Mode Affichage

Les informations saisies en mode _Edition_ sont reprises mais non modifiables dans cet vue.

Pour chaque rang :
- Une case à cocher permet d'indiquer si la capacité est possédée ou non (permet de calculer le rang du PJ dans ses voies),
- Une icone permet d'afficher le texte de la capacité dans le chat Roll20.

Le texte de la capacité est transformé par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

# Jets de capacités

Ce sous-onglet permet de lister des jets liés aux capacités du PJ. Pour chaque jet, vous pouvez indiquer :
- Le nom de la capacité
- Le jet de dé correspondant :
  - Vous pouvez indiquer si c'est un jet de d20 normal, avec dé bonus ou dé malus, ou si c'est un autre type de jet.
  - Vous pouvez indiquer le score de caractéristique à ajouter au jet, l'option _Demander_ permet d'afficher un popup Roll20 pour choisir la caractéristique selon les circonstances.
  - La voie dont le rang doit être ajouté au jet s'il y a lieu.
  - Un bonus fixe (_+2 pour les voies de profil, +3 pour les voies de peuple, +5 pour les voies de prestige_).
- Une description ou un jet spécial.
  - Avant envoi dans le chat, cette description est transformée par insertion de jets en ligne s'il y a lieu (voir paragraphe _Jets en ligne_ ci-dessous).

# Jets de compétences

Ce sous-onglet n'apparaît que si la règle optionnelle est activée dans l'onglet _Configration_ de la fiche.



# Buffs / Debuffs

Ce sous-onglet permet de créer une liste de buffs / debuffs, c'est à dire des bonus ou malus obtenus par certaines capacités ou circonstances qui peuvent s'ajouter de manière temportaire ou permanente à certains attributs du PJ.

Pour chaque élément de la liste, vous pouvez indiquer :
- Si le buff est actif ou pas (case à cocher)
- Le nom ou origine du buff
- L'attribut auquel ce buff s'applique
  - Caractéristique (_AGI_, _CON_, etc)
  - Combat (Initiative, Contact, Distance, Magique, Défense)
  - Ressources (PV, DR, PM, PC)
- La valeur du buff, qui peut s'exprimer :
  - Comme une valeur fixe, par exemple <kbd>+1</kbd>, <kbd>-2</kbd>
  - En référençant un autre attribut indiqué entre crochets, par exemple <kbd>[CHA]</kbd>
  - En référençant le rang dans une voie sous la forme <kbd>[rang _no_]</kbd> ou <kbd>[rang voie _no_]</kbd> ou <kbd>[rang _nom_]</kbd>

Plusieurs buffs peuvent s'appliquer au même attribut du PJ. Si c'est le cas, le total des buffs actuellement actifs (cochés) est calculé.

Une section dépliable _Détail par attribut_ permet de consulter la liste des buffs actuellement appliqués à chaque attribut et leur somme.

# Jets en ligne (inline-Rolls)

Avant d'être envoyé dans le chat, certains textes sont analysés et des motifs spéciaux sont remplacés par des jets en ligne (_in-line rolls_) :
- <kbd>[AGI]</kbd>, <kbd>[CON]</kbd>, <kbd>[FOR]</kbd>, etc... sont remplacés par le score de la caractéristique correspondante
- <kbd>[{chiffre} +/- XXX]</kbd> où <kbd>XXX</kbd> est une abréviation de caractéristique sont remplacés par le résultat du calcul
- <kbd>[rang voie {no}]</kbd>, <kbd>[rang {no}]</kbd> et <kbd>[rang {nom de la voie}]</kbd> sont remplacés par la valeur du rang dans la voie correspondante
- <kbd>[{nb}d4° + XXX]</kbd> est remplacé par un lancer du nombre <kbd>nb</kbd> de dés évolutifs auquel le score de la caractéristique <kbd>XXX</kbd> (_AGI_, _CHA_ etc...) est ajouté
- <kbd>{nb}d4°</kbd> est remplacé par un lancer du nombre <kbd>nb</kbd> de dés évolutifs
- <kbd>{nb}d{faces}</kbd> ou <kbd>{nb}D{faces}</kbd> sont remplacés par un lancer du nombre <kbd>nb</kbd> de dés à <kbd>faces</kbd> faces