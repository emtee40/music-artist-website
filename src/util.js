module.exports = {
    toSlug: function (unsluggedValue) {
        return (unsluggedValue + '')
            .split(' ').join('-') // not every browser knows 'replaceAll()' so we'll have to hack around that...
            .toLowerCase();
    }
};