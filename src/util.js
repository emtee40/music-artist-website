module.exports = {
    toSlug: function (unsluggedValue) {
        return (unsluggedValue + '')
            .split(' ').join('-') // not every browser knows 'replaceAll()' so we'll have to hack around that...
            .toLowerCase();
    },
    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
