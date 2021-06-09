module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.(js|ts)'],
}
