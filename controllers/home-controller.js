const express = require('express');

// Création d'un objet "homeController" avec des méthodes
const homeController = {

    /**
     * Méthode du controller pour l'index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('home/index');
    },

    about: (req, res) => {
        res.send('<h1>About ☺</h1>');
    },

    contactGet: (req, res) => {
        res.send('<h1>Contact</h1>');
    },

    contactPost: (req, res) => {
        res.sendStatus(501);
    }
};

// Exportation du "homeController"
module.exports = homeController;