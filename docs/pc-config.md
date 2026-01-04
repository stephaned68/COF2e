# Options de configuration

Les préférence et réglages possibles de la fiche sont configurés dans cet onglet :
- Jets
  - Public : Tous les joueurs voient les jets du PJ dans le chat.
  - Chuchotés au MJ : Seul le joueur et le MJ voient les jets (uniquement le MJ pour une fiche de PNJ non partagées aux joueurs).
  - Avec token : Le token par défaut du personnage apparaît dans tous les messages envoyés dans le chat par la fiche.
- Calcul automatique PV max. : Cette option permet que la fiche calcule automatiquement les PV maximums (cf. ci-dessous)
- Contrôle points de capacités : Cette option permet que la fiche vérifie les dépassements de points de capacité (cf. ci-dessous)
- Attaques ciblées : Cette option permet de demander au joueur de pointer sur la map la cible d'un jet d'attaque, de comparer le résultat avec la Défense du PJ ou du PNJ lié à ce token, et afficher si l'attaque est un succès ou un échec
- Afficher voies 4-5-6 : Cette option est active par défaut mais elle peut être désactivée pour ne pas afficher les voies 4 à 6 pour des personnages de bas niveau
- Afficher voies 7-8-9 : Cette option permet d'afficher les voies supplémentaires (voies de prestige)
- Afficher compétences : Cette option permet d'activer ou de désactiver le sous-onglet _Compétences_ de l'onglet _Capacités_.

### Calcul automatique des PV maximums

Pour un fonctionnement correct de cette option, il est nécessaire de respecter les contraintes suivantes :
- La voie n°1 est la voie de peuple ou du mage
- Les voies n°2 et 3 sont les voies où sont choisies les deux capacités au niveau 1
- La capacité supplémentaire prise par les profils de mages au niveau 1 doit avoir la propriété `initial`
- Les PV de la voie (qui sont ceux de la famille de profil auquel appartient la voie) doivent être spécifiés. Ceux-ci sont initialisés automatiquement si le nom de la voie est reconnu par la fiche.

Les PV maximums sont calculés en faisant la somme des éléments suivants :
- [niveau] x [CON]
- pour toutes les capacités possédées (cochées) qui n'ont pas la propriété `doublon` (cf capacité en doublon, p. 171) ni la propriété `epic` (cf capacités épiques, Atlas p. 185)
  - Si rang 1 de la voie 1 : 0 PV
  - Sinon si rang 1 de voie 2 ou 3 : [PV de voie]
  - Sinon si rang 2 de voie 1,2 ou 3 et propriété `initial` : 0 PV
  - Sinon si rang 1 ou 2 : [PV de voie]/2
  - Sinon (rang >2) : [PV de voie]

### Contrôle des points de capacités

Pour un fonctionnement correct de cette option, il est nécessaire de respecter les mêmes contraintes que ci-dessus :
- La voie n°1 est la voie de peuple ou du mage
- Les voies n°2 et 3 sont les voies où sont choisies les deux capacités au niveau 1
- La capacité supplémentaire prise par les profils de mages au niveau 1 doit avoir la propriété `initial`

La fiche décompte pour les capacités possédées (cochées) :
- Si rang 1 de la voie 1 : 0 point
- Sinon si rang 1 de voie 2 ou 3 : 1 point
- Sinon si rang 2 de voie 1,2 ou 3 et propriété `initial` : 0 point
- Sinon si rang 1 ou 2 : 1 point
- Sinon (rang >2) : 2 points

Si le nombre de points de capacités utilisé dépasse le nombre maximum disponble soit 2 x [niveau], un message d'alerte s'affiche dans le chat Roll20.

## Initiative

- Initiative variable : Un jet de 1d6 sans limite est ajouté au score d'initiative en début de combat.
- Départager les inits identiques : La valeur de `(AGI+PER)/10` est ajoutée au jet d'initiative.
- Initiative + AGI : Le score d'Initiative est calculé en ajoutant l'AGI à la somme 10 + PER.

## Règles optionnelles

- Encombrement : L'encombrement de l'équipement porté par le PJ est calculé et des alertes sont affichées dans le chat Roll20 selon que les divers seuils sont dépassés.
- Points de chance variables : La dépense d'un PC ajoute 1d10 au résultat du dernier jet de D20. En compensation, le nombre de PC est doublé.
- Utiliser le malus de bouclier : Le bouclier inflige un malus à certaines actions (comme une armure).
- Suivre les munitions : Les munitions liées aux attaques d'arme de jet sont déduites des ressources.

