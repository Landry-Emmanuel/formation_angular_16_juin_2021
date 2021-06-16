# TP n°5

- Créer une méthode getProgressBar qui renvoie un observable<number>. 
- Cet observable diffuse une donnée toutes les (x) ms, cette donnée correspond à la progression 
du chargement (virtuel) de vos données, donc de 0 à 100%. 

- Une fois les 100% atteints, vous vous désinscrivez de votre observable et veillez bien 
à nettoyer correctement toutes vos ressources du côté de ce dernier. 

BONUS: 

    - Essayez de combiner la résolution de l'observable progressbar avec la résolution 
    de l'obtention des données 'getAll'.