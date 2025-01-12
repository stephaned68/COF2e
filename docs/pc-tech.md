# Attributs PJ

Les noms d'attributs Roll20 utilisables dans des macros s'affichent dans des bulles d'aide au survol de la souris sur les éléments de la fiche de personnage. Ils sont listés pour rappel ci-après.

## Caractéristiques

- <kbd>agi</kbd>, <kbd>con</kbd>, <kbd>for</kbd>, <kbd>per</kbd>, <kbd>cha</kbd>, <kbd>int</kbd>, <kbd>vol</kbd> : scores de caractéristiques de base
- <kbd>xxx_sup</kbd> : type de jet (N = normal, S = supérieure 
ou héroïque, H = supérieure et héroïque)
- <kbd>xxx_dsup</kbd> : expression de dé (selon le type de jet et les états préjudiciables)
- <kbd>xxx_buff</kbd> : buffs/debuffs aux caractéristiques
- <kbd>xxx_test</kbd> : scores de caractéristiques avec buffs

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
- <kbd>condition_essoufle</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Essouflé_
- <kbd>condition_etourdi</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Etourdi_
- <kbd>condition_immobilise</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Immobilisé_
- <kbd>condition_invalide</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Invalide_
- <kbd>condition_paralyse</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Paralysé_
- <kbd>condition_ralenti</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Ralenti_
- <kbd>condition_renverse</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Renversé_
- <kbd>condition_surpris</kbd> : 0/1 selon que le personnage subit l'état préjudiciable _Surpris_

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

Ces attributs existent pour toutes les voies (1 à 9) et tous les rangs (1 à 5).

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
- <kbd>pv_buff_list</kbd> : liste des buffs/debuffs aux PV
- <kbd>dr_buff_list</kbd> : liste des buffs/debuffs aux DR
- <kbd>pm_buff_list</kbd> : liste des buffs/debuffs aux PM
- <kbd>pc_buff_list</kbd> : liste des buffs/debuffs aux PC

# Menus et macros

Divers boutons disséminés dans la fiche permettent d'afficher dans le chat Roll20 des menus avec des listes d'actions. Ces boutons peuvent être configurés en tant que macros Roll20 et insérés dans la barre rapide des macros et/ou configurés en tant qu'action de jetons.

Les macros à configurer sont les suivantes :
- <kbd>%{selected|pc_menus-btn}</kbd> affiche un menu de tous les autres sous-menus possibles
- <kbd>%{selected|caract_menu-btn}</kbd> affiche un menu pour les jets de caractéristiques
- <kbd>%{selected|attacks_menu-btn}</kbd> affiche un menu pour les jets d'attaque
- <kbd>%{selected|abilities_menu-btn}</kbd> affiche un menu des voies dans lesquelles le personnage possède des capacités
- <kbd>%{selected|rolls_menu-btn}</kbd> affiche un menu des jets de capacités
- <kbd>%{selected|skills_menu-btn}</kbd> affiche un popup Roll20 permettant de sélectionner la compétence à utiliser (si cette option est activée dans la configuration de la fiche)

---

_(*) : les rangs de base sont de 1 pour les voies de profil, 4 pour les voies de prestige (3 pour la Voie du familier fantastique)_

---

[Retour]({{ site.baseurl }}/pc-main)