const pg = require('pg');
const conString = 'postgres://tjurqsrm:a3EMg4RiFXhLDz5mYScVBDvWlhKP-Ok7@babar.elephantsql.com:5432/tjurqsrm';

const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  else { console.log('connected in controller')}
})

const verifyUser = {}

verifyUser.authenticate = (req, res) => {
  client.query("SELECT * FROM userinfo WHERE username = '" + req.body.username + "'", function(err, result) {
    console.log('this is results: ', result.rows)
    if(err) {
      return console.log('error running query', err);
    }
    if (result.rows[0].username === req.body.username && result.rows[0].password === req.body.password){
      res.status(200).send(result.rows)

  };
  
})
};


module.exports = verifyUser;