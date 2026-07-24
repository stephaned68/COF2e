# Propriétés des capacités

Les propriétés suivantes peuvent être configurées dans les capacités. Le nom de la propriété doit être immédiatement suivi de `:` et d'un espace.

## Animation (fx)

`fx: xxxxx N`

Vous pouvez indiquer le nom d'une animation `xxxxxx` et un nombre éventuel `N` de répétitions pour que la fiche joue un FX Roll20 (commande `/fx`) lorsque la capacité est utilisée.

_Exemple :_

_Afficher une explosion de paillettes roses quand une capacité est utilisée en cliquant sur la bulle_

`fx: nova-charm 6`

## Points de Mana (pm)

`pm: N` 

Vous pouvez indiquer un nombre pour faire varier le nombre de PM consommés par cette capacité. Ce nombre peut être absolu (`pm: 3` pour consommer 3 PM) ou relatif (`pm: -1` pour consommer 1 PM de moins que la normale).

## Points d'Ego (pe)

`pe: N` 

Idem ci-dessus pour les Points d'Ego du Psionique (profil optionnel du _Compagnon_).

## Effet selon le rang (selonRang)

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

### Avec création d'un attribut personnalisé

Vous pouvez optionnellement précéder la liste des valeurs d'un nom d'attribut et d'un signe `|`.

`selonRang: attribut|valeur1,valeur2,valeur3,valeur4,valeur5`

_Exemple :_

`selonRang: dm-arcfeu|valeur1,valeur2,valeur3,valeur4,valeur5`

Cette syntaxe permet de créer un attribut _dm-arcfeu_ que vous pouvez ensuite utiliser dans une macro Roll20 à l'aide de la syntaxe habituelle `@{dm-arcfeu}`.

## Buff selon rang (buff)

`buff: xxx|valeur1,valeur2,valeur3,valeur4,valeur5` 

Vous pouvez indiquer un identifiant xxx suivi d'un `|` et d'une série de 5 valeurs séparées par des virgules. La fiche crée un attribut nommé `voieN_buff_xxxx`, où `N` correspond au no de la voie où figure la capacité, et dont la valeur évolue selon le rang atteint dans la voie.

_Exemple :_

_Paramétrer le buff à la DEF octroyé par la capacité __Peau de pierre__ selon le rang atteint dans la __Voie du Pagne__ renseignée en voie n°3_

`buff: def|0,1,1,2,2`

_Cette propriété crée une valeur nommée `voie3_buff_def`. Cette valeur change selon le rang atteint dans la voie n°3 en utilisant l'énumération indiquée après `|` : 0 au rang 1, 1 au rang 2, 2 à partir du rang 4. Cette valeur peut être indiquée comme attribut dans une ligne de buff en spécifiant le nom `[voie3_buff_def]`_

## Capacité épique (epic)

`epic: `

Vous pouvez identifier la capacité comme étant de type _épique_.

## Jet (roll)

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

## Menu des actions (action)

`action: `

Vous pouvez marquer la capacité comme _active_ afin qu'un bouton d'action lui soit assigné dans le menu des actions dans le chat.

## Effets étendus (etendu)

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

## PC orphelin (pcorphelin)

`pcorphelin: `

En cas de point de capacité orphelin, cette propriété doit être indiquée pour la dernière capacité de rang 2 acquise afin que le calcul automatique des PV maximum soit correct.

## Capacités des mages (mage)

`mage: `

Cette propriété doit être indiquée pour les capacités de sort supplémentaires acquises via le sacrifice d'une caractéristique physique. Elle permet d'ajuster le calcul automatique des PV.