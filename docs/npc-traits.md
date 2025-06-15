# Identité 

Vous pouvez indiquer pour votre PNJ un nom "connu" mais aussi son vrai nom dans le champ Alias. En cliquant sur le label Alias, ce dernier vient remplacer son nom connu. Un message de notification s'affiche dans le chat Roll20.

# Caractéristiques

Pour chacune des 7 caractéristiques, vous indiquez :
- Son score,
- S'il s'agit d'une caractéristique _supérieure_ (les jets de d20 sont effectués avec un _dé bonus_).

Vous indiquez également :
- Les PV courants et maximum,
- Le score d'Initiative,
- Le score de Défense,
- Les différentes RD.

Des boutons permettent de faire des jets de caractéristiques et d'Initiative.

Le texte **Caractéristiques** est un bouton qui permet d'afficher une liste de sélection d'une caractéristique pour faire un jet dans le chat.

L'icone située à côté de **Caractéristiques** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de caractéristique.

Ces deux boutons/icones peuvtn être épinglés dans la barre d'action de Roll20 par glisser-déposer.

# Description

Cette zone de texte libre permet de préciser des informations générales sur le PNJ ou la créature.

# Sous-onglet _Attaques_

Cette liste contient les attaques dont le PNJ dispose en combat. Pour chaque attaque, vous indiquez :
- Son nom,
- S'il faut effectuer des attaques multiples,
- Si le jet d'attaque est normal, bénéficie d'un _dé bonus_ ou subit un _dé malus_,
- Le score d'attaque ajouté au d20,
- Le seuil de réussite critique de l'attaque,
- Le ou les dés de DM à lancer,
- Le type de DM (_contondants_, _morsure_, etc...),
- Un bonus/malus à ajouter aux DM,
- La portée de l'attaque à distance,
- Un effet spécial ou description de l'attaque.

Des paramètres optionnels peuvent être ajoutés :
- Type d'attaque : vous pouvez indiquer le type de cette attaque en choisissant parmi
  - Arme naturelle 
  - Arme en main
  - Sortilège
  - Arme de jet
  
  Ce paramètre est utilisé par le script COFantasy2

- Modificateurs d'attaque : vous pouvez spécifier une série de mentions spéciales permettant de régler le comportement du jet d'attaque. Séparez les différentes mentions par des virgules.
  - <kbd>deBonus</kbd> : l'attaque est faite avec un dé bonus, sauf si le personnage est _Affaibli_
  - <kbd>deMalus</kbd> : l'attaque est faite avec un dé malus
  - <kbd>explodeMax</kbd> : le dé de DM est _explosif_ (relance d'un nouveau dé de DM en cas de résultat maximum)
  - <kbd>reroll1</kbd> : le dé de DM est relancé jusqu'à ce que son résultat soit supérieur à 1
  - <kbd>poudre</kbd> : l'arme explose et inflige 1d4° DM à l'utilisateur s'il ne maîtrise pas les armes à poudre

- Options d'attaques avec arguments : ce paramètre est principalement utilisé par le script **COFantasy2**.
  
  Vous pouvez toutefois y indiquer l'option suivante reconnue par la fiche :
  
  - <kbd>fx: </kbd> suivi du nom d'un FX Roll20 et d'un nombre facultatif de répétition
  
- Cible : vous indiquez un texte à afficher si le jet de D20 atteint ou dépasse la valeur cible

Un clic sur le bouton d20 permet de lancer le jet d'attaque et de DM dans le chat en tenant compte des divers paramètres. Si la case d'attaques multiples est cochée et que le nom de l'attaque contient le motif <kbd>(n attaques)</kbd>, le nombre n de jets d'attaque est effectué.

Le texte d'effet spécial est traité par la fiche pour substituer les jets en ligne comme décrit pour la description des [capacités des PJs]({{ site.baseurl }}/pc-abilities).

Le bouton d20 de l'attaque peut être épinglé dans la barre d'actions de Roll20 par glisser-déposer.

## Attaque groupée

Cette section permet de gérer les bonus pour toucher d'un groupe de 2 à 8 créatures attaquant la même cible.

A partir de 5 créatures, la fiche effectue deux attaques, en répartissant le nombre de créatures en deux groupes.

## Coups spéciaux

Cette section permet de définir jusqu'à 3 coups spéciaux que la créature peut utiliser quand elle attaque.
Pour chaque coup, vous devez indiquer :
- Le nom de celui-ci
- Si le jet d'attaque bénéficie d'un dé bonus ou subit un dé malus
- Un éventuel bonus au jet d'attaque procuré par l'utilisation de ce coup spécial
- Un éventuel bonus au jet de DM procuré par l'utilisation de ce coup spécial

La sélection d'un coup spécial applique les bonus spécifiés à toutes les attaques effectuées ensuite.

Vous pouvez également activer l'une des options tactiques (attaque assurée, précise ou violente) en cochant la case correspondante. Elles sont mutuellement exclusives.

# Sous-onglet _Capacités_

Cette liste contient les capacités spéciales du PNJ. Pour chacune, vous indiquez son nom et sa description.

Un clic sur le bouton d20 envoie un message dans le chat Roll20 avec le nom et la description. Le texte de la description est traité par la fiche pour substituer les jets en ligne comme décrit pour la description des [capacités des PJs]({{ site.baseurl }}/pc-abilities).

Le bouton d20 de la capacité peut être épinglé dans la barre d'actions de Roll20 par glisser-déposer.

# Sous-onglet _Notes_

Ce sous-onglet permet de noter diverses informations complémentaires sur le PNJ ou la créature :
- Ses tactiques de combat
- Des notes diverses

---

[Retour]({{ site.baseurl }}/npc-main)