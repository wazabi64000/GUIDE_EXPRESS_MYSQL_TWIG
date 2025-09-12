# GUIDE_EXPRESS_MYSQL_TWIG

https://wazabi64000.github.io/GUIDE_EXPRESS_MYSQL_TWIG/

| CCP      | Module RNCP / Compétence                                                                                     | Exemple concret dans le projet                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Architecture et développement backend | - `src/server.js` : serveur Express<br>- `src/routes/` : routes CRUD et authentification<br>- `src/controllers/` : logique métier<br>- `src/models/` : interaction MySQL |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Authentification & sécurité           | - `authController.js` : login, inscription<br>- `roleMiddleware.js` : gestion des rôles<br>- `JWT` + `bcrypt` pour sécuriser les mots de passe et les sessions           |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Base de données relationnelle         | - MySQL avec tables `users`, `categories`, `annonces`<br>- `userModel.js`, `categoryModel.js`, `annonceModel.js`                                                         |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Gestion des emails / notifications    | - `mail.js` + Nodemailer pour vérification email et reset password                                                                                                       |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Gestion des fichiers et uploads       | - Multer dans `annoncesController.js` pour gérer les images                                                                                                              |
| **CCP1** | Module 1 : Conception et maintenance d’une application web ou mobile – Préparation au déploiement            | - Étape 12, `.env`, sécurité, instructions de lancement                                                                                                                  |

annonces-sportives/
│
├─ src/
│ ├─ controllers/
│ │ ├─ authController.js
│ │ ├─ categoryController.js
│ │ └─ annoncesController.js
│ │
│ ├─ models/
│ │ ├─ userModel.js
│ │ ├─ categoryModel.js
│ │ └─ annonceModel.js
│ │
│ ├─ routes/
│ │ ├─ authRoutes.js
│ │ ├─ categoryRoutes.js
│ │ └─ annoncesRoutes.js
│ │
│ ├─ views/
│ │ ├─ 01-introduction.html
│ │ ├─ 02-installation.html
│ │ ├─ 03-arborescence.html
│ │ ├─ 04-mvc.html
│ │ ├─ 05-config-env.html
│ │ ├─ 06-auth-connexion.html
│ │ ├─ 07-verification-email.html
│ │ ├─ 08-reset-password.html
│ │ ├─ 09-gestion-roles.html
│ │ ├─ 10-crud-categorie.html
│ │ ├─ 11-crud-annonces.html
│ │ └─ 12-deploiement.html
│ │
│ ├─ config/
│ │ ├─ db.js
│ │ ├─ jwt.js
│ │ └─ mail.js
│ │
│ └─ server.js
│
├─ public/
│ ├─ css/
│ │ └─ style.css
│ ├─ js/
│ │ └─ app.js
│ └─ images/
│ └─ annonces/
│
├─ .env
├─ package.json
└─ package-lock.json

# Créer le projet et se déplacer dedans

mkdir annonces-sportives
cd annonces-sportives

# Initialiser le projet Node.js

npm init -y

# Installer les dépendances principales

npm install express mysql2 dotenv bcrypt jsonwebtoken cookie-parser nodemailer multer twig

# Installer nodemon pour le développement

npm install --save-dev nodemon

# Créer l’arborescence des dossiers

mkdir -p src/{controllers,models,routes,views,config}
mkdir -p public/{css,js,images/annonces}

# Créer le fichier .env

touch .env

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=annonces_sportives
EMAIL_USER=monemail@gmail.com
EMAIL_PASS=monmotdepasse
JWT_SECRET=MaCleSecrete

# Avec nodemon

npx nodemon src/server.js

| Dépendance    | Rôle                                                 |
| ------------- | ---------------------------------------------------- |
| express       | Framework Node.js pour serveur web                   |
| mysql2        | Connexion à MySQL                                    |
| dotenv        | Gestion des variables d’environnement                |
| bcrypt        | Hachage des mots de passe                            |
| jsonwebtoken  | Gestion des tokens JWT                               |
| cookie-parser | Lecture des cookies pour JWT                         |
| nodemailer    | Envoi d’emails pour vérification et réinitialisation |
| multer        | Upload d’images                                      |
| twig          | Templates HTML dynamiques                            |
