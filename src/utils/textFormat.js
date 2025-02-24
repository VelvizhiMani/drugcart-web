export function tableText(text, maxLength = 50) {
    return text.length > maxLength ? text.substring(0, maxLength) + "....." : text;
}
