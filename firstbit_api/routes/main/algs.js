const router = require("express").Router();
// Utiliates
const compressions = require("../../utilities/compressions");
// Upload
const upload = require("../../helper/upload");
// DB
const {} = require("../../helper/db");

// JPEG
router.post("/jpeg", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
    
      await compressions(
        "jpeg",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// PNG
router.post("/png", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "png",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// SVG
router.post("/svg", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "svg",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// FLIF
router.post("/flif", upload("disk").single("image"), async (req, res) => {
  try {
    if (req.file && req.file.path) {
      await compressions(
        "flif",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// TIFF
router.post("/tiff", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "tiff",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// GIF
router.post("/gif", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "gif",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// WEBP
router.post("/webp", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "webp",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

// GUETZLI
router.post("/guetzli", upload().single("image"), async (req, res) => {
  try {
    if (req.file) {
      await compressions(
        "guetzli",
        req.file,
        { ...JSON.parse(req.body.settings) },
        (status, output, message) => {
          if (status) {
            res.json({
              error: false,
              output,
            });
          } else {
            res.json({
              error: true,
              message,
            });
          }
        }
      );
    } else {
      res.json({
        error: false,
        output: null,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      error: true,
      message: "catch",
    });
  }
});

module.exports = router;
