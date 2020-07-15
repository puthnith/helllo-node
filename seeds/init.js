exports.seed = async (knex) => {
  try {
    await knex("joke").delete()
    await knex("joke").insert([
      {
        id: "144caa23-ed93-498e-8b83-57194c4ff30e",
        text: "How do you make holy water? You boil the hell out of it.",
      },
      {
        id: "4a8bf592-e1ba-464c-905e-05a7add1a7c0",
        text: "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
      },
      {
        id: "1b807a59-f59e-4d64-8590-6e10ecb33df0",
        text: "I'm reading a book about anti-gravity. It's impossible to put down!",
      },
    ])
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }
}
