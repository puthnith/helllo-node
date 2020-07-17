import { camel, snake } from "./camel-snake"

describe("camel function", () => {
  it.each`
    test             | expected
    ${"Hello World"} | ${"HelloWorld"}
    ${"first_name"}  | ${"firstName"}
    ${"lastName"}    | ${"lastName"}
  `(`Should turn "$test" into "$expected"`, (args) => {
    const { test, expected } = args as { test: string; expected: string }
    expect(camel(test)).toBe(expected)
  })
})

describe("snake function", () => {
  it.each`
    test             | expected
    ${"Hello World"} | ${"hello_world"}
    ${"lastName"}    | ${"last_name"}
    ${"first_name"}  | ${"first_name"}
  `(`Should turn "$test" into "$expected"`, (args) => {
    const { test, expected } = args as { test: string; expected: string }
    expect(snake(test)).toBe(expected)
  })
})
