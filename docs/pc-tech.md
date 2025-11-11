# Attributs PJ

Les noms d'attributs Roll20 utilisables dans des macros s'affichent dans des bulles d'aide au survol de la souris sur les éléments de la fiche de personnage. Ils sont listés pour rappel ci-après.

## Caractéristiques

- `agi_base`, `con_base`, `for_base`, `per_base`, `cha_base`, `int_base`, `vol_base` : scores de caractéristiques de base
- `agi_sup`, `con_sup`, `for_sup`, `per_sup`, `cha_sup`, `int_sup`, `vol_sup` : type de jet (N = normal, S = supérieure 
ou héroïque, H = supérieure et héroïque)
- `agi_dsup`, `con_dsup`, `for_dsup`, `per_dsup`, `cha_dsup`, `int_dsup`, `vol_dsup` : expression de dé (selon le type de jet et les états préjudiciables)
- `agi_buff`, `con_buff`, `for_buff`, `per_buff`, `cha_buff`, `int_buff`, `vol_buff` : buffs/debuffs aux caractéristiques
- `agi`, `con`, `for`, `per`, `cha`, `int`, `vol` : scores de caractéristiques _avec buffs/debuffs_
- `tagi_buff`, `tcon_buff`, `tfor_buff`, `tper_buff`, `tcha_buff`, `tint_buff`, `tvol_buff` : buffs/debus aux tests de caractéristiques
- `agi_test`, `con_test`, `for_test`, `per_test`, `cha_test`, `int_test`, `vol_test` : scores de tests de caractéristiques _avec buffs_

## Combat

- `init_buff` : buffs à l'initiative
- `init` : score d'initiative
- `atkcac_base` : base attaque au contact
- `atkcac_buff` : buffs attaque au contact
- `atkcac` : score d'attaque au contact
- `atktir_base` : base attaque à distance
- `atktir_buff` : buffs attaque à distance
- `atktir` : score d'attaque à distance
- `atkmag_base` : base attaque magique
- `atkmag_buff` : buffs attaque magique
- `atkmag` : score d'attaque magique
- `vitesse` : vitesse en mètres
- `vitesse_cases` : vitesse en cases (1,5m = 1 case)
- `vitesse_pas` : vitesse en pas (1,5m = 5 pas)

## Vigueur

- `pv` : PV courants
- `pv_buff` : buffs au maximum de PV
- `pv_max` : PV maximums
- `pvmax_force` : 1 si la valeur max des PV est forcée, 0 sinon
- `drecup` : valeur du dé de récupération (6/8/10)
- `dr` : nombre courant de dés de récupération
- `dr_buff` : buffs au maximum de DR
- `dr_max` : nombre maximum de dés de récupération
- `drmax_force` : 1 si la valeur max des DR est forcée, 0 sinon
- `temp_dm` : dommages temporaires

## Mana, Dé évolutif, Chance

- `pm` : PM courants
- `pm_buff` : buffs au maximum de PM
- `pm_max` : PM maximums
- `pmmax_force` : 1 si la valeur max des PM est forcée, 0 sinon
- `devol` : dé évolutif (d4/d6/d8/d10/d12)
- `pc` : PC courants
- `pc_buff` : buffs au maximum de PC
- `pc_max` : PC maximums
- `pcmax_force` : 1 si la valeur max des PC est forcée, 0 sinon

## Défense

