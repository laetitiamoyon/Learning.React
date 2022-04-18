# Coding Test Front end

L’objectif du test est de créer une page affichant le détail d’un véhicule, basé sur des APIs.

## Explications

Vous trouverez ci-dessous un projet à réaliser chez vous.

### Quelques consignes

- Réalisez le projet comme si c’était un projet professionnel, avec les ressources que vous avez habituellement ;
- Le projet doit être basé sur ReactJS avec un rendu des pages côté server. Vous pouvez utiliser une librairie dédiée pour le SSR ;
- Pour ce test, la gestion des anciennes versions de navigateur n’est pas indispensable (pas de nécessité de polyfill)
- Les captures sont fournies uniquement à titre d’exemple. L’objectif de ce test n’est _pas_ de les reproduire exactement à l’identique avec nécessairement toutes les données;
- Il n'est pas indispensable de faire toute la page, plutôt se focaliser sur livrer une page fonctionnelle

### Livrables attendus

- Temps de réalisation du projet. Prenez le temps que vous prendriez en entreprise. Pour des raisons techniques, la durée grand max est de 4h.
- Le projet en zip uploadé dans la plateforme.
- les commandes pour builder et executer le projet.

En fonction de la revue de ce projet, un entretien sera organisé.

## Contexte

Le groupe La Centrale propose à ses internautes de trouver leur futur véhicule. Pour cela, nous affichons les caractéristiques d’un véhicule sur une page, consultable sur différents appareils (mobile, tablette et desktop).
L’objectif de ce projet est de proposer une version simplifiée de la page responsive présentant un véhicule et contenant :
- Un slider d’image de votre choix (ou à minima l'affichage de plusieurs images);
- La mise en avant du prix du véhicule (avec, si disponible, le prix d’origine barré et le prix actuel);
- Les caractéristiques du véhicule ;
- Les équipements et options ; ces derniers ne s'affichent qu'à l'ouverture d'une popin au clic sur un bouton libellé "Plus de caractéristiques".
- Un bouton permettant de contacter le vendeur, via l’ouverture d’un client email ;

L’affichage doit être fait pour les 3 véhicules proposés via des urls utilisant les id des véhicules :
- /E40012456.html
- /F40012456.html
- /G40012456.html

### Récupération des données

Pour ce tests, nous allons utiliser les données de 3 véhicules dont les IDs sont :
- E40012456
- F40012456
- G40012456

Chaque véhicule a ses données fournies par 4 api
- /cars/ID contenant les informations générales sur le véhicule ;
- /options/ID contenant les options du véhicule ;
- /pricing/ID contenant les informations sur le prix du véhicule ;
- /photos/ID contenant les informations sur les photos et vignettes du véhicule ;

Pour appeler les données :

Installer JSON Server (https://github.com/typicode/json-server)
```
    npm install -g json-server 
```

Lancer JSON SERVER
```
    json-server --watch cars.json
```
Vous pouvez maintenant appeler les différents services via les ID des véhicules

Ex :
```
   curl --location --request GET 'http://localhost:3000/cars/E40012456'
   curl --location --request GET 'http://localhost:3000/options/E40012456'
   curl --location --request GET 'http://localhost:3000/pricing/E40012456'
   curl --location --request GET 'http://localhost:3000/photos/E40012456'
```

## Éléments fournis

- Un dossier contenant des exemples de captures pour les 3 tailles (desktop, tablette et mobile) ;
- Le modèle de donnée cars.json permettant de mocker les API ;

##  Prérequis :

- Installer les dépendances du projet :
```
    npm install ou yarn
```

##  Lancer le serveur :
```
    npm run dev ou yarn dev
```

##  Lancer les tests avec Cypress :
```
    npm run cypress:open ou yarn run cypress:open
```
