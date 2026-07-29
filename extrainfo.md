# to create a container in Docker

- docker pull postgres
- docker run --name <name your container> -e POSTGRES_PASSWORD=<your password> -p <host port>:<container port> -d <image name >

- Example: - docker run --name postgres-db -e POSTGRES_PASSWORD=<your password> -p 5432:5432 -d postgres 

# connect to postges container
- docker exec -it postgres-db psql -U postgres




## Extra information to notice 

- app.get("/",async(req,res)=>{
    try {
        const result = await pool.query("SELECT current_database()")
        console.log("end")

        res.send(`Database name:${result.rows[0].current_database}`)

        console.log(result)
    } catch (error) {
        console.error(error)
        res.status(500).send("Failed to read database name")
    }
})

- on this "console.log(result)" result is:

Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ { current_database: 'express-crud' } ],
  fields: [
    Field {
      name: 'current_database',
      tableID: 0,
      columnID: 0,
      dataTypeID: 19,
      dataTypeSize: 64,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: noParse] ],
  _types: TypeOverrides {
    _types: {
      getTypeParser: [Function: getTypeParser],
      setTypeParser: [Function: setTypeParser],
      arrayParser: [Object],
      builtins: [Object]
    },
    text: {},
    binary: {}
  },
  RowCtor: null,
  rowAsArray: false,
  _prebuiltEmptyResultObject: { current_database: null }
}

