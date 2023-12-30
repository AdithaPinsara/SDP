const router = require("express").Router();
const User = require("../models/user");
const Officer = require("../models/officer");

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ nic: req.body.nic });

    if (!user) {
      return res.status(401).json("Wrong User Name");
    }

    const originalPassword = user.password;
    const inputPassword = req.body.password;

    if (originalPassword !== inputPassword) {
      return res.status(401).json("Wrong Password");
    }

    // Destructure the user object to exclude sensitive information (password)
    const { password, ...userWithoutPassword } = user._doc;

    res.status(200).json({ user: userWithoutPassword });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// OFFICER LOGIN
router.post('/officerlogin', async (req, res) => {
  try {
    const officer = await Officer.findOne({ officerId: req.body.officerId });

    if (!officer) {
      return res.status(401).json("Wrong Officer ID");
    }

    const originalPassword = officer.password;
    const inputPassword = req.body.password;

    if (originalPassword !== inputPassword) {
      return res.status(401).json("Wrong Password");
    }

    // Destructure the officer object to exclude sensitive information (password)
    const { password, ...officerWithoutPassword } = officer._doc;

    res.status(200).json({ officer: officerWithoutPassword });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
