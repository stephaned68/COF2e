# Attributs PJ

Les noms d'attributs Roll20 utilisables dans des macros s'affichent dans des bulles d'aide au survol de la souris sur les éléments de la fiche de personnage. Ils sont listés pour rappel ci-après.

## Caractéristiques

- <kbd>agi_base</kbd>, <kbd>con_base</kbd>, <kbd>for_base</kbd>, <kbd>per_base</kbd>, <kbd>cha_base</kbd>, <kbd>int_base</kbd>, <kbd>vol_base</kbd> : scores de caractéristiques de base
- <kbd>agi_sup</kbd>, <kbd>con_sup</kbd>, <kbd>for_sup</kbd>, <kbd>per_sup</kbd>, <kbd>cha_sup</kbd>, <kbd>int_sup</kbd>, <kbd>vol_sup</kbd> : type de jet (N = normal, S = supérieure 
ou héroïque, H = supérieure et héroïque)
- <kbd>agi_dsup</kbd>, <kbd>con_dsup</kbd>, <kbd>for_dsup</kbd>, <kbd>per_dsup</kbd>, <kbd>cha_dsup</kbd>, <kbd>int_dsup</kbd>, <kbd>vol_dsup</kbd> : expression de dé (selon le type de jet et les états préjudiciables)
- <kbd>agi_buff</kbd>, <kbd>con_buff</kbd>, <kbd>for_buff</kbd>, <kbd>per_buff</kbd>, <kbd>cha_buff</kbd>, <kbd>int_buff</kbd>, <kbd>vol_buff</kbd> : buffs/debuffs aux caractéristiques
- <kbd>agi</kbd>, <kbd>con</kbd>, <kbd>for</kbd>, <kbd>per</kbd>, <kbd>cha</kbd>, <kbd>int</kbd>, <kbd>vol</kbd> : scores de caractéristiques _avec buffs/debuffs_
- <kbd>tagi_buff</kbd>, <kbd>tcon_buff</kbd>, <kbd>tfor_buff</kbd>, <kbd>tper_buff</kbd>, <kbd>tcha_buff</kbd>, <kbd>tint_buff</kbd>, <kbd>tvol_buff</kbd> : buffs/debus aux tests de caractéristiques
- <kbd>agi_test</kbd>, <kbd>con_test</kbd>, <kbd>for_test</kbd>, <kbd>per_test</kbd>, <kbd>cha_test</kbd>, <kbd>int_test</kbd>, <kbd>vol_test</kbd> : scores de tests de caractéristiques _avec buffs_

## Combat

- <kbd>init_buff</kbd> : buffs à l'initiative
- <kbd>init</kbd> : score d'initiative
- <kbd>atkcac_base</kbd> : base attaque au contact
- <kbd>atkcac_buff</kbd> : buffs attaque au contact
- <kbd>atkcac</kbd> : score d'attaque au contact
- <kbd>atktir_base</kbd> : base attaque à distance
- <kbd>atktir_buff</kbd> : buffs attaque à distance
- <kbd>atktir</kbd> : score d'attaque à distance
- <kbd>atkmag_base</kbd> : base attaque magique
- <kbd>atkmag_buff</kbd> : buffs attaque magique
- <kbd>atkmag</kbd> : score d'attaque magique

## Vigueur

- <kbd>pv</kbd> : PV courants
- <kbd>pv_buff</kbd> : buffs au maximum de PV
- <kbd>pv_max</kbd> : PV maximums
- <kbd>pvmax_force</kbd> : 0/1 pour forcer la valeur max des PV
- <kbd>drecup</kbd> : valeur du dé de récupération (6/8/10)
- <kbd>dr</kbd> : nombre courant de dés de récupération
- <kbd>dr_buff</kbd> : buffs au maximum de DR
- <kbd>dr_max</kbd> : nombre maximum de dés de récupération
- <kbd>drmax_force</kbd> : 0/1 pour forcer la valeur max des DR
- <kbd>temp_dm</kbd> : dommages temporaires

## Mana, Dé évolutif, Chance

- <kbd>pm</kbd> : PM courants
- <kbd>pm_buff</kbd> : buffs au maximum de PM
- <kbd>pm_max</kbd> : PM maximums
- <kbd>pmmax_force</kbd> : 0/1 pour forcer la valeur max des PM
- <kbd>devol</kbd> : dé évolutif (d4/d6/d8/d10/d12)
- <kbd>pc</kbd> : PC courants
- <kbd>pc_buff</kbd> : buffs au maximum de PC
- <kbd>pc_max</kbd> : PC maximums
- <kbd>pcmax_force</kbd> : 0/1 pour forcer la valeur max des PC