- `def_base` : score de base de Défense
- `armure` : bonus d'armure
- `armure_eqp` : 1 si l'armure est équipée, 0 sinon
- `armure_malus` : malus d'armure
- `bouclier` : bonus de bouclier
- `bouclier_eqp` : 1 si le bouclier est équipé, 0 sinon
- `bouclier_malus` : malus de bouclier (si l'option est activée)
- `casque` : RD du casque contre les DM critiques
- `casque_eqp` : 1 si le casque est équipé, 0 sinon
- `def_car` : caractéristique bonus (agi ou con)
- `def_car_max` : bonus de caractéristique maximum (selon armure)
- `def_buff` : buffs à la Défense
- `def_action` : bonus d'action défensive
- `def` : score de Défense

## Etats préjudiciables

- `condition_affaibli` : 1 si le personnage subit l'état _Affaibli_, 0 sinon
- `condition_aveugle` : 1 si le personnage subit l'état _Aveuglé_, 0 sinon
- `condition_effraye` : 1 si le personnage subit l'état _Effrayé_ (règles de Peur), 0 sinon
- `condition_essoufle` : 1 si le personnage subit l'état _Essouflé_, 0 sinon
- `condition_etourdi` : 1 si le personnage subit l'état _Etourdi_, 0 sinon
- `condition_immobilise` : 1 si le personnage subit l'état _Immobilisé_, 0 sinon
- `condition_invalide` : 1 si le personnage subit l'état _Invalide_, 0 sinon
- `condition_panique` : 1 si le personnage subit l'état _Paniqué_ (règles de Peur), 0 sinon
- `condition_paralyse` : 1 si le personnage subit l'état _Paralysé_, 0 sinon
- `condition_ralenti` : 1 si le personnage subit l'état _Ralenti_, 0 sinon
- `condition_renverse` : 1 si le personnage subit l'état _Renversé_, 0 sinon
- `condition_surpris` : 1 si le personnage subit l'état _Surpris_, 0 sinon

## Objets en main

- `main_princ` : objet en main principale
  
  Valeurs possibles
  - `0` : rien en main
  - `n~xxxxxx~b` : arme en main, cf ci-dessous
  - `torche`
  - `autre` 
- `main_autre` : objet dans l'autre main
  
  Valeurs possibles
  - `0` : rien en main
  - `n~xxxxxx~b` : arme en main, cf ci-dessous
  - `2m` : arme tenue à deux mains
  - `torche`
  - `bouclier` : coche ou décoche la case bouclier de la Défense
  - `autre`
- `en_selle` : 1 si le personnage est en selle, 0 sinon (utile pour la voie du cavalier)

### Arme en main

Si une arme est en main, l'attribut correspondant prend une valeur composée de 3 éléments séparés par `~` :
- `n` : no de label de l'attaque (**999** si le script COFantasy2 n'est pas installé et que les attaques ne sont pas auto-numérotées)
- `xxxxxx` : id de la ligne d'attaque, pour jet si l'icone d20 est cliquée
- `b` : 1 si l'arme est à deux mains, 0 sinon

## Capacités

Les attributs ci-dessous sont déclinés pour toutes les voies (1 à 9) et tous les rangs (1 à 5).

- `voie1nom` : nom de la voie n°1
- `voie1pv` : nombre de PV de la famille de profil de la voie n°1
- `voie1notes` : notes explicatives pour la voie n°1
- `v1br` : rang de base de la voie n°1
- `v1profil` : profil d'appartenance de la voie n°1
- `rang_voie1` : rang du personnage dans la voie n°1
- `v1r1` : 1 si le rang 1 de la voie n°1 possédée, 0 sinon
- `v1r1_spell` 1 si le rang 1 de la voie n°1 est un sort, 0 sinon
- `voie1-t1` : nom de la capacité de rang 1 de la voie n°1
- `voie1-1` : description de la capacité de rang 1 de la voie n°1
- `v1r1_use_max` : nombre d'utilisations maximum de la capacité s'il y a lieu
- `v1r1_freq` : fréquence de renouvellement des utilisations de la capacité s'il y a lieu
- `v1r1_use` : nombre d'utilisations de la capacité
- `v1r1_param` : paramètre optionnel de la capacité
- `v1r1_props` : propriétés optionnelles pour la capacité

Les attributs ci-dessous sont rechargés à chaque fois que la fiche de personnage est ouverte :

- `noms_voies` : liste des noms de voies, séparés par des `|`
- `rangs_voies` : liste des rangs dans les voies, séparés par des `,`
- `noms_rangs` : liste des rangs dans les voies, sous forme de JSON sérialisé 

`[ { id: "v#r#", rank: "nom de la capacité", path: "nom de la voie" }, ... ]`
- `buffs_voies` : liste des valeurs de buffs selon le rang atteint dans les voies

`{ voieN_buff_xxx: valeur, }`

Les attributs ci-dessous servent à déterminer les effets de certaines capacités qui évoluent quand un certain rang est atteint dans d'autres voies du même profil (ex : attaque sournoise du voleur). Ils sont également rechargés à chaque fois que la fiche de personnage est ouverte :

- `voies_rang3` : nombre de voies dans lesquelles le rang 3 est atteint
- `voies_rang4` : nombre de voies dans lesquelles le rang 4 est atteint
- `voies_rang5` : nombre de voies dans lesquelles le rang 5 est atteint

## Buffs / Debuffs

