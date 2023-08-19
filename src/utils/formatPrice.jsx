

export function formatPrice(inputs) {

    // Convert the money amount to a string
    let moneyStr = inputs + '';

    // Check if the money amount is negative
    let negative = false;
    if (moneyStr.startsWith("-")) {
        negative = true;
        moneyStr = moneyStr.substring(1);
    }

    // Split the money amount into the integer and decimal parts
    let [integerPart, decimalPart] = moneyStr.split(".");

    // Format the integer part by inserting dots every three characters from the right
    let formattedInteger = "";
    for (let i = integerPart.length - 1; i >= 0; i--) {
        formattedInteger = integerPart[i] + formattedInteger;
        if ((integerPart.length - i) % 3 == 0 && i != 0) {
            formattedInteger = "." + formattedInteger;
        }
    }

    // Combine the formatted integer and decimal parts
    let formattedMoney = formattedInteger;
    if (decimalPart) {
        formattedMoney += "." + decimalPart;
    }

    // Add negative sign if necessary
    if (negative) {
        formattedMoney = "-" + formattedMoney;
    }

    return formattedMoney;
}