## Défense

- <kbd>def_base</kbd> : score de base de Défense
- <kbd>armure</kbd> : bonus d'armure
- <kbd>armure_eqp</kbd> : 0/1 selon que l'armure soit équipée ou pas
- <kbd>armure_malus</kbd> : malus d'armure
- <kbd>bouclier</kbd> : bonus de bouclier
- <kbd>bouclier_eqp</kbd> : 0/1 selon que le bouclier soit équipé ou pas
- <kbd>bouclier_malus</kbd> : malus de bouclier (si l'option est activée)
- <kbd>casque</kbd> : RD du casque contre les DM critiques
- <kbd>casque_eqp</kbd> : 0/1 selon que le casque soit équipé ou pas
- <kbd>def_car</kbd> : caractéristique bonus (agi ou con)
- <kbd>def_car_max</kbd> : bonus de caractéristique maximum (selon armure)
- <kbd>def_buff</kbd> : buffs à la Défense
- <kbd>def_action</kbd> : bonus d'action défensive
- <kbd>def</kbd> : score de Défense

## Etats préjudiciables

- <kbd>condition_affaibli</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Affaibli_
- <kbd>condition_aveugle</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Aveuglé_
- <kbd>condition_effraye</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Effrayé_ (règles de Peur)
- <kbd>condition_essoufle</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Essouflé_
- <kbd>condition_etourdi</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Etourdi_
- <kbd>condition_immobilise</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Immobilisé_
- <kbd>condition_invalide</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Invalide_
- <kbd>condition_panique</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Paniqué_ (règles de Peur)
- <kbd>condition_paralyse</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Paralysé_
- <kbd>condition_ralenti</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Ralenti_
- <kbd>condition_renverse</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Renversé_
- <kbd>condition_surpris</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Surpris_

## Objets en main

- <kbd>main_princ</kbd> : objet en main principale
  
  Valeurs possibles
  - <kbd>0</kbd> : rien en main
  - <kbd>n~xxxxxx~b</kbd> : arme en main, cf ci-dessous
  - <kbd>torche</kbd>
  - <kbd>autre</kbd> 
- <kbd>main_autre</kbd> : objet dans l'autre main
  
  Valeurs possibles
  - <kbd>0</kbd> : rien en main
  - <kbd>n~xxxxxx~b</kbd> : arme en main, cf ci-dessous
  - <kbd>2m</kbd> : arme tenue à deux mains
  - <kbd>torche</kbd>
  - <kbd>bouclier</kbd> : coche ou décoche la case bouclier de la Défense
  - <kbd>autre</kbd>
- <kbd>en_selle</kbd> : 0/1 selon que le personnage soit en selle ou pas (utile pour la voie du cavalier)

### Arme en main

Si une arme est en main, l'attribut correspondant prend une valeur composée de 3 éléments séparés par <kbd>~</kbd> :
- <kbd>n</kbd> : no de label de l'attaque (**999** si le script COFantasy2 n'est pas installé et que les attaques ne sont pas auto-numérotées)
- <kbd>xxxxxx</kbd> : id de la ligne d'attaque, pour jet si l'icone d20 est cliquée
- <kbd>b</kbd> : 0/1 selon que l'arme est à deux mains

## Capacités

- <kbd>voie1nom</kbd> : nom de la voie n°1
- <kbd>voie1pv</kbd> : nombre de PV de la famille de profil de la voie n°1
- <kbd>v1br</kbd> : rang de base de la voie n°1 (*)
- <kbd>rang_voie1</kbd> : rang du personnage dans la voie n°1
- <kbd>v1r1</kbd> : 1 si le rang 1 de la voie n°1 possédée
- <kbd>v1r1_spell</kbd> 1 si le rang 1 de la voie n°1 est un sort
- <kbd>voie1-t1</kbd> : nom de la capacité de rang 1 de la voie n°1
- <kbd>voie1-1</kbd> : description de la capacité de rang 1 de la voie n°1
- <kbd>v1r1_use_max</kbd> : nombre d'utilisations maximum de la capacité s'il y a lieu
- <kbd>v1r1_freq</kbd> : fréquence de renouvellement des utilisations de la capacité s'il y a lieu
- <kbd>v1r1_use</kbd> : nombre d'utilisations de la capacité
- <kbd>v1r1_param</kbd> : paramètre optionnel de la capacité
- <kbd>v1r1_props</kbd> : propriétés optionnelles pour la capacité

