# Identité 

- Vous pouvez indiquer pour votre PJ un nom "connu" mais aussi son vrai nom dans le champ Alias. En cliquant sur le label Alias, ce dernier vient remplacer son nom connu. Un message de notification s'affiche dans le chat Roll20.
- Lorsque vous sélectionnez une famille, une liste des profils correspondants est disponible. Si un profil est indiqué, vous devez l'effacer pour voir de nouveau la liste. Vous pouvez indiquer votre profile primaire suivi de / et d'un second profil si votre PJ dispose d'un profil hybride.

## Persomancien

Un bouton situé à côté du type de fiche de personnage permet de lancer le Persomancien (CharacterMancer). Cette fonctionnalité expérimentale permet de simplifier la création d'un PJ. Voir [Informations Techniques]({{ site.baseurl }}/pc-tech) pour les paramètres nécessaires et l'utilisation.

## Check-up

Un autre bouton situé à côté du type de fiche de personnage permet d'afficher un bilan de santé du personnage : nombre de PV, DR, PC (Ombre), PM courants et maximum, états préjudiciables subis, objets tenus en main, nombre d'utilisations restantes des capacités à usage limité, liste des buffs actifs.

Ce bouton peut être épinglé dans la barre d'action de Roll20 par glisser-déposer.

# Caractéristiques

Pour chaque caractéristique, vous pouvez indiquer :
- Son score de base,
- S'il s'agit d'une caractéristique supérieure ou héroïque voire les deux,
- La somme des buffs/debuffs temporaires ou permanents appliqués au score,
- Le score total (base + divers).

Un clic sur le bouton permet de lancer un jet "sec" de caractéristique. Le type de ce jet dépend des circonstances :
- Un d20 de base, avec _dé malus_ si le PJ subit l'état préjudiciable _Affaibli_,
- Un d20 avec _dé bonus_ en cas de caractéristique supérieure/héroïque, sans dé bonus si le PJ est _Affaibli_.
- Un d20 avec _dé bonus_ avec un résultat minimum de 10 en cas de caractéristique supérieure+héroïque, pas de minimum si le PJ est _Affaibli_.

Le texte **Carac** est un bouton qui permet d'afficher un popup Roll20 pour choisir la caractéristique et faire un jet dans le chat.

L'icone située à côté de **Carac** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de caractéristique.

Ces deux boutons/icones peuvent être épinglés dans la barre d'action de Roll20 par glisser-déposer.

# Combat

