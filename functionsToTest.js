// Functions to be used in CA2 QUnit testing

//TC1, 12
function calculateVAT(price)
{

    return (price * 1.2);

}

//TC 2, 3, 4
function setGroupPrice (initialIndividualPrice, nbIndividuals)
{
    groupPrice = initialIndividualPrice * nbIndividuals;
    if (nbIndividuals >= 10 && nbIndividuals < 50)
    {
        groupPrice = groupPrice * 0.8
    }
    else if (nbIndividuals >= 50) groupPrice = groupPrice * 0.7
    return groupPrice;
    
}

//TC 5, 6,7, 8, 9
function calculateDiscountedPrice(couponCode, originalPrice)
{
    if (couponCode == "HELLO30") return (originalPrice * 0.7)
    else if (couponCode == "HELLO40") return (originalPrice * 0.6)
    else if (couponCode == "HELLO50") return (originalPrice * 0.5)
    else if (couponCode == "") return (originalPrice)
    else return (-1)
}

//TC 10, 11, 18
function setInternationalCode(countryName)
{
    
    if (countryName == "FRANCE") return (33);
    else if (countryName == "IRELAND") return (353);
    else if (countryName == "ENGLAND") return (44);
    else return -1
    
}

//TC13, 17
function isValidCountry(countryName)
{
    if (countryName == "FRANCE" || countryName == "IRELAND" || countryName == "ENGLAND" ) return true;
    else return false;
    
}
//TC13
function isValidCoupon(couponCode)
{
    if (couponCode == "HELLO30" || couponCode == "HELLO40" || couponCode == "HELLO50" ) return true;
    else return false;
}
