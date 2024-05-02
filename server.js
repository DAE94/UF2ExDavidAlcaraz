const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const {Sequelize} = require("sequelize");


const crearConfigBaseDades = () =>{
  return new Sequelize("unidavidalcaraz", "root", "1234",{
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  });
}
const dbSeq = crearConfigBaseDades()
const {initModels} = require(".//models/init-models");


app.use(cors());

port = 3020;
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'unidavidalcaraz'
});

db.connect((err)=>{
  if (err) throw err;
  console.log('connexió bbdd feta');
});



// ---->Fet amb un get perquè el post no agafava el paràmetre!!
app.get('/modifCorreuAlcaraz', (req, res) => {
  const {email}=req.query
  console.log(email)

  const alterSql = `ALTER TABLE alumnes MODIFY COLUMN ALUMN_E_MAIL VARCHAR (30)`;
  db.query(alterSql, (alterErr, alterResult) => {
    if (alterErr) {
      return res.json('Ja està modificat, pelacanyes!');
    }
    const updateSql = 'UPDATE alumnes SET ALUMN_E_MAIL = ?';
    db.execute(updateSql, [email], (updateErr, updateResult) => {
      if (updateErr) {
        return res.status(500).json('Error al posar email');
      }
      res.json('Fet!');
    });
  });
});

app.get('/llistaAssigAlcaraz', (req, res) => {
  db.query('SELECT ASSIGNATURES.ASSIG_CODI, ASSIGNATURES.ASSIG_NOM FROM ASSIGNATURES, DEPARTAMENT, PROFESSOR, ASSIGNATURES_PROFESSOR WHERE DEPARTAMENT.DEPT_NOM = \'INFORMATICA I MATEMATICA APLICADA\'AND DEPARTAMENT.DEPT_PROF_DNI = PROFESSOR.PROF_DNI AND ASSIGNATURES_PROFESSOR.ASSIGPROF_PROF_DNI = PROFESSOR.PROF_DNI AND ASSIGNATURES_PROFESSOR.ASSIGPROF_ASSIG_CODI = ASSIGNATURES.ASSIG_CODI', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
})

// -->A mi no em va pq no m'agafa el req.body, però crec que ha de ser així
app.post('/modifDeptAlcaraz', async (req, res) => {
  const {departament} = req.body
  console.log("doctor", departament);
  try {
    await initModels(dbSeq).departament.update(departament,{where :{dept_codi: departament.dept_codi}});
    res.json("dades actualitzades");

  } catch (err){
    console.log(err);
    res.send("no puc, pelacanyes");
  }
});

app.get('/impartirAssigAlcaraz',(req,res)=>{

});
