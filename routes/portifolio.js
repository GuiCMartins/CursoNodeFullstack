const router = require("express").Router();
const PortifolioSchema = require("../models/portifolio");

router.get("/", async (req, res) => {
  try {
    const portifolio = await PortifolioSchema.find();

    res.status(200).json({
      success: true,
      data: portifolio,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      Message: err,
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const portifolio = await PortifolioSchema.findOne({
      slug: req.params.slug,
    });

    res.status(200).json({
      success: true,
      data: portifolio,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      Message: err,
    });
  }
});

router.put("/:slug", async (req, res) => {
  try {
    await PortifolioSchema.updateOne(
      {
        slug: req.params.slug,
      },
      {
        title: req.body.title,
        description: req.body.description,
      }
    );

    res.status(200).json({
      success: true
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      Message: err,
    });
  }
});

router.post("/", async (req, res) => {
  const portifolio = new PortifolioSchema({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const data = await portifolio.save();
    res.status(201).json({
      Success: true,
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      Success: false,
      Message: err,
    });
  }
});

router.delete("/:slug", async (req, res) => {
    try {
      const portifolio = await PortifolioSchema.deleteOne({
        slug: req.params.slug,
      });
  
      res.status(200).json({
        success: true,
        data: portifolio,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        Message: err,
      });
    }
  });

module.exports = router;