## Règles optionnelles (COMBAT)
- Critiques différenciés : Les réussites critiques en combat provoquent des effets différenciés selon le type de DM de l'arme utilisée.
- Table de coups critiques : Les effets des réussites critiques en combat sont déterminés aléatoirement.
- Table d'échecs critiques : Les échecs critiques en combat provoquent des effets défavorables déterminés aléatoirement.

## High Fantasy

- Progression épique : Les scores d'attaques augmentent de +1 à chaque niveau impair à partir du niveau 11, ainsi que le score de base de la Défense.
- Récupération + niveau : Le niveau du personnage est ajouté au résultat du DR en cas de récupération rapide (1/2 niveau par défaut).
- Plus de Mana : Les sorts de rang 3 ou plus augmentent le maximum de 2 PM au lieu de 1.

## Low Fantasy

- Progression limitée : Les scores d'attaquent n'augmentent plus après le niveau 6.
- Récupération - niveau : Le jet de récupération rapide est un jet de DR sec, sans ajouter la moitié du niveau.
- Attaques différenciées : Les scores de base des attaques varient selon le profil.
- Usure des armes : Un échec critique en attaque provoque un jet d'usure.
- Règles de Peur : les états préjudiciables Effrayé et Paniqué s'ajoutent aux autres.

## Dark Fantasy
- Lutte contre l'Ombre : le nombre de PC mini est de -5, et devient la Valeur d'Ombre lorsqu'elle est négative.

## Forcer les valeurs maxi

Cette section permet de fixer la valeur maximum des PV, DR, PC et PM et empêche la fiche de les calculer automatiquement.

## Voies avec rangs acquis

Cette section affiche le nombre de voies dans lesquelles le personnage a acquis les rangs 3, 4 et 5. Les attributs correspondant peuvent être utilisés pour calculer les effets des capacités qui évoluent quand le personnage acquiert un certain rang dans d'autres voies de profil.

_Exemple :_ Nombre de dés de DM de l'_attaque sournoise_, nombre d'utilisation par jour du sort de _récupération mineure_.

## Attributs personnalisés

Cette section permet de définir une liste d'attributs dans une zone de texte libre. La syntaxe de cette liste est la même que pour les [prédicats]({{ site.baseurl }}/pc-script).

Les attributs personnalisés sont créés avec la valeur indiquée. Ils peuvent être utilisés dans des macros Roll20 ou à d'autres emplacements de la fiche sous le nom `@{nom attribut}`.

_Exemple :_ 

`att_sournoise: (2+@{voies_rang4})d4°` sur la fiche d'un profil de voleur crée un attribut nommé `att_sournoise`. La valeur de cet attribut sera résolue par Roll20 à l'utilisation, en ajoutant aux 2d4° de base le nombre de voies de voleur dans lequel le personnage a atteint le rang 4. Cet attribut peut être utilisé dans une macro sous le nom `@{att_sournoise}`

## Compétences personnalisées

Cette section permet de définir les noms de 1 à 4 compétences personnalisées qui s'ajoutent à la liste standard de 22 compétences définies dans l'_Atlas d'Osgild_.

Une ou plusieurs caractéristiques associées peuvent être cochées pour chaque compétence personnalisées. Le jet de compétence effectué demandera la caractéristique à utiliser si nécessaire.

## Notifications

Pour chaque type de notification, vous pouvez choisir entre aucun affichage, un affichage pour tous les joueurs, ou un affichage privé pour le joueur et le MJ.

- Conditions : Les effets des états préjudiciables sont affichés ou pas dans le chat Roll20.
- Gain/Perte de PV : Les effets des gains ou des pertes de PV lors du clic sur les deux icones sont affichés ou pas dans le chat Roll20.

- FX (caract.) : Vous pouvez indiquer ici le nom d'un FX Roll20 qui sera joué lors d'un jet de caractéristique (commande `/fx`).

## Apparence des messages

Vous pouvez sélectionner une couleur spécifique pour les messages de chat du personnage.

