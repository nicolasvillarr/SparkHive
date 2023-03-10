const { Router } = require('express');
const router = Router()


router.get("/", async (req, res) => {
    res.send("ruta para el back! 👩‍💻").json
})

module.exports = router;