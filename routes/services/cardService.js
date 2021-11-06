var cardData = require('../data/cards.json');

const getCardData = () => {
    console.log('inside getCardData');
    return cardData;
};

module.exports = getCardData;