Cette section présente les scores d'initiative et d'attaques du PJ (contact, distance et magique). Pour chaque attribut :
- La base (10 pour l'initiative, le niveau du PJ pour les attaques),
- La caractéristique ajoutée,
- La somme des buffs/debuffs temporaires ou permanents,
- Le score total (base + divers).

Lorsque le bouton d'initiative est cliqué, si le token du PJ est sélectionné sur la map, le jet est ajouté au _Turn Order_.

Pour les boutons de jets d'attaque, le jet de dé effectué dépend des circonstances :
- Un jet de d20 avec _dé malus_ en cas d'état _Affaibli_,
- Deux jets de d20 sinon. Dans le cas général (jet normal), prenez en compte le premier jet affiché. Prenez le plus élevé des deux jets si le PJ bénéficie d'un _dé bonus_ ou le moins élevé s'il subit un _dé malus_.

# Vigueur

Dans cette section, on trouve :
- Les points de vigueur courants et maximum,
- Le type de dé de récupération, et le nombre de DR courants et maximum,
- Le nombre de DM temporaires encaissés par le PJ.

Les PV et DR max affichés tiennent compte de la famille du profil (+1 DR pour un PJ Mystique) et d'éventuels buffs.

Deux icones permettent de faire varier les PV en saisissant le gain ou la perte dans un popup Roll20. Une formule de dé peut être saisie dans ce popup (_ex_ : <kbd>1d8</kbd>) et le jet correspondant sera effectué. Si nécessaire en cas de perte de PV, la fiche applique l'état préjudiciable _Affaibli_ (1 PV) et la perte de DR (0 PV).

On peut également cliquer sur <kbd>DR</kbd> pour effectuer un jet de Récupération _Rapide_ ou _Complète_, ce qui modifie le nombre de PV courants et décompte un DR du nombre disponible. Si l'option de configuration _High Fantasy_ est active, ce bouton permet aussi d'utiliser la règle optionnelle _Se dépasser_. Les nombres d'utilisations des capacités avec fréquence limitée sont également ré-initialisés : capacités _par combat_ pour une récupération rapide, _par jour_ pour une récupération complète.

# Points de Mana

Dans cette section, on trouve les points de mana courants et maximum. Les PM maximum affichés tiennent compte d'éventuels buffs.

# Etats préjudiciables

Un ensemble d'icones cliquables permettent d'appliquer les effets d'un ou plusieurs états préjudiciables au PJ. Ces effets sont affichés dans le chat Roll20. Une aide visuelle permet d'indiquer si le personnage subit encore au moins un état : si c'est le cas, le cadre autour des icônes est hachuré et de couleur orange.

# Défense

Cette section présente le calcul de la DEF du personnage.
- Les cases à cocher à côté de l'armure, du bouclier et du casque permettent de déterminer si le PJ les porte ou pas et si leurs bonus et malus entrent en compte.
- Le malus de bouclier n'apparaît que si l'option correspondante est activée dans la configuration de la fiche.
- Cocher ou décocher l'une de ces cases coche ou décoche également l'équipement dans l'inventaire du personnage, si la fiche est capable de retrouver le bon élément.
- Le malus d'armure est appliqué aux jets d'AGI si elle est portée (case cochée).
- Le malus du bouclier est appliqué aux jets d'AGI si l'option est active et qu'il est porté (case cochée).
- Le malus du casque est appliqué aux jets de PER et d'Initiative s'il est porté (case cochée).
- La sélection de l'_Action défensive_ applique le bonus correspondant à la DEF.

# Points de Chance

Dans cette section, on trouve les points de chance courants et maximum. Les PC maximums affichés tiennent compte de la famille du profil (+1 PC pour un PJ Aventurier) et d'éventuels buffs.

Si on clique sur l'icone de d20, la fiche récupère les derniers jets de d20 effectués, et les ré-affiche avec le bonus de +10 accordé par la dépense d'un point de chance. Si la règle optionnelle des Points de Chance variables est activée, c'est un jet de d10 qui est ajouté aux derniers jets.

Si on clique sur l'icone de d6, la fiche effectue un test de chance (cf page 206).

# RD (Réduction et Résistance aux dommages)

Cette zone résume les différentes RD et résistances aux DM indiquées dans le sous-onglet _Résistances_. Elle s'affiche dans le chat quand le nombre de PV diminue pour rappeler au joueur de réduire les dommages reçus.

# Sous-onglet _Attaques_

Cet onglet permet d'indiquer les armes et attaques à la disposition du PJ.

Pour chacune, vous indiquez :
- Le nom de l'attaque,
- Le type d'attaque (contact, distance ou magique),
- Un éventuel bonus pour toucher propre à cette attaque,
- Le score de critique du jet (_20_ par défaut),
- Si l'arme est maniée à deux mains uniquement,
- Les dés de DM (ex : <kbd>1d8</kbd>, <kbd>2d6</kbd>, <kbd>1d6/1d10</kbd> pour les armes à une ou deux mains),
- Le type de DM (_ex : contondants, perforants_)
- La caractéristique ajoutée aux DM,
- Un bonus optionnel de DM
- La portée pour une arme à distance
- Un effet spécial ou une description affichée dans le chat Roll20.

Des paramètres optionnels peuvent être ajoutés :
- Type d'attaque : vous pouvez indiquer le type de cette attaque en choisissant parmi
  - Arme en main
  - Arme de jet
  - Arme de trait (utilisé par la gestion simplifiée des munitions intégrée à la fiche)
  - Sortilège
  - Arme naturelle 
  
  Ce paramètre est principalement utilisé par le script **COFantasy2**.

- Seuil d'usure : cette valeur est utilisée si l'option low-fantasy correspondante est activée dans la configuration.

- Attaque active : ce paramètre est utilisé par le script **COFantasy2** pour afficher la liste des actions du tour.

- Modificateurs d'attaque : vous pouvez spécifier une série de mentions spéciales permettant de régler le comportement du jet d'attaque. Séparez les différentes mentions par des virgules.
  - <kbd>deBonus</kbd> : l'attaque est faite avec un dé bonus, sauf si le personnage est _Affaibli_
  - <kbd>deMalus</kbd> : l'attaque est faite avec un dé malus
  - <kbd>explodeMax</kbd> : le dé de DM est _explosif_ (relance d'un nouveau dé de DM en cas de résultat maximum)
  - <kbd>reroll1</kbd> : le dé de DM est relancé jusqu'à ce que son résultat soit supérieur à 1
  - <kbd>reroll1:1</kbd> : si le résultat initial est égal à 1, le dé de DM est relancé une seule fois
  - <kbd>poudre</kbd> : l'arme explose et inflige 1d4° DM à l'utilisateur s'il ne maîtrise pas les armes à poudre
  - <kbd>zone</kbd> : l'attaque est un sort de zone
  - <kbd>magie X</kbd> suivi de la valeur X du bonus au jet pour toucher et aux DM
  - <kbd>magieAtt X</kbd> suivi de la valeur X du bonus magique au jet pour toucher
  - <kbd>magieDmg X</kbd> suivi de la valeur du bonus magique aux DM (peut être un jet de dé)
  - <kbd>affutee</kbd> pour réduire de 1 le seuil de critique et ajouter 1d4° DM en cas de coup critique
  - <kbd>element xxx [intense]</kbd> suivi d'un nom d'élément/substance xxx pour ajouter une ligne de 1d4° DM élémentaires (2d4° si le nom de l'élément est suivi d'un espace et du mot <kbd>intense</kbd>)
  - <kbd>fleau xxx</kbd> suivi du nom d'un type de créature xxx pour que Roll20 demande confirmation lors de l'attaque et qu'une ligne de 1d4° DM soit ajoutée si la créature ciblée est du même type

- Options d'attaques avec arguments :
  
  Ce paramètre est principalement utilisé par le script **COFantasy2**.
  
  Vous pouvez toutefois y indiquer les options suivantes reconnues par la fiche :
  
  - <kbd>fx: </kbd> suivi du nom d'un FX Roll20 et d'un nombre facultatif de répétition
  - <kbd>effet: X xxx</kbd> suivi d'un texte xxx à afficher si le jet de D20 atteint ou dépasse la valeur cible X

- Pour les armes de type _En main_, vous pouvez spécifier une liste de prédicats si l'arme est portée. Ce paramètre est utilisé par le script **COFantasy2**.
- Pour les armes de type _Trait_, vous pouvez spécifier le nom de la munition (utile si le suivi simplifié des munitions est activé dans la configuration) ainsi que le nombre dépensé par chaque attaque
- Pour les armes de type _Jet_, vous pouvez spécifier le nombre disponible, nombre possédé et taux de perte. Ces paramètres sont utilisés par le script **COFantasy2**.

Un clic sur le bouton d20 permet de lancer le jet d'attaque et de DM dans le chat en tenant compte des divers paramètres. 

A moins que l'option de configuration _Un seul jet d'attaque_ ne soit active, deux jets distincts d'attaque sont effectués, sauf si le PJ est _Affaibli_. Dans le cas général (jet normal), prenez en compte le jet de gauche. Prenez le plus élevé des deux jets si le PJ bénéficie d'un _dé bonus_ ou le moins élevé s'il subit un _dé malus_.

Si l'arme est maniée à deux mains et que le bouclier est équipé, le jet d'attaque n'est pas effectué, un message d'avertissement s'affiche à la place.

Si l'arme peut être maniée à une main ou à deux mains, les dés de DM peuvent être indiqués sous la forme <kbd>DM 1m/DM 2m</kbd> (_Ex. : <kbd>1d8/1d12</kbd>_). Un popup Roll20 s'affiche pour demander comment l'arme est maniée, à moins que le bouclier soit équipé, auquel cas ce sont les DM à une main qui sont pris en compte.

Le texte d'effet spécial est traité par la fiche pour substituer les jets en ligne comme décrit pour la description des [capacités]({{ site.baseurl }}/pc-abilities).

L'icone située à côté de **ARME/SORT** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet d'attaque.

Le bouton d20 de l'attaque peut être épinglé dans la barre d'actions de Roll20 par glisser-déposer.

# Sous-onglet _Options_

## Options tactiques

Cette section permet de prendre en compte les options tactiques des attaques. Après sélection de l'option choisie, les effets de celle-ci sont appliqués à n'importe quel jet d'attaque.

## Modificateurs situationnels

Cette section permet de modifier les jets d'attaque à distance en fonction des circonstances sélectionnées. Est considérée comme _à distance_ une attaque utilisant le score d'attaque à distance et ayant une portée indiquée. _Cela évite d'appliquer ces modificateurs à une attaque au contact utilisant l'AGI (ex : barde, voleur)_.

# Sous-onglet _En main_

Ce sous-onglet permet de définir les objets en main principale et main gauche/secondaire.

En main principale, on peut équiper :
- L'une des armes indiquées dans l'onglet Attaques
  
  Les armes _naturelles_ et les _sortilèges_ ne sont pas pris en compte dans la liste
- Une torche,
- Un autre objet.

En main secondaire, on peut équiper :
- Une autre arme,
- L'arme à deux mains choisie en main principale,
- Un bouclier,
- Une torche,
- Un autre objet.

Les règles suivantes s'appliquent :
- Si l'arme équipée en main principale est une arme à deux mains, la main secondaire prend automatiquement la valeur _Tenu à deux mains_.
- Si la main secondaire tient un autre objet que le bouclier, le case _Equipé_ correspondante dans la Défense est décochée.

Selon qu'une arme est équipée ou non, un bouton _d20_ apparaît en regard de chaque main et permet de lancer l'attaque en question.

**NB** : _Les listes déroulantes d'objet sont chargées à l'ouverture de la fiche. En cas de modification de la liste des attaques, il est nécessaire de fermer et ré-ouvrir la fiche._

On peut également indiquer dans ce sous-onglet si le personnage est en selle ou pas.

# Sous-onglet _Résistances_

Ce sous-onglet permet de lister les réductions et résistances aux dommages dont bénéficie le personnage.

---

[Retour]({{ site.baseurl }}/pc-main)