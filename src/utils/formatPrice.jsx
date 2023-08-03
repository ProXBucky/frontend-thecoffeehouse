

export function formatPrice(input) {
    input = input.toString();
    if (input.length > 3) {
        var result = input.slice(0, -3) + "." + input.slice(-3);
        return result;
    }
    return input;
}
