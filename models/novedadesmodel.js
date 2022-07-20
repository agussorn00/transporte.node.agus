var pool = require('./bd');

async function getnovedades(){
    var query = 'selec * from novedades';
    var rows = await pool.query(query);
    return rows;
}


module.exports = {getnovedades}