const axios = require('axios')
const mysql = require('promise-mysql')

const mysql_set = require('../config/mysql_info')

module.exports = async (ctx)=> {

    await mysql.createConnection( mysql_set ).then( (conn) => {
        let result = conn.query('select * from user where id = ?',2)
        conn.end()
        return result
    } ).then( row => {
        console.log( 'row->', row )
        ctx.body = row
    } )



    // let connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '123456',
    //     database: 'node-test'
    // })
    // connection.connect()
    // await new Promise( (resolve, reject)=> {
    //     connection.query('select * from user where id = ?', 2 ,(error, results, fields)=>{
    //         resolve( results[0] )
    //     })
    //     connection.end();
    //
    // }).then( (data)=> {
    //     ctx.body = data
    // } )

}