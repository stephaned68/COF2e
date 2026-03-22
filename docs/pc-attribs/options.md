# Sous-onglet _Options_

## Options tactiques

Cette section permet de prendre en compte les options tactiques des attaques. Après sélection de l'option choisie, les effets de celle-ci sont appliqués _au prochain jet d'attaque uniquement_.

On peut également paramétrer une ou plusieurs options tactiques ou capacités spécifiques au PJ.

Pour chaque option, on indique :
- son nom, 
- un bonus ou malus fixe à l'attaque,
- si le jet d'attaque se fait avec un dé bonus ou un dé malus,
- d'éventuels DM supplémentaires (qui ne sont pas doublés en cas de coup critique).

Si le nom de l'option se termine par une étoile `*`, elle sera affichée de préférence au-dessus de la liste des attaques si l'option correspondante est active dans la configuration.

On peut activer une ou plusieurs options simultanément. Selon la configuration du paramètre _Options tactiques par round_, elles restent actives tant qu'elles n'ont pas été désactivées manuellement, ou bien elles sont désactivées automatiquement par la fiche après le prochaine attaque.

Le nombre de D20 lancés par la fiche dépend des options activées : si une option procure un dé bonus et une autre inflige un dé malus, un jet normal est effectué.

### Exemples d'options tactiques

#### Attaque sournoise

Pour créer l'option d'_Attaque sournoise_, indiquez :
- `Attaque sournoise` dans le nom de l'option,
- `2d4°` dans les DM supplémentaires.

Cochez la case d'activation. A chaque fois que le voleur effectue une attaque, la fiche lancera les dés de DM supplémentaires.

Vous pouvez indiquer dans le champ de DM une _Roll Query_ Roll20 afin que la fiche pose la question pour appliquer ou non les DM d'attaque sournoise à chaque attaque :

`?{Sournoise ?|Non,0|Oui,2d4°}`

NB : Pour ne pas avoir à actualiser le nombre de d4° quand le voleur atteint le rang 4 dans une voie de profil, vous pouvez commencer par créer un attribut personnalisé `dm-sournoise` (cf. onglet [Configuration]({{ site.baseurl }}/pc-config)) dont la valeur est calculée à partir de l'attribut standard `voies_rang4`, et va donc suivre l'évolution des rangs acquis dans les voies. Puis indiquez `@{dm-sournoise}` dans le champ de DM (ou `?{Sournoise ?|Non,0|Oui,@{dm-sournoise}}` pour poser la question).

#### Dans le mille

Pour créer l'option _Dans le mille_, indiquez :
- `Dans le mille` dans le nom de l'option,
- Cochez la case `Avec dé malus`,
- `?{Action ?|(A)ttaque,2d4°|(L)imitée,3d4°}` dans les DM supplémentaires.

Cochez la case d'activation. A chaque fois que le rôdeur effectue une attaque, la fiche demandera le type d'action utilisée, effectuera le jet d'attaque avec un dé malus, et lancera les dés de DM supplémentaires selon le choix effectué.

Vous pouvez aussi créer deux options distinctes `Dans le mille (A)` et `Dans le mille (L)` avec les dés de DM supplémentaires correspondants et activer l'une ou l'autre.

## Modificateurs situationnels

Cette section permet de modifier les jets d'attaque à distance en fonction des circonstances sélectionnées. Est considérée comme _à distance_ une attaque utilisant le score d'attaque à distance et ayant une portée indiquée. _Cela évite d'appliquer ces modificateurs à une attaque au contact utilisant l'AGI (ex : barde, voleur)_.

---

[Retour]({{ site.baseurl }}/pc-attribs)