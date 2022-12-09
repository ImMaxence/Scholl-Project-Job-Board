const mariadb = require('mariadb');
const pool = mariadb.createPool({ host: 'localhost', user: 'root', password: 'root', database: 'job_board' });

exports.bddSelect = async function (query, callback) {
    console.log('Connecting to DataBase...')
    let connect
    try {
        connect = await pool.getConnection()
        console.log('Selecting data in DataBase...')
        const rows = await connect.query(query)
        return callback(rows)
    }
    catch (err) {
        return callback('Something went wrong ! error:' + err)
    }
    finally {
        if (connect) {
            console.log('Closing the connection to DataBase...')
            connect.release()
        }
    }
}

exports.bddInsert = async function (query, callback) {
    console.log('Connecting to DataBase...')
    let connect
    try {
        connect = await pool.getConnection()
        console.log('Inserting data in DataBase...')
        await connect.query(query)
        return callback("Inserted !")
    }
    catch (err) {
        return callback('Something went wrong ! error:' + err)
    }
    finally {
        if (connect) {
            console.log('Closing the connection to DataBase...')
            connect.release()
        }
    }
}

exports.bddDelete = async function (query, callback) {
    console.log('Connecting to DataBase...')
    let connect
    try {
        connect = await pool.getConnection()
        console.log('Deleting data in DataBase...')
        await connect.query(query)
        return callback("Deleted !")
    }
    catch (err) {
        return callback('Something went wrong ! error:' + err)
    }
    finally {
        if (connect) {
            console.log('Closing the connection to DataBase...')
            connect.release()
        }
    }
}

exports.bddEdit = async function (query, callback) {
    console.log('Connecting to DataBase...')
    let connect
    try {
        connect = await pool.getConnection()
        console.log('Editing data in DataBase...')
        await connect.query(query)
        return callback("Edited !")
    }
    catch (err) {
        return callback('Something went wrong ! error:' + err)
    }
    finally {
        if (connect) {
            console.log('Closing the connection to DataBase...')
            connect.release()
        }
    }
}