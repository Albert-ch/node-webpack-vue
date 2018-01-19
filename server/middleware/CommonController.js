const axios = require('axios')
const mysql = require('mysql')

module.exports = async (ctx)=> {

    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'node-test'
    })
    connection.connect()
    await new Promise( (resolve, reject)=> {
        connection.query('select * from user where id = ?', 2 ,(error, results, fields)=>{
            resolve( results[0] )
        })
        connection.end();

    }).then( (data)=> {
        ctx.body = data
    } )

}