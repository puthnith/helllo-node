module.exports = {
  moduleFileExtensions: ["ts", "js", "json"],
  transform: { "^.+\\.ts": "ts-jest" },
  rootDir: "src",
  testMatch: ["<rootDir>/**/*.test.ts"],
  testEnvironment: "node",
}