- `agi_buff_list` : liste des buffs/debuffs d'AGI
- `con_buff_list` : liste des buffs/debuffs de CON
- `for_buff_list` : liste des buffs/debuffs de FOR
- `per_buff_list` : liste des buffs/debuffs de PER
- `cha_buff_list` : liste des buffs/debuffs de CHA
- `int_buff_list` : liste des buffs/debuffs d'INT
- `vol_buff_list` : liste des buffs/debuffs de VOL
- `tagi_buff_list` : liste des buffs/debuffs aux tests d'AGI
- `tcon_buff_list` : liste des buffs/debuffs aux tests de CON
- `tfor_buff_list` : liste des buffs/debuffs aux tests de FOR
- `tper_buff_list` : liste des buffs/debuffs aux tests de PER
- `tcha_buff_list` : liste des buffs/debuffs aux tests de CHA
- `tint_buff_list` : liste des buffs/debuffs aux tests d'INT
- `tvol_buff_list` : liste des buffs/debuffs aux tests de VOL
- `allcaracs_buff` : valeur du buff global à tous les tests de caractéristiques
- `allcaracs_desc` : libellé du buff global à tous les tests de caractéristiques
- `init_buff_list` : liste des buffs/debuffs d'Initiative
- `init_cond` : total des debuffs à l'Initiative dus aux états préjudiciables
- `atkcac_buff_list` : liste des buffs/debuffs d'attaque au contact
- `atkcac_cond` : total des debuffs à l'attaque au contact dus aux états préjudiciables
- `atktir_buff_list` : liste des buffs/debuffs d'attaque à distance
- `atktir_cond` : total des debuffs à l'attaque à distance dus aux états préjudiciables
- `atkmag_buff_list` : liste des buffs/debuffs d'attaque magique
- `atkmag_cond` : total des debuffs à l'attaque magique dus aux états préjudiciables
- `allattacks_buff` : valeur du buff global à tous les tests d'attaque
- `allattacks_desc` : libellé du buff global à tous les tests d'attaque
- `def_buff_list` : liste des buffs/debuffs de Défense
- `def_cond` : total des debuffs à la Défense dus aux états préjudiciables
- `dm_buff_list` : liste des buffs/debuffs aux DM
- `pv_buff_list` : liste des buffs/debuffs aux PV
- `dr_buff_list` : liste des buffs/debuffs aux DR
- `pm_buff_list` : liste des buffs/debuffs aux PM
- `pc_buff_list` : liste des buffs/debuffs aux PC

# Persomancien

Un bouton situé à côté du type de fiche de personnage permet de lancer le Persomancien (CharacterMancer). Cette fonctionnalité expérimentale permet de simplifier la création d'un PJ.

**Important** : Pour que ce bouton fonctionne, vous devez ajouter un compendium quelconque aux paramètres de la partie. Vous ne l'utiliserez pas dans le VTT, il permet juste que le bouton d'ouverture du Persomancien soit cliquable.

- Sélectionnez le type de liste de valeurs de caractéristiques (polyvalent, expert ou spécialiste).
- Choisissez une valeur pour chaque caractéristique
- Sélectionnez le peuple du personnage, la liste des bonus/malus aux caractéristiques s'affiche pour rappel.
- Choisissez les bonus/malus aux caractéristiques, la valeur finale est calculée. Attention, le Persomancien ne contrôle pas la validité des choix.
- Choisissez le profil du personnage.
- Vous pouvez demander au Persomancien de charger la liste d'équipement par défaut du profil ainsi que de créer les attaques correspondantes aux armes
- Copiez depuis le PDF des règles le texte de la voie de peuple ou du mage et des deux voies dans lesquelles vous allez choisir vos deux capacités de niveau 1, et collez-le dans le champ correspondant du Persomancien. Vous pouvez également choisir la voie dans laquelle le personnage obtient une capacité de rang 2 si le profil choisi appartient à la famille des mages.

Cliquez sur le bouton Valider pour charger la fiche avec les différentes valeurs choisies dans le Persomancien.

# Effets spéciaux (FX)

Vous pouvez indiquer le nom d'un effet spécial à plusieurs endroits de la fiche :
- Dans la configuration pour les jets de caractéristiques sous la forme `nom-fx nombre`
- Dans les options d'attaque sous la forme `fx: nom-fx nombre`
- Dans les propriétés des capacités sous la forme `fx: nom-fx nombre`

Cette effet spécial est une animation qui sera jouée par Roll20 en même temps que le jet est effectué dans le chat.

