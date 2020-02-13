module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;

    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {console.log(err);
    res
      .status(500)
      .send(
        `If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I'd shoot Toby twice`
      )});
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .read_product(id)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {console.log(err)
    res.status(500).send(`I am Beyonce always`)});
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        console.log(err);
        res.status(500).send(`I declare BANKRUPTCY!`);
      });
  },

  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .update_product([params.id, query.desc])
      .then(product => {
        res.sendStatus(200);
      })
      .catch(err => {console.log(err);
    res.status(500).send(`I'm not superstitious but I am a little stitious.`)});
  },

  delete: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product(id)
      .then(product => {
        res.sendStatus(200);
      })
      .catch(err => {console.log(err);
    res
      .status(500)
      .send(`I hate so much about the things that you choose to be`)});
  }
};
