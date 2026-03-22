# Sous-onglet _Attaques_

Cet onglet permet d'indiquer les armes et attaques à la disposition du PJ.

Pour chacune, vous indiquez :
- Le nom de l'attaque,
- Le type d'attaque (contact, distance ou magique),
- Un bonus optionnel pour toucher propre à cette attaque,
- Le score de critique du jet (_20_ par défaut),
- Si l'arme est maniée à deux mains uniquement,
- Les dés de DM (ex : `1d8`, `2d6`, `1d6/1d10` pour les armes à une ou deux mains),
- Le type de DM (_ex : contondants, perforants_)
- Le bonus de caractéristique ajouté aux DM s'il y a lieu,
- Un bonus optionnel de DM
- La portée pour une arme à distance

Si la fiche reconnaît le nom de l'arme, elle assigne automatiquement ces paramètres.

Des paramètres optionnels peuvent être ajoutés :
- Un effet spécial ou une description affichée dans le chat Roll20. Ce texte peut comporter des commandes de chat Roll20. Les références aux attributs du personnage peuvent être reconnues et remplacées par leurs valeurs effectives si vous les insérez entre `[...]`.
- Un effet prolongé propre à cette attaque (par exemple, des DM ou un état préjudiciable sur plusieurs rounds). Vous pouvez indiquer jusqu'à 4 paramètres textuels dont les 3 derniers sont optionnels :
  - l'effet prolongé. Il peut contenir une formule de dé pour des DM
  - le nom de l'effet, si vous souhaitez qu'il soit différent du nom de l'attaque
  - la durée de l'effet. Elle peut être spécifiée sous forme d'une valeur fixe ou d'une expression faisant référence à un attribut du personnage (_ex: `[INT]` rounds pour la durée d'un sort_)
  - un texte permettant de rappeler les conditions dans lesquelles l'effet stoppe, si aucune durée n'est indiquée

  Si un effet prolongé est paramétré sur une attaque, un bouton avec une icone _Recycler_ apparait afin d'effectuer un jet pour cet effet. De plus, si le script MOD **AddCustomTurn** est disponible, une entrée personnalisée est ajoutée au Turn-Order Roll20 lorsque l'attaque est effectuée.
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
  - `deBonus` : l'attaque est faite avec un dé bonus, sauf si le personnage est _Affaibli_
  - `deMalus` : l'attaque est faite avec un dé malus
  - `explodeMax` : le dé de DM est _explosif_ (relance d'un nouveau dé de DM en cas de résultat maximum)
  - `reroll1` : le dé de DM est relancé jusqu'à ce que son résultat soit supérieur à 1
  - `reroll1:1` : si le résultat initial est égal à 1, le dé de DM est relancé une seule fois
  - `poudre` : l'arme explose et inflige 1d4° DM à l'utilisateur s'il ne maîtrise pas les armes à poudre
  - `zone` : l'attaque est un sort de zone
  - `magie X` suivi de la valeur X du bonus au jet pour toucher et aux DM
  - `magieAtt X` suivi de la valeur X du bonus magique au jet pour toucher
  - `magieDmg X` suivi de la valeur du bonus magique aux DM (peut être un jet de dé)
  - `affutee` pour réduire de 1 le seuil de critique et ajouter 1d4° DM en cas de coup critique
  - `element xxx [intense]` suivi d'un nom d'élément/substance xxx : ajoute une ligne de 1d4° DM élémentaires (2d4° si le nom de l'élément est suivi d'un espace et du mot `intense`)
  - `fleau xxx` suivi du nom d'un type de créature xxx : Roll20 demande confirmation lors de l'attaque et une ligne de 1d4° DM est ajoutée si la créature ciblée est du même type
  - `manoeuvres` : l'attaque propose de choisir une des 8 manoeuvres possibles (cf règles page 217) et d'appliquer le modificateur correspondant au jet pour toucher. La description des effets de la manoeuvre sont chuchotés dans le chat Roll20.

- Options d'attaques avec arguments :
  
  Ce paramètre est principalement utilisé par le script **COFantasy2**.
  
  Vous pouvez toutefois y indiquer les options suivantes reconnues par la fiche :
  
  - `fx: ` suivi du nom d'un FX Roll20 et d'un nombre facultatif de répétition
  - `effet: X xxx` suivi d'un texte xxx à afficher si le jet de D20 atteint ou dépasse la valeur cible X

- Pour les armes de type _En main_, vous pouvez spécifier une liste de prédicats si l'arme est portée. Ce paramètre est utilisé par le script **COFantasy2**.
- Pour les armes de type _Trait_, vous pouvez spécifier le nom de la munition (utile si le suivi simplifié des munitions est activé dans la configuration) ainsi que le nombre dépensé par chaque attaque
- Pour les armes de type _Jet_, vous pouvez spécifier le nombre disponible, nombre possédé et taux de perte. Ces paramètres sont utilisés par le script **COFantasy2**.

Un clic sur le bouton d20 permet de lancer le jet d'attaque et de DM dans le chat en tenant compte des divers paramètres. 

A moins que l'option de configuration _Un seul jet d'attaque_ ne soit active, deux jets distincts d'attaque sont effectués, sauf si le PJ est _Affaibli_ ou _Immobilisé_. En cas de jet normal, prenez en compte le premier jet affiché. Prenez le plus élevé des deux jets si le PJ bénéficie d'un _dé bonus_ ou le moins élevé s'il subit un _dé malus_.

Si l'arme est maniée à deux mains et que le bouclier est équipé, le jet d'attaque n'est pas effectué, un message d'avertissement s'affiche à la place.

Si l'arme peut être maniée à une main ou à deux mains, les dés de DM peuvent être indiqués sous la forme `DM 1m/DM 2m` (_Ex. : `1d8/1d12`_). Un popup Roll20 s'affiche pour demander comment l'arme est maniée, à moins que le bouclier soit équipé, auquel cas ce sont les DM à une main qui sont pris en compte.

Le texte d'effet spécial est traité par la fiche pour substituer les jets en ligne comme décrit pour la description des [capacités]({{ site.baseurl }}/pc-abilities).

L'icone située à côté de **ARME/SORT** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet d'attaque.

Si l'option _Attaques ciblées_ est active, cliquer sur le bouton d'attaque demande au joueur de sélectionner le token de la cible et le résultat du jet d'attaque est comparé à sa Défense pour en déterminer le succès ou l'échec.

Le bouton d20 de l'attaque peut être épinglé dans la barre d'actions de Roll20 par glisser-déposer.

## Affichage des options tactiques

Si l'option _Options tactiques favorites_ est active, la liste déroulante des options standard est affichée au-dessus de la liste des attaques, ainsi qu'un nombre paramétrable (de 3 à 5) d'options tactiques spécifiques. Si le personnage en possède plus du nombre paramétré, la fiche affiche de préférence celle(s) dont le nom se termine par `*` (options favorites), sinon ce sont les 3 à 5 premières par ordre d'affichage dans le sous-onglet _Options_.

Il est ainsi possible d'activer ou de désactiver des options personnalisées directement depuis le sous-onglet _Attaques_.

---

[Retour]({{ site.baseurl }}/pc-attribs)