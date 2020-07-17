type SwitchFn = (s: string) => string

const switchKeys = (fn: SwitchFn) => <T, U>(o: T) =>
  Object.keys(o).reduce((a, k) => {
    a[fn(k)] = (o as Record<string, unknown>)[k]
    return a
  }, {} as Record<string, unknown>) as U

const snake: SwitchFn = (s) =>
  s
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_") ?? ""

const camel: SwitchFn = (s) => s.replace(/[^a-zA-Z0-9]+(.)/g, (_, next) => next.toUpperCase())

const camelKeys = switchKeys(camel)

const snakeKeys = switchKeys(snake)

export { camel, snake, camelKeys, snakeKeys }
