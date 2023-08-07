

export function formatPrice(inputs) {
    const input = inputs + ''
    if (input.length > 3) {
        var result = input.slice(0, -3) + "." + input.slice(-3);
        return result;
    }
    return input;
}
