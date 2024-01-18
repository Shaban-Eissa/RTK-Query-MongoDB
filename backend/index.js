const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`mongodb connected ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Item = mongoose.model("RTK-QUERY", ItemSchema);

app.get("/api", (req, res) => {
  res.status(200).send({ response: "api worked.." });
});

app.get("/api/items", async (req, res) => {
  try {
    await Item.find()
      .then((response) => {
        res.status(200).send({ response: response });
        console.log(response);
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
});

app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
    });
    await newItem
      .save()
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
});

app.put("/api/items/:id", async (req, res) => {
  console.log(req.params.id);
  const newItem = {
    name: req.body.name,
    description: req.body.description,
  };
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: newItem },
      { new: true }
    );

    if (!updatedItem) {
      res.status(404).send({ response: "Item not found" });
    } else {
      res.status(200).send({ response: updatedItem });
    }
  } catch (err) {
    res.status(500).send({ response: err.message });
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id)
      .then((response) => {
        res.status(200).send({ response: response });
      })
      .catch((err) => {
        res.status(500).send({ response: err.message });
      });
  } catch (error) {
    res.status(500).send({ response: error.message });
  }
});

app.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
});