Vous pouvez également modifier certains aspects des messages de chat :
- Un seul jet d'attaque (cf _Jets de d20_ ci-dessous).
- Un seul jet de compétence (cf _Jets de d20_ ci-dessous).
- Bouton Chance : Un bouton chance est affiché au bas des messages sur tous les jets de D20 et permet de dépenser instantanément un PC en affichant les résultats précédents bonifiés (+10 ou +1d10 si l'option PC variables est active).

## Dé bonus / Dé malus

Vous pouvez choisir d'autres options pour les lancers de d20 :
- Boutons : pour afficher trois boutons sous le logo de la fiche permettant de choisir entre un jet normal, avec dé bonus ou avec dé malus avant de cliquer sur un bouton d'action.
- Demander : pour afficher un popup Roll20 permettant de choisir si le jet est normal, avec dé bonus ou malus après avoir cliqué sur un bouton d'action.

### Jets de d20 

#### Par défaut

Un jet de caractéristique _sec_ n'est lancé qu'une fois. Les dés effectivement lancés varient selon que la caractéristique soit _Supérieure_ et/ou _Héroïque_ et si le personnage subit l'état _Affaibli_.

Un jet d'attaque _sec_ n'est lancé qu'une fois et les états _Affaibli_ et _Immobilisé_ font varier les dés lancés.

Un jet d'arme ou de compétences est lancé une seule fois si le personnage subit l'état _Affaibli_ ou _Immobilisé_.

Sinon, il est lancé deux fois, avec les même bonus appliqués au d20 :
- Soit le jet est normal et vous prenez le premier résultat affiché
- Soit le jet est avec dé bonus ou malus, et vous prenez le meilleur résultat ou le pire

Un jet de capacité est configuré avec la possibilité de faire un jet normal ou avec dé bonus / malus

#### Un seul jet d'attaque

Vous pouvez activer une option de configuration pour que la fiche fasse un seul jet d'attaque avec une arme. Ce jet est normal, à moins que l'attaque soit configurée avec les modificateurs `deBonus` ou `deMalus`. Les états _Affaibli_ ou _Immobilisé_ font varier les dés effectivement lancés.

#### Un seul jet de compétence

Vous pouvez activer une option de configuration pour que la fiche fasse un seul jet normal de compétence.

#### Choisir le type de dés avant le jet

Vous pouvez activer une option de configuration pour avoir trois boutons affichés en permanence sous le logo COF2. Ces boutons basculent entre jet normal, jet avec dé bonus ou jet avec dé malus. 

Selon que la caractéristique soit _Supérieure_ et/ou _Héroïque_ et les états préjudiciables subis, la fiche adapte les dés effectivement lancés. 

_Exemples : le jet d'une caractéristique **supérieure** et **héroïque** effectué avec **dé malus** est réalisé avec **dé bonus** mais sans résultat minimum de **10** ; un jet d'attaque effectué avec **dé bonus** alors que le personnage est immobilisé (**dé malus**) réalise un jet **normal** avec un seul d20_.

Une logique similaire s'applique pour les jets d'attaque selon les états préjudiciables subis. 

Pour les jets d'armes, les états préjudiciables et la présence des modificateurs `deBonus` ou `deMalus` sont également pris en compte.

#### Choisir le type de dés pendant le jet

Vous pouvez activer une option de configuration pour que lorsqu'un bouton d'action est cliqué, un popup Roll20 s'ouvre et la fiche demande au joueur le type de jet à effectuer. Cette demande ne s'affiche que si le jet devrait être normal.

## Premiers rangs

Pour chaque voie du PJ, vous pouvez indiquer la valeur du premier rang (1 pour les voies de peuple et de profil, 3 ou 4 pour les voies de prestige). La fiche stocke le nom du profil dont cette voie est issue.

Ne pas oublier d'indiquer la valeur de **3** pour le rang de base la voie de prestige du _familier fantastique_.

Le rang de base peut aussi être utilisé pour implémenter la magie rare du mode **low-fantasy**, en changeant le rang de base des voies de magie par 2, 3 ou 4 selon la rareté souhaitée

## Autres fonctions

Plusieurs outils sont disponibles dans la partie supérieure droite de cet onglet.

Une case permet d'activer le mode `debug`. Une fois cochée, un grand nombre d'événements se produisant dans la fiche inscrivent des informations techniques de débogage dans la console de développement du navigateur.

Une première icone _Outils_ permet de copier les options de configuration par défaut depuis une fiche de personnage nommée `PJBase`. Après avoir créé et configuré cette fiche, le MJ de la partie doit également cliquer sur cette icone pour que tous les attributs traités soient créés avec une valeur dans l'onglet _Attributes & Abilities_, sans quoi la copie à partir d'autres fiches échouera.

Une deuxième icone _Outils_ permet de re-calculer un certain nombre d'attributs dérivés dans la fiche. Ce bouton n'est utile qu'en cas de bug, et peut éventuellement corriger des comportements incorrects de la fiche. 

---

[Retour]({{ site.baseurl }}/pc-main)