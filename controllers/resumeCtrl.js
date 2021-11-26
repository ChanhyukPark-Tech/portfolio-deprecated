const connection = require('../dbConfig')

const resumeCtrl = {
    getSkills: async (req, res) => {
        connection.query('SELECT * from SKILLS', (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
    getCertifications: async (req, res) => {
        connection.query(`select certifications.id,image,title, group_concat(certification_content) contents from
certifications  join certification_list 
on certifications.id = certification_list.certifications_id
group by certifications.id`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
    getWorkingExperiences: async (req, res) => {
        connection.query(`SELECT * FROM workingExperiences ORDER BY year`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    }
    ,
    getEducationExperiences: async (req, res) => {
        connection.query(`SELECT * FROM educationExperiences ORDER BY year`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    },

    getOpenSourceContribution: async (req, res) => {
        connection.query(`SET SESSION group_concat_max_len = 1000000`)

        connection.query(`select opensource.opensource_id,image,title, group_concat(opensource_content) contents from
opensource  join opensource_list 
on opensource.opensource_id = opensource_list.opensource_id
group by opensource.opensource_id`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    }

    ,
    getWorkingExperienceImages: async (req, res) => {
        const {title} = req.body;
        const sql = `SELECT images FROM workingExperienceImages WHERE titleId = '${title}' `;
        connection.query(
            sql
            , (error, rows) => {
                if (error) throw error;
                res.send(rows);
            })

    },

    getEducationExperienceImages: async (req, res) => {
        const {title} = req.body;
        const sql = `SELECT images FROM educationExperienceImages WHERE titleId = '${title}' `;
        connection.query(
            sql
            , (error, rows) => {
                if (error) throw error;
                res.send(rows);
            })

    }

}

module.exports = resumeCtrl