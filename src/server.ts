require("dotenv").config() // eslint-disable-line @typescript-eslint/no-var-requires

import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import { Logger } from "tslog"

const log = new Logger({ name: "Auth", type: "pretty" })

const run = async (): Promise<void> => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())

  app.get("/", (_, response) => {
    response.send({ message: "Hello" })
  })

  app.use((_, response) => {
    response.status(404).json({ message: "Not found" })
  })

  const port = process.env.PORT ?? 3000
  app.listen(port, () => log.info(`Server is up and running: ${port}`))
}

run().catch((error) => log.error(error))
