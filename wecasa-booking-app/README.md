# Wecasa Booking App

Une application de réservation de coiffure à domicile, développée en React + TypeScript + Vite, en 4 étapes : gestion des prestations, adresse, rendez-vous et confirmation.

**Fonctionnalités**

Sélection des prestations avec quantité

Gestion du panier avec prix total et durée totale

Saisie de l’adresse (avec validation)
<br>
⚠️ Note : Je n’ai pas utilisé la librairie @react-google-maps/api pour l’autocomplétion d’adresse afin de ne pas exposer de clé API pour des raisons de sécurité. La saisie se fait donc via un simple champ texte.

Choix du créneau de rendez-vous (dates futures uniquement)

Confirmation de réservation via l’API Wecasa

State management via React Context + useReducer

Validation TypeScript complète


**Stack technique**

Framework : React 18, Vite

Langage : TypeScript

State management : Context API + useReducer

Routing : React Router v6

HTTP client : Axios

Styling : TailwindCSS

Linting & formatting : ESLint + Prettier


**API**

GET /api/techtest/universe — récupération des prestations

POST /api/techtest/booking — création d’une réservation


# Installer les dépendances
npm install

# Lancer l’application en dev
npm run dev

# Build pour production
npm run build

# Linter le code et corriger automatiquement
npm run lint
ESLint + Prettier intégrés

Fix automatique :

npm run lint -- --fix


VS Code : formatage à la sauvegarde configuré