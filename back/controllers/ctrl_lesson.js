const pool = require("../connection/sqlConnection");

exports.createLesson = async (req, res, next) => {
    try {
        const { name, matiere, date } = req.body;

        if (!name || !matiere || !date) return res.status(400).json({ msg: "all fields are required" });
        console.log(matiere);

        // Validation simple du format de la date (exemple avec format YYYY-MM-DD)
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(date)) {
            return res.status(400).json({ msg: "Invalid date format. Use YYYY-MM-DD." });
        }

        const sql = `INSERT INTO lesson(name, matiere, date) VALUES(?, ?, ?)`;
        await pool.execute(sql, [name, matiere, date]);

        return res.status(201).json({ msg: "Lesson created" });
    } catch (err) {
        return res.status(500).json({ err: err });
    }
};

exports.getLessons = async (req, res, next) => {
    try {
        const sql = "SELECT * FROM lesson";
        const [lessons] = await pool.execute(sql);

        return res.status(200).json({ lessons: lessons });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

exports.getOneLesson = async (req, res, next) => {
    try {
        const id = req.params.id;
        const sql = "SELECT * FROM lesson WHERE id = ?";
        const [lesson] = await pool.execute(sql, [id]);
        if (lesson.length === 0) return res.status(200).json({ msg: "lesson not found" });
        return res.status(200).json({ lesson: lesson[0] });
    } catch (err) {
        return res.status(500).json({ err });
    }
}

exports.deleteOneLesson = async (req, res, next) => {
    try {
        const id = req.params.id;
        const sql = "DELETE FROM lesson WHERE id = ?"
        await pool.execute(sql, [id]);
        return res.status(200).json({ msg: "lesson deleted" });
    } catch (err) {
        return res.status(500).json({ err });
    }
}

exports.updateLesson = async (req, res, next) => {
    try {
        const { name, matiere, date, step } = req.body;
        const id = req.params.id;

        const data = {}
        if (name) data.name = name;
        if (matiere) data.matiere = matiere;
        if (date) data.date = date;
        if (step) data.step = step;

        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholder = keys.map((cell) => `${cell} = ?`).join(", ");
        values.push(id);

        const sql = `UPDATE lesson SET ${placeholder} WHERE id = ?`;
        await pool.execute(sql, values);
        return res.status(200).json({ msg: "lesson modifié" });

    } catch (err) {
        return res.status(500).json({ err });
    }
};