Ces attributs sont déclinés pour toutes les voies (1 à 9) et tous les rangs (1 à 5).

- <kbd>noms_voies</kbd> : liste des noms de voies, séparés par des <kbd>|</kbd>
- <kbd>rangs_voies</kbd> : liste des rangs dans les voies, séparés par des <kbd>,</kbd>

## Buffs / Debuffs

- <kbd>agi_buff_list</kbd> : liste des buffs/debuffs d'AGI
- <kbd>con_buff_list</kbd> : liste des buffs/debuffs de CON
- <kbd>for_buff_list</kbd> : liste des buffs/debuffs de FOR
- <kbd>per_buff_list</kbd> : liste des buffs/debuffs de PER
- <kbd>cha_buff_list</kbd> : liste des buffs/debuffs de CHA
- <kbd>int_buff_list</kbd> : liste des buffs/debuffs d'INT
- <kbd>vol_buff_list</kbd> : liste des buffs/debuffs de VOL
- <kbd>tagi_buff_list</kbd> : liste des buffs/debuffs aux tests d'AGI
- <kbd>tcon_buff_list</kbd> : liste des buffs/debuffs aux tests de CON
- <kbd>tfor_buff_list</kbd> : liste des buffs/debuffs aux tests de FOR
- <kbd>tper_buff_list</kbd> : liste des buffs/debuffs aux tests de PER
- <kbd>tcha_buff_list</kbd> : liste des buffs/debuffs aux tests de CHA
- <kbd>tint_buff_list</kbd> : liste des buffs/debuffs aux tests d'INT
- <kbd>tvol_buff_list</kbd> : liste des buffs/debuffs aux tests de VOL
- <kbd>init_buff_list</kbd> : liste des buffs/debuffs d'Initiative
- <kbd>init_cond</kbd> : total des debuffs à l'Initiative dus aux états préjudiciables
- <kbd>atkcac_buff_list</kbd> : liste des buffs/debuffs d'attaque au contact
- <kbd>atkcac_cond</kbd> : total des debuffs à l'attaque au contact dus aux états préjudiciables
- <kbd>atktir_buff_list</kbd> : liste des buffs/debuffs d'attaque à distance
- <kbd>atktir_cond</kbd> : total des debuffs à l'attaque à distance dus aux états préjudiciables
- <kbd>atkmag_buff_list</kbd> : liste des buffs/debuffs d'attaque magique
- <kbd>atkmag_cond</kbd> : total des debuffs à l'attaque magique dus aux états préjudiciables
- <kbd>def_buff_list</kbd> : liste des buffs/debuffs de Défense
- <kbd>def_cond</kbd> : total des debuffs à la Défense dus aux états préjudiciables
- <kbd>dm_buff_list</kbd> : liste des buffs/debuffs aux DM
- <kbd>pv_buff_list</kbd> : liste des buffs/debuffs aux PV
- <kbd>dr_buff_list</kbd> : liste des buffs/debuffs aux DR
- <kbd>pm_buff_list</kbd> : liste des buffs/debuffs aux PM
- <kbd>pc_buff_list</kbd> : liste des buffs/debuffs aux PC

# Persomancien

Un bouton situé à côté du type de fiche de personnage permet de lancer le Persomancien (CharacterMancer). Cette fonctionnalité expérimentale permet de simplifier la création d'un PJ.

**Important** : Pour que ce bouton fonctionne, vous devez ajouter un compendium quelconque aux paramètres de la partie. Vous ne l'utiliserez pas dans le VTT, il permet juste que le bouton d'ouverture du Persomancien fonctionne.

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
- Dans la configuration pour les jets de caractéristiques sous la forme <kbd>nom-fx nombre</kbd>
- Dans les options d'attaque sous la forme <kbd>fx: nom-fx nombre</kbd>
- Dans les propriétés des capacités sous la forme <kbd>fx: nom-fx nombre</kbd>

Cette effet spécial est une animation qui sera jouée par Roll20 en même temps que le jet est effectué dans le chat.

