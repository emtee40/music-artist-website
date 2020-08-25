/**
 * Function that turns a string into a slugged value, suitable for using in links, etc.
 * @param unsluggedValue the original value
 */
export function toSlug(unsluggedValue: string) {
    return (unsluggedValue + '')
        .split(' ').join('-') // not every browser knows 'replaceAll()' so we'll have to hack around that...
        .toLowerCase();
}

/**
 * Function that returns a random int between min and max.
 * @param min the minimum value
 * @param max the maximum value
 */
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