Lorsque vous spécifiez un FX, vous devez indiquer :
- son nom : deux mots séparés par un tiret `type-couleur`, cf [documentation Roll20](https://help.roll20.net/hc/en-us/articles/360037258714-Effects-FX-Tool#01J5XWT925BXP979H4MZXC2SJP)
- le nombre de fois où le FX doit être joué (1 par défaut)

Cet effet sera joué en même temps que le jet est affiché dans le chat avec pour origine le token du personnage à condition qu'il soit sélectionné sur la map. Si l'effet est directionnel, Roll20 demandera au joueur de sélectionner un point cible.

# Support des capacités

Certaines capacités de profil sont automatiquement prises en charge par la fiche. Pour ce faire, celle-ci doit être capable de détecter les noms de voies et capacités. La mise en correspondance est faite en ignorant les majuscules/minuscules et accents.

- Arquebusier :
  - Poudre puissante (_Explosifs rang 3_) : portée et bonus au DM
  - Joli coup (_Précision rang 1_) : réduction de la pénalité pour cible au couvert
  - Tir précis (_Précision rang 3_) : augmentation de la plage de critique
- Barbare :
  - Peau de pierre (_Pagne rang 2_) : calcul de la DEF basé sur la CON
- Barde :
  - Charisme héroïque (_Séduction rang 4_) : calcul des PM max basé sur le CHA
- Chevalier :
  - Cavalier émérite (_Cavalier rang 2_) : bonus aux DM et DEF de la monture
- Epiques :
  - Défense héroïque : bonus à la DEF de base
  - Mana épique : bonus aux PM max

# Menus et macros

Divers boutons disséminés dans la fiche permettent d'afficher dans le chat Roll20 des menus avec des listes d'actions. Ces boutons peuvent être configurés en tant que macros Roll20 et insérés dans la barre rapide des macros et/ou configurés en tant qu'action de jetons.

Les macros à configurer sont les suivantes :
- `%{selected|pc_actions-btn}` : menu complet des actions de PJ (voir détail ci-après)
- `%{selected|pc_menus-btn}` : menu de tous les autres sous-menus possibles
- `%{selected|caract_menu-btn}` : menu des jets de caractéristiques
- `%{selected|caract_select-btn}` : popup Roll20 de sélection d'un jet de caractéristique
- `%{selected|etats_menu-btn}` : menu des états préjudiciables
- `%{selected|attacks_menu-btn}` : menu des jets d'attaque
- `%{selected|abilities_menu-btn}` : menu des voies dans lesquelles le personnage possède des capacités
- `%{selected|rolls_menu-btn}` : menu des jets de capacités
- `%{selected|skills_menu-btn}` : popup Roll20 de sélection d'un jet de compétence (si cette option est activée dans la configuration de la fiche)

## Menu des actions

Ce menu permet d'afficher un message de chat avec des boutons d'accès rapide aux actions du personnage :
- Jets de caractéristiques
- Jets d'attaque et d'armes
- Capacités possédées par voies :
  - Sorts
  - Capacités actives (avec une propriété `action` ou `roll`)
  - Capacités pour lesquelles un jet de capacité est configuré sous le même nom
- Jets de capacités supplémentaires (dont le nom ne correspond pas à une capacité possédée)
- Activation ou désactivation de buffs temporaires via un popup Roll20 de sélection
- Jets de compétences via un popup Roll20 de sélection, si l'option est active
- Récupérations et consommables de soins.

# Roll Templates

Ci-dessous la liste des champs utilisables dans chacun des _roll templates_ de la fiche

## cof2

`&{template:cof2} &#123;&#123;nom=valeur &#125;&#125; ... `

Où `nom` :

- `color` : Couleur du message de chat. Utiliser la valeur `@{nom du personnage|couleur_pj}`
- `perso` : Nom du personnage, centré en haut du message de chat
- `lsub` : Sous-titre du message, à gauche
- `rsub` : Sous-titre du message, à droite
- `tags` : Liste d'étiquettes caractérisant le jet (sort (de zone), états préjudiciables, etc...)
- `roll` : Jet de dés (test, attaque)
- `broll` : Deuxième jet de dés (pour gérer les dés bonus/malus)
- `dm` : Jet de dommage (doublé en cas de critique)
- `dmdesc` : Type de dommages
- `dmextra` : Jet de dommage additionnel (non doublé en cas de critique)
- `tohit` : Valeur cible pour qu'une attaque touche
- `target` : Cible de l'attaque
- `heal` : Valeur de PV récupérés
- `text` : Texte descriptif
- `textclass` : Valeur `critical` pour affichage en vert, `fumble` pour affichage en rouge
- `alert` : Texte d'alerte si nécessaire
- `alertclass` : Valeur `critical` pour affichage en vert, `fumble` pour affichage en rouge

Ajouter `@{nom du personnage|token_dsp}` à la fin de la macro pour afficher le token lié à la fiche

## custom

Ce roll-template est une amélioration du template par défaut fourni par Roll20.

`&{template:custom} &#123;&#123;nom=valeur &#125;&#125; ... `

Où `nom` :

- `color` : Couleur du message de chat. Utiliser la valeur `@{nom du personnage|couleur_pj}`
- `token` : Utiliser `@{nom du personnage|token_dsp}` pour afficher le token lié à la fiche
- `title` : Titre du message
- `subtitle` : Sous-titre du message
- `desc` : Ligne de fin du message

L'utilisateur peut indiquer des paires _nom / valeur_ libres, qui sont affichées ligne par ligne entre le titre et le pied du message.

---

[Retour]({{ site.baseurl }}/pc-main)