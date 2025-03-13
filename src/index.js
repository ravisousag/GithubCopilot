function getCardBandeira(cardNumber) {
    const cardPatterns = {
        'Visa': /^4/,
        'MasterCard': /^(5[1-5]|2[2-7][2-9][0-9])/,
        'Elo': /^(4011|4312|4389)/,
        'American Express': /^(34|37)/,
        'Discover': /^(6011|65|64[4-9])/,
        'Hipercard': /^6062/
    };

    for (const [bandeira, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return bandeira;
        }
    }

    return 'Cartão desconhecido';
}

// Example usage:
const cardNumber = '3549227684073324';
console.log(getCardBandeira(cardNumber)); // Output: Visa