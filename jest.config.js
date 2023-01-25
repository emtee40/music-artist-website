// eslint-disable-next-line no-undef
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/.jest/index.js"],
    reporters: ["default", "jest-junit"],
    moduleNameMapper: {
        "jsx:(.*)": "$1"
    }
};
