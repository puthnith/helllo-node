import Knex from "knex"

export interface Joke {
  id: string
  text: string
}

export class JokeStore {
  constructor(private db: Knex) {}

  async random(): Promise<Joke> {
    const jokes = await this.db<Joke>("joke")
    return jokes[Math.floor(Math.random() * (jokes.length - 1))]
  }
}
