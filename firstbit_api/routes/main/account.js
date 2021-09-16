const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../configs");
const { v4: uuidv4 } = require("uuid");
//Regx
const emailRegx = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
//Route
const router = require("express").Router();
// Models
const { Users, Keys } = require("../../helper/db");

router.get("/", async (req, res) => {
  try {
    let account = await Users.findOne({
      where: { user_id: req.decoded.id, status: 1 },
      attributes: ["name", "surname"],
    });
    if (account) {
      res.json({
        result: true,
        account,
      });
    } else {
      res.json({
        result: false,
        message: "Kullanıcı Bulunamadı.",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, surname } = req.body;
    console.log(name);
    if (name !== "" && surname !== "") {
      const save = await Users.update(
        {
          name,
          surname,
        },
        {
          where: { user_id: req.decoded.id, status: 1 },
        }
      );
      if (save) {
        res.json({
          result: true,
          message: "Değişiklikler Kaydedildi. Lütfen Tekrar Giriş Yapınız.",
        });
      } else {
        res.json({
          result: false,
          message: "Değişiklikler Kaydedilemedi.",
        });
      }
    } else {
      res.json({
        result: false,
        message: "Lütfen Gerekili Alanları Doldurunuz.",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

router.post("/email", async (req, res) => {
  try {
    const { current_email = "", new_email = "" } = req.body;
    if (current_email !== "" && new_email !== "") {
      let user = await Users.findOne({
        where: {
          user_id: req.decoded.id,
        },
      });
      if (user.email == current_email) {
        if (emailRegx.test(new_email)) {
          let email_control = await Users.count({
            where: {
              email: new_email,
            },
          });
          if (email_control == 0) {
            const save = await Users.update(
              {
                email: new_email,
              },
              {
                where: { user_id: req.decoded.id, status: 1 },
              }
            );
            if (save) {
              res.json({
                result: true,
                message:
                  "Email Adresiniz Değiştirildi. Lütfen Tekrar Giriş Yapınız.",
              });
            } else {
              res.json({
                result: false,
                message: "Değişiklikler Kaydedilemedi.",
              });
            }
          } else {
            res.json({
              result: false,
              message: "Bu Email Adresi Zaten Kullanılmaktadır.",
            });
          }
        } else {
          res.json({
            result: false,
            message: "Lütfen Geçerli Bir Email Adresi Giriniz.",
          });
        }
      } else {
        res.json({
          result: false,
          message: "Girdiğiniz Bilgileri Kotrol Ediniz.",
        });
      }
    } else {
      res.json({
        result: false,
        message: "Lütfen Gerekili Alanları Doldurunuz.",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

router.post("/password", async (req, res) => {
  try {
    const { current_pass = "", new_pass = "", re_new_pass = "" } = req.body;
    if (current_pass !== "" && new_pass !== "" && re_new_pass !== "") {
      let user = await Users.findOne({
        where: {
          user_id: req.decoded.id,
        },
      });
      let pass_control = false;
      pass_control = await bcrypt.compare(current_pass, user.password);
      if (pass_control) {
        if (String(new_pass).length >= 8) {
          if (new_pass == re_new_pass) {
            bcrypt.hash(new_pass, 10).then(async (hash) => {
              const save = await Users.update(
                {
                  password: hash,
                },
                {
                  where: { user_id: req.decoded.id, status: 1 },
                }
              );
              if (save) {
                res.json({
                  result: true,
                  message:
                    "Şifreniz Değiştirildi. Lütfen Tekrar Giriş Yapınız.",
                });
              } else {
                res.json({
                  result: false,
                  message: "Değişiklikler Kaydedilemedi.",
                });
              }
            });
          } else {
            res.json({
              result: false,
              message: "Girdiğiniz Şifreler Uyuşmuyor.",
            });
          }
        } else {
          res.json({
            result: false,
            message: "Şifreniz En Az 8 Karakterden Oluşmalıdır.",
          });
        }
      } else {
        res.json({
          result: false,
          message: "Girdiğiniz Bilgileri Kotrol Ediniz.",
        });
      }
    } else {
      res.json({
        result: false,
        message: "Lütfen Gerekili Alanları Doldurunuz.",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

router.get("/key", async (req, res) => {
  try {
    let key = await Keys.findOne({
      where: { user_id: req.decoded.id, status: 1 },
      attributes: ["key"],
    });
    if (key) {
      res.json({
        result: true,
        key: key.key,
      });
    } else {
      res.json({
        result: false,
        message: "Key Bulunamadı.",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

router.post("/key", async (req, res) => {
  try {
    let key = await Keys.findOne({
      where: { user_id: req.decoded.id, status: 1 },
      attributes: ["key"],
    });
    if (key) {
      await Keys.update(
        { key: uuidv4() },
        {
          where: { user_id: req.decoded.id, status: 1 },
        }
      );
    } else {
      await Keys.create({ key: uuidv4(), user_id: req.decoded.id });
    }
    res.json({
      result: true,
      message: "Yeni Key",
    });
  } catch (err) {
    console.log(err);
    res.json({
      result: false,
      message: req.messages["error"]["catch"],
    });
  }
});

module.exports = router;
