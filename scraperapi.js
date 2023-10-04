const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://fr.wikipedia.org/wiki/Wikipédia:Accueil_principal';
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const dailyArticle = $('.portail-gauche').text().split('Lire la suite')[0];
            console.log(dailyArticle);
        })
        .catch(console.error);