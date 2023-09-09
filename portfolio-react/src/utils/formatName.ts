export function removePinAndHyphens(string: string) {
    return string.replace(/pin|-/g, ' ')
}