Lorsque vous spécifiez un FX, vous devez indiquer :
- son nom : deux mots séparés par un tiret <kbd>type-couleur</kbd>, cf [documentation Roll20](https://help.roll20.net/hc/en-us/articles/360037258714-Effects-FX-Tool#01J5XWT925BXP979H4MZXC2SJP)
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

# Menus et macros

Divers boutons disséminés dans la fiche permettent d'afficher dans le chat Roll20 des menus avec des listes d'actions. Ces boutons peuvent être configurés en tant que macros Roll20 et insérés dans la barre rapide des macros et/ou configurés en tant qu'action de jetons.

Les macros à configurer sont les suivantes :
- <kbd>%{selected|pc_menus-btn}</kbd> : menu de tous les autres sous-menus possibles
- <kbd>%{selected|caract_menu-btn}</kbd> : menu des jets de caractéristiques
- <kbd>%{selected|caract_select-btn}</kbd> : popup Roll20 de sélection d'un jet de caractéristique
- <kbd>%{selected|etats_menu-btn}</kbd> : menu des états préjudiciables
- <kbd>%{selected|attacks_menu-btn}</kbd> : menu des jets d'attaque
- <kbd>%{selected|abilities_menu-btn}</kbd> : menu des voies dans lesquelles le personnage possède des capacités
- <kbd>%{selected|rolls_menu-btn}</kbd> : menu des jets de capacités
- <kbd>%{selected|skills_menu-btn}</kbd> : popup Roll20 de sélection d'un jet de compétence (si cette option est activée dans la configuration de la fiche)

# Roll Templates

Ci-dessous la liste des champs utilisables dans chacun des _roll templates_ de la fiche.

## cof2

<kbd>&{template:cof2} &#123;&#123;nom=valeur &#125;&#125; ... </kbd>

Où <kbd>nom</kbd> :

- <kbd>color</kbd> : Couleur du message de chat. Utiliser la valeur <kbd>@{nom du personnage|couleur_pj}</kbd>
- <kbd>perso</kbd> : Nom du personnage, centré en haut du message de chat
- <kbd>lsub</kbd> : Sous-titre du message, à gauche
- <kbd>rsub</kbd> : Sous-titre du message, à droite
- <kbd>tags</kbd> : Liste d'étiquettes caractérisant le jet (sort (de zone), états préjudiciables, etc...)
- <kbd>roll</kbd> : Jet de dés (test, attaque)
- <kbd>broll</kbd> : Deuxième jet de dés (pour gérer les dés bonus/malus)
- <kbd>dm</kbd> : Jet de dommage (doublé en cas de critique)
- <kbd>dmdesc</kbd> : Type de dommages
- <kbd>dmextra</kbd> : Jet de dommage additionnel (non doublé en cas de critique)
- <kbd>text</kbd> : Texte descriptif
- <kbd>textclass</kbd> : Valeur <kbd>critical</kbd> pour affichage en vert, <kbd>fumble</kbd> pour affichage en rouge
- <kbd>alert</kbd> : Texte d'alerte si nécessaire
- <kbd>alertclass</kbd> : Valeur <kbd>critical</kbd> pour affichage en vert, <kbd>fumble</kbd> pour affichage en rouge

Ajouter <kbd>@{nom du personnage|token_dsp}</kbd> à la fin de la macro pour afficher le token lié à la fiche

## custom

Ce roll-template est une amélioration du template par défaut fourni par Roll20.

<kbd>&{template:custom} &#123;&#123;nom=valeur &#125;&#125; ... </kbd>

Où <kbd>nom</kbd> :

- <kbd>color</kbd> : Couleur du message de chat. Utiliser la valeur <kbd>@{nom du personnage|couleur_pj}</kbd>
- <kbd>token</kbd> : Utiliser <kbd>@{nom du personnage|token_dsp}</kbd> pour afficher le token lié à la fiche
- <kbd>title</kbd> : Titre du message
- <kbd>subtitle</kbd> : Sous-titre du message
- <kbd>desc</kbd> : Ligne de fin du message

L'utilisateur peut indiquer des paires _nom / valeur_ libres, qui sont affichées ligne par ligne entre le titre et le pied du message.

---

_(*) : Les rangs de base ont des valeurs par défaut de 1 pour les voies de profil et de 4 pour les voies de prestige_.

_Ne pas oublier d'indiquer la valeur de 3 pour la Voie du familier fantastique_.

_Le rang de base peut aussi être utilisé pour implémenter la magie rare du mode **low-fantasy**, en changeant le rang de base des voies de magie par 2, 3 ou 4 selon la rareté souhaitée_

---

[Retour]({{ site.baseurl }}/pc-main)