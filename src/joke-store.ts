import Knex from "knex"

import { camelKeys } from "./camel-snake"

export interface Joke {
  id: string
  text: string
  createdAt: Date
}

export class JokeStore {
  constructor(private db: Knex) {}

  async random(): Promise<Joke> {
    const jokes = await this.db<Joke>("joke")
    const joke = jokes[Math.floor(Math.random() * (jokes.length - 1))]
    return camelKeys(joke)
  }
}
