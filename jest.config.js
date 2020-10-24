const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  reporters: ["default"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js"
  ],
  setupFiles: ["jest-canvas-mock"],
  verbose: true
};
