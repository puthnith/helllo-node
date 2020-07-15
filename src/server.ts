require("dotenv").config() // eslint-disable-line @typescript-eslint/no-var-requires

import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import { Logger } from "tslog"

import { JokeStore } from "./joke-store"
import knex from "./knex"

const log = new Logger({ name: "Auth", type: "pretty" })

const run = async (): Promise<void> => {
  await knex.migrate.latest()

  const app = express()
  const store = new JokeStore(knex)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.get("/", async (_, response) => {
    const joke = await store.random()
    response.send(joke)
  })

  app.use((_, response) => {
    response.status(404).json({ message: "Not found" })
  })

  const port = process.env.PORT ?? 3000
  app.listen(port, () => log.info(`Server is up and running: ${port}`))
}

run().catch((error) => log.error(error))
