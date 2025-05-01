const express = require("express");
const router = express.Router();
const ctrlLesson = require("../controllers/ctrl_lesson");

router.post('/', ctrlLesson.createLesson);
router.get("/", ctrlLesson.getLessons);
router.get("/:id", ctrlLesson.getOneLesson);
router.put("/:id", ctrlLesson.updateLesson);
router.delete("/:id", ctrlLesson.deleteOneLesson);

module.exports = router;