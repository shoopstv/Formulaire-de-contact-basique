# Formulaire de Contact Basique en HTML, CSS et JavaScript

[![Aperçu](https://img.shields.io/badge/Aperçu-Live-brightgreen)](https://shoopstv.github.io/Formulaire-de-contact-basique/)


## Description

Ce projet est un formulaire de contact simple mais fonctionnel, construit avec HTML, CSS et JavaScript. Il permet aux utilisateurs de soumettre leurs nom, email et message. Le formulaire inclut une validation côté client pour s'assurer que les champs requis sont remplis et que l'email est valide.  Il n'y a *pas* d'envoi de données à un serveur (pas de backend).  L'objectif est purement front-end (validation et interface).

## Aperçu

Vous pouvez voir le formulaire en action ici : [https://shoopstv.github.io/Formulaire-de-contact-basique/](https://shoopstv.github.io/Formulaire-de-contact-basique/)

## Technologies Utilisées

*   **HTML5 :** Structure du formulaire (champs de saisie, bouton de soumission, labels).
*   **CSS3 :** Style et mise en page du formulaire (design responsive).
*   **JavaScript (ES6+) :** Validation des données du formulaire et affichage des messages d'erreur/succès.

## Structure du Projet
Use code with caution.
Markdown
Formulaire-de-contact-basique/

├── index.html # Page HTML principale

├── style.css # Fichier CSS pour le style

└── script.js # Fichier JavaScript pour la validation

## Fonctionnement

Le fichier `script.js` gère la validation du formulaire :

1.  **Écouteur d'événements :**  Un écouteur d'événements est attaché à l'événement `submit` du formulaire.  Lorsque l'utilisateur clique sur "Envoyer" (ou appuie sur Entrée), la fonction de validation est déclenchée.

2.  **`validateForm()` :**  Cette fonction est le cœur de la validation.
    *   **Récupération des valeurs :**  Elle récupère les valeurs saisies par l'utilisateur dans les champs Nom, Email et Message.
    *   **Validation des champs :**
        *   **Champs obligatoires :** Vérifie que les champs Nom et Email ne sont pas vides.
        *   **Validation de l'email :** Utilise une expression régulière (`isValidEmail(email)`) pour vérifier que l'email a un format valide (par exemple, `utilisateur@domaine.com`).
        *   **Message (facultatif) :** Le champ "Message" est validé.
    *   **Affichage des messages d'erreur :**
        *   Si une erreur est détectée (champ vide, email invalide), un message d'erreur approprié est affiché à l'utilisateur.  Les messages d'erreur sont généralement affichés à côté des champs concernés. Les champs en erreur peuvent être mis en évidence (bordure rouge, par exemple).
        * Une fonction `displayError(elementId, message)` peut être utilisée pour afficher les messages d'erreurs
    *   **Affichage du message de succès :**
        *   Si toutes les validations sont réussies, un message de succès est affiché (par exemple, "Formulaire soumis avec succès!").  Le formulaire peut être réinitialisé après un envoi réussi.
     *   **Empêcher l'envoi du formulaire :** Si des erreurs sont présentes, `event.preventDefault()` est appelé pour empêcher l'envoi *réel* du formulaire (puisqu'il n'y a pas de backend).
3. **`isValidEmail(email)`**
    *   Fonction qui verifie la validité de l'email.
4.  **Gestion des evenements**
    * Des écouteurs d'évènements sont utiliser pour la soumission du formulaire ainsi que la touche "Entrée".

## Améliorations Possibles

*   **Intégration avec un backend :**  Connecter le formulaire à un serveur (Node.js, PHP, Python, etc.) pour traiter réellement les soumissions (envoi d'emails, stockage dans une base de données).  Des services comme Formspree, Netlify Forms, ou un serveur personnalisé peuvent être utilisés.
*   **Validation plus poussée :**
    *   **Longueur minimale/maximale :** Ajouter des contraintes de longueur pour le nom et le message.
    *   **Caractères spéciaux :** Limiter les caractères autorisés dans le nom (par exemple, empêcher les chiffres).
    *   **Confirmation de l'email :** Ajouter un champ de confirmation de l'email pour éviter les erreurs de saisie.
*   **Captcha :**  Intégrer un système de captcha (comme reCAPTCHA) pour protéger le formulaire contre le spam.
*   **Accessibilité (a11y) :**  Améliorer l'accessibilité du formulaire (labels correctement associés, ARIA attributes, contraste suffisant).
*   **Réinitialisation du formulaire :**  Ajouter un bouton "Réinitialiser" pour effacer tous les champs.
*   **Feedback visuel :**  Ajouter des animations ou des transitions pour améliorer l'expérience utilisateur (par exemple, une animation de chargement pendant la validation/l'envoi).

## Installation et Utilisation

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/shoopstv/Formulaire-de-contact-basique.git
    ```

2.  **Ouvrir le fichier `index.html`** dans votre navigateur.  Aucune installation de serveur n'est nécessaire pour la validation côté client.


## Contribution

Les contributions sont bienvenues !  Suivez la procédure standard de GitHub :

1.  Fork.
2.  Nouvelle branche.
3.  Modifications.
4.  Commit.
5.  Push.
6.  Pull Request.

## Auteur

*   [shoopstv](https://github.com/shoopstv)

---
