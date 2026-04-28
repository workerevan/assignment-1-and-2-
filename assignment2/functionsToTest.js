// Functions to be used in CA2 QUnit testing

function calculateVAT(price) {
    return price * 1.2;
}

function setGroupPrice(initialIndividualPrice, nbIndividuals) {
    let groupPrice = initialIndividualPrice * nbIndividuals;
    if (nbIndividuals >= 10 && nbIndividuals < 50) {
        groupPrice = groupPrice * 0.8;
    } else if (nbIndividuals >= 50) {
        groupPrice = groupPrice * 0.7;
    }
    return groupPrice;
}

function calculateDiscountedPrice(couponCode, originalPrice) {
    if (!couponCode) return originalPrice;
    const code = couponCode.toString().toUpperCase();
    if (code === "HELLO30") return originalPrice * 0.7;
    if (code === "HELLO40") return originalPrice * 0.6;
    if (code === "HELLO50") return originalPrice * 0.5;
    return -1;
}

function setInternationalCode(countryName) {
    const country = countryName.toString().toUpperCase();
    if (country === "FRANCE") return 33;
    if (country === "IRELAND") return 353;
    if (country === "ENGLAND") return 44;
    return -1;
}

function isValidCountry(countryName) {
    const country = countryName.toString().toUpperCase();
    return country === "FRANCE" || country === "IRELAND" || country === "ENGLAND";
}

function isValidCoupon(couponCode) {
    const code = couponCode.toString().toUpperCase();
    return code === "HELLO30" || code === "HELLO40" || code === "HELLO50";
}

function createFullName(firstName, lastName) {
    const first = firstName.toString().trim();
    const last = lastName.toString().trim();
    if (!first || !last) return -1;
    return `${first} ${last}`;
}
