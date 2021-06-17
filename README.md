# TP n°7

- Créer un service nommé PokeBagService qui référence les pokemons que vous possédez (le CatalogService référence
l'ensemble des pokémons). 

- Notre service doit implémenter une intergace nommée IBagService et expose une méthode publique 
nommée 'getAll' qui renvoie l'intégralité des pokemons détenus par l'utilisateur. 

- Créer un composant PokeBagComponent et afficher les pokemons détenus par le joueur. 
    Le composant doit récupérer les données des pokemons détenus via une route (donc on doit créer un resolver). 
    Le resolver se fait injecter une instance de IBagService et résoud les données. 

- Configurer l'injecteur de dépendances pour qu'il envoie une instance de PokeBagService lorsqu'on demande
une instance de IBagService. 