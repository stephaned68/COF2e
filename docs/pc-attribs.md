# Identité 

- Vous pouvez indiquer pour votre PJ un nom "connu" mais aussi son vrai nom dans le champ Alias. En cliquant sur le label Alias, ce dernier vient remplacer son nom connu. Un message de notification s'affiche dans le chat Roll20.
- Lorsque vous sélectionnez une famille, une liste des profils correspondants est disponible. Si un profil est indiqué, vous devez l'effacer pour voir de nouveau la liste. Vous pouvez indiquer votre profile primaire suivi de / et d'un second profil si votre PJ dispose d'un profil hybride.
- Lorsque vous spécifiez un peuple, la fiche vérifie si ce peuple dispose d'un sens spécial (_Lumière des étoiles_ ou _Vision dans le noir_) et le charge automatiquement ainsi que sa portée.

## Persomancien

Un bouton situé à côté du type de fiche de personnage permet de lancer le Persomancien (CharacterMancer). Cette fonctionnalité expérimentale permet de simplifier la création d'un PJ. Voir [Informations Techniques]({{ site.baseurl }}/pc-tech) pour les paramètres nécessaires et l'utilisation.

## Check-up

Un autre bouton situé à côté du type de fiche de personnage permet d'afficher un bilan de santé du personnage : nombre de PV, DR, PC (Ombre), PM courants et maximum, états préjudiciables subis, objets tenus en main, nombre d'utilisations restantes des capacités à usage limité, liste des buffs actifs.

Ce bouton peut être épinglé dans la barre d'action de Roll20 par glisser-déposer.

# Caractéristiques

Pour chaque caractéristique, vous pouvez indiquer :
- Son score de base,
- S'il s'agit d'une caractéristique supérieure ou héroïque voire les deux

Deux case supplémentaires sont calculées par la fiche :
- La somme des buffs/debuffs temporaires ou permanents appliqués au score,
- Le score total (base + divers).

Un clic sur le bouton permet de lancer un jet "sec" de caractéristique. Le type de ce jet dépend des circonstances :
- Un d20 de base, avec _dé malus_ si le PJ subit l'état préjudiciable _Affaibli_,
- Un d20 avec _dé bonus_ en cas de caractéristique supérieure/héroïque, sans dé bonus si le PJ est _Affaibli_.
- Un d20 avec _dé bonus_ avec un résultat minimum de 10 en cas de caractéristique supérieure+héroïque, pas de minimum si le PJ est _Affaibli_.

Si des jets de capacités sont liés à la caractéristique, ou bien que l'option _Compétences_ est active, le clic sur le bouton affiche un popup Roll20 de sélection permettant de choisir le type de jet à faire (jet "sec", de capacité ou de compétence). Les compétences affichées sont celles dans lequel le personnage a un bonus (qu'il les maîtrise ou pas).

Un deuxième bouton `+` permet de faire le même jet de caractéristique mais en affichant un popup Roll20 afin que le joueur puisse saisir un éventuel modificateur (bonus/malus) accordé selon les circonstances par le MJ.

Le texte **Carac** est un bouton qui permet d'afficher un popup Roll20 pour choisir la caractéristique et faire un jet dans le chat.

L'icone située à côté de **Carac** permet d'afficher un menu d'action dans le chat avec un bouton pour chaque jet de caractéristique.

Ces deux boutons/icones peuvent être épinglés dans la barre d'action de Roll20 par glisser-déposer.

## Aider

Si le script MOD _ChatSetAttr_ est activé dans la configuration de la fiche, un bouton _Aider_ s'affiche dans le message de chat lorsqu'un jet de caractéristique est effectué. Cliquer sur ce bouton affiche un popup Roll20 qui demande de cliquer sur le token du personnage qui doit recevoir le bonus d'aide.

Plusieurs personnages peuvent ainsi faire un jet puis cliquer sur _Aider_, les bonus obtenus sont mémorisés dans la fiche du personnage qui reçoit l'assistance. 

Dès que le personnage assisté fait lui-même un jet de caractéristique, de capacité ou de compétence, tous les bonus reçus sont ajoutés à son jet, puis effacés.

# Combat

Cette section présente les scores d'initiative et d'attaques du PJ (contact, distance et magique). Pour chaque attribut :
- La base (10 pour l'initiative, le niveau du PJ pour les attaques),
- La caractéristique ajoutée,
- La somme des buffs/debuffs temporaires ou permanents,
- Le score total (base + divers).

Lorsque le bouton d'initiative est cliqué, si le token du PJ est sélectionné sur la map, le jet est ajouté au _Turn Order_.

Pour les boutons de jets d'attaque, le jet de dé effectué dépend des circonstances :
- Un jet de d20 avec _dé malus_ en cas d'état _Affaibli_ ou _Immobilisé_,
- Deux jets de d20 sinon. En cas de jet normal, prenez en compte le premier jet affiché. Prenez le plus élevé des deux jets si le PJ bénéficie d'un _dé bonus_ ou le moins élevé s'il subit un _dé malus_.

Une icône en forme d'éclair à côté du mot Combat permet d'activer ou désactiver les manoeuvres. Lorsque les boutons des jets d'attaque au contact ou à distance sont cliqués, la fiche propose alors d'utiliser l'une des manoeuvres spéciales dans un popup Roll20 et applique le modificateur approprié au résultat du jet. Les effets de la manoeuvre sont chuchotés au MJ dans le chat Roll20.

Si l'option _Attaques ciblées_ est active, cliquer sur l'un des boutons d'attaque demande au joueur de sélectionner le token de la cible et le résultat du jet d'attaque est comparé à sa Défense pour en déterminer le succès ou l'échec.

# Déplacement et sens

Cette section permet d'indiquer la vitesse de déplacement et les sens spéciaux du personnage.

La vitesse de base est exprimée en mètres par round, et la fiche calcule automatiquement l'équivalent en nombre de cases et en pas (pieds). Les approximations adoptées sont de 1 case = 1,5 m = 5 pas (échelles les plus courantes). Il n'est pas possible pour la fiche de retrouver l'échelle de la carte actuellement affichée.

Les sens spéciaux proposés par défaut sont _Lumière des étoiles_ et _Vision dans le noir_ mais il est possible de saisir autre chose. La portée du sens _Vision dans le noir_ est automatiquement chargée en fonction du peuple.

# Vigueur

Dans cette section, on trouve :
- Les points de vigueur courants et maximum,
- Le type de dé de récupération, et le nombre de DR courants et maximum,
- Le nombre de DM temporaires encaissés par le PJ.

Les PV et DR max affichés tiennent compte de la famille du profil (+1 DR pour un PJ Mystique) et d'éventuels buffs.

Deux icones permettent de faire varier les PV en saisissant le gain ou la perte dans un popup Roll20. Une formule de dé peut être saisie dans ce popup (_ex_ : <kbd>1d8</kbd>) et le jet correspondant sera effectué. Si nécessaire en cas de perte de PV, la fiche applique l'état préjudiciable _Affaibli_ (1 PV) et la perte de DR (0 PV).

On peut également cliquer sur <kbd>DR</kbd> pour effectuer un jet de Récupération _Rapide_ ou _Complète_, ce qui modifie le nombre de PV courants et décompte un DR du nombre disponible. Si l'option de configuration _High Fantasy_ est active, ce bouton permet aussi d'utiliser la règle optionnelle _Se dépasser_. Les nombres d'utilisations des capacités avec fréquence limitée sont également ré-initialisés : capacités _par combat_ pour une récupération rapide, _par jour_ pour une récupération complète.

Les DM temporaires encaissés et les PV restants sont contrôlés par la fiche, et lorsque les premiers deviennent supérieurs aux seconds, les effets prévus sont appliqués selon le type de DM à l'origine de la bascule.

# Points de Mana

Dans cette section, on trouve les points de mana courants et maximum. Les PM maximum affichés tiennent compte d'éventuels buffs.

Si les options de configuration _Compagnon du Joueur_ autorisent l'utilisation des nouveaux profils et que le personnage est un Psionique, une seconde section permet d'afficher les Points d'Ego courants et maximum. Le texte **PE** est cliquable et permet de choisir une récupération rapide ou complète des Points d'Ego.

# Etats préjudiciables

Un ensemble d'icones cliquables permettent d'appliquer les effets d'un ou plusieurs états préjudiciables au PJ. Ces effets sont affichés dans le chat Roll20. Une aide visuelle permet d'indiquer si le personnage subit encore au moins un état : si c'est le cas, le cadre autour des icônes est hachuré et de couleur orange.

Un bouton permet d'afficher un popup Roll20 pour afficher la liste des états et choisir un état à activer ou désactiver. Ceux déjà subis par le personnage sont signalés par un rond rouge dans la liste, les autres sont marqués d'un rond vert.

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

# Sous-onglet [_Attaques_]({{ site.baseurl }}/pc-attribs/attacks)

# Sous-onglet [_Options_]({{ site.baseurl }}/pc-attribs/options)

# Sous-onglet [_En main_]({{ site.baseurl }}/pc-attribs/inhand)

# Sous-onglet _Résistances_

Ce sous-onglet permet de lister les réductions et résistances aux dommages dont bénéficie le personnage.

---

[Retour]({{ site.baseurl }}/pc-main)