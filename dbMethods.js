const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'mydb',
    user: 'test',
    password: 'test'
});

async function test(){
    var rows = await db.any("select * from dictionary")
    console.log( rows )
}

async function saveWord(word, meaning){
    var row = await db.one("insert into dictionary(word, meaning) values( $(word) , $(meaning) ) returning *", {
        word:  word,
        meaning : meaning
    })

    console.log( row )
    return row
}

async function getWord(word){
    var row = await db.one("select * from dictionary where word = $(word)", {
        word:  word
    })

    console.log( row )
    return row
}



module.exports = {
    test: test,
    saveWord : saveWord,
    getWord: getWord
};