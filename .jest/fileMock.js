export default () => {
    jest.mock('../src/assets/images/logo.svg', () => "");
    jest.mock('react-i18next', () => ({
        // this mock makes sure any components using the translation hook can use it without a warning being shown
        useTranslation: () => {
            return {
                t: (str) => str,
                i18n: {
                    changeLanguage: () => new Promise(() => {}),
                    // You can include here any property your component may use
                },
            }
        },
    }));
};
