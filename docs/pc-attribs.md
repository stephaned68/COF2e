# Identité 

- Vous pouvez indiquer pour votre PJ un nom "connu" mais aussi son vrai nom dans le champ Alias. En cliquant sur le label Alias, ce dernier vient remplacer son nom connu. Un message de notification s'affiche dans le chat Roll20.
- Lorsque vous sélectionnez une famille, une liste des profils correspondants est disponible. Si un profil est indiqué, vous devez l'effacer pour voir de nouveau la liste. Vous pouvez indiquer votre profile primaire suivi de / et d'un second profil si votre PJ dispose d'un profil hybride.

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

L'icone située à côté de **Carac** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de caractéristique.

# Combat

Cette section présente les scores d'initiative et d'attaques du PJ (contact, distance et magique). Pour chaque attribut :
- La base (10 pour l'initiative, le niveau du PJ pour les attaques),
- La caractéristique ajoutée,
- La somme des buffs/debuffs temporaires ou permanents,
- Le score total (base + divers).

Lorsque le bouton d'initiative est cliqué, si le token du PJ est sélectionné sur la map, le jet est ajouté au _Turn Order_.

Pour les boutons de jets d'attaque, le jet de dé effectué dépend des circonstances :
- Un jet de d20 avec _dé malus_ en cas d'état _Affaibli_,
- Deux jets de d20 sinon. Le premier jet affiché est pris en compte dans le cas général. Si le PJ bénéficie d'un _dé bonus_ ou d'un _dé malus_, c'est le plus élevé ou le moins élevé des deux jets qui est pris en compte.

# Vigueur

Dans cette section, on trouve :
- Les points de vigueur courants et maximum,
- Le type de dé de récupération, et le nombre de DR courants et maximum,
- Le nombre de DM temporaires encaissés par le PJ.

Les PV et DR max affichés tiennent compte d'éventuels buffs (ex: +1 DR pour un PJ de la famille des Mystiques).

Deux icones permettent de faire varier les PV en saisissant le gain ou la perte dans un popup Roll20. Une formule de dé peut être saisie dans ce popup (_ex_ : <kbd>1d8</kbd>) et le jet correspondant sera effectué. Si nécessaire en cas de perte de PV, la fiche applique l'état préjudiciable _Affaibli_ (1 PV) et la perte de DR (0 PV).

On peut également cliquer sur <kbd>DR</kbd> pour effectuer un jet de Récupération rapide, ce qui modifie le nombre de PV courants et décompte un DR du nombre disponible.

# Points de Mana

Dans cette section, on trouve les points de mana courants et maximum. Les PM maximum affichés tiennent compte d'éventuels buffs.

# Etats préjudiciables

Un ensemble d'icones cliquables permettent d'appliquer les effets d'un ou plusieurs états préjudiciables au PJ. Ces effets sont affichés dans le chat Roll20.

# Défense

Cette section présente le calcul de la DEF du personnage.
- Les cases à cocher à côté de l'armure et du bouclier permettent de déterminer si le PJ les porte ou pas et si leurs bonus entrent en compte.
- Le malus d'encombrement de l'armure est appliqué aux jets d'AGI si elle est portée (case cochée).
- La sélection de l'_Action défensive_ applique le bonus correspondant à la DEF.

# Points de Chance

Dans cette section, on trouve les points de chance courants et maximum. Les PC maximums affichés tiennent compte d'éventuels buffs.

Si on clique sur l'icone de d20, la fiche récupère les derniers jets de d20 effectués, et les ré-affiche avec le bonus de +10 accordé par la dépense d'un point de chance.

Si on clique sur l'icone de d6, la fiche effectue un test de chance (cf page 206).

# Réduction des dommages

Cette zone de texte libre permet d'indiquer la ou les réductions et résistances aux dommages dont bénéficie le PJ. Elle s'affiche dans le chat quand le nombre de PV diminue pour rappeler au joueur de réduire les dommages reçus.

# Armes & attaques

Cette section permet d'indiquer les armes et attaques à la disposition du PJ.

Pour chacune, vous indiquez :
- Le nom de l'attaque,
- Le type d'attaque (contact, distance ou magique),
- Un éventuel bonus pour toucher propre à cette attaque,
- Le score de critique du jet (_20_ par défaut),
- Si l'arme est maniée à deux mains uniquement,
- Les dés de DM (ex : <kbd>1d8</kbd>, <kbd>2d6</kbd>),
- Le type de DM (_ex : contondants, perforants_)
- La caractéristique ajoutée aux DM,
- Un bonus optionnel de DM
- La portée pour une arme à distance
- Un effet spécial ou une description affichée dans le chat Roll20.

Des paramètres optionnels peuvent être ajoutés :
- Type d'attaque : vous pouvez indiquer le type de cette attaque en choisissant parmi
  - Arme naturelle 
  - Sortilège
  - Arme de jet
  
  Ce paramètre est utilisé par le script COFantasy2

- Modificateurs d'attaque : vous pouvez spécifier une série de mentions spéciales permettant de régler le comportement du jet d'attaque. Séparez les différentes mentions par des virgules.
  - <kbd>deBonus</kbd> : l'attaque est faite avec un dé bonus, sauf si le personnage est _Affaibli_
  - <kbd>deMalus</kbd> : l'attaque est faite avec un dé malus
  - <kbd>explodeMax</kbd> : le dé de DM est _explosif_ (relance d'un nouveau dé de DM en cas de résultat maximum)
  - <kbd>reroll1</kbd> : le dé de DM est relancé jusqu'à ce que son résultat soit supérieur à 1
  - <kbd>poudre</kbd> : l'arme explose et inflige 1d4° DM à l'utilisateur s'il ne maîtrise pas les armes à poudre

- Options d'attaques avec arguments : ce paramètre est utilisé par le script COFantasy2

Un clic sur le bouton d20 permet de lancer le jet d'attaque et de DM dans le chat en tenant compte des divers paramètres. Deux jets distincts d'attaque sont effectués, sauf si le PJ est _Affaibli_.

Si l'arme est maniée à deux mains et que le bouclier est équipé, le jet d'attaque n'est pas effectué, un message d'avertissement s'affiche à la place.

Si l'arme peut être maniée à une main ou à deux mains, les dés de DM peuvent être indiqués sous la forme <kbd>DM 1m/DM 2m</kbd> (_Ex. : <kbd>1d8/1d12</kbd>_). Un popup Roll20 s'affiche pour demander comment l'arme est maniée, à moins que le bouclier soit équipé, auquel cas ce sont les DM à une main qui sont pris en compte.

Le texte d'effet spécial est traité par la fiche pour substituer les jets en ligne comme décrit pour la description des [capacités]({{ site.baseurl }}/pc-abilities).

L'icone située à côté de **ARME/SORT** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet d'attaque.

# Options tactiques

Cette section permet de prendre en compte les options tactiques des attaques. Après sélection de l'option choisie, les effets de celle-ci sont appliqués à n'importe quel jet d'attaque.

# Modificateurs situationnels

Cette section permet de modifier les jets d'attaque à distance en fonction des circonstances sélectionnées. Est considérée comme _à distance_ une attaque utilisant le score d'attaque à distance et ayant une portée indiquée. _Cela évite d'appliquer ces modificateurs à une attaque au contact utilisant l'AGI (ex : barde, voleur)_.

---

[Retour]({{ site.baseurl }}/pc-main)