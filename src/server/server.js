const express = require( 'express' )
const path = require( 'path' )
const bodyParser = require( 'body-parser' )
const server = express()

const { readFile, writeFile } = require( 'fs' ).promises
const setHeaders = (req, res, next) => {
  res.set('x-skillcrucial-user', '27d0d6ac-09f5-462c-b643-333ad95af382')
  res.set('Access-Control-Expose-Headers', 'X-SKILLCRUCIAL-USER')
  next()
}

// server.use(
//   bodyParser.urlencoded( {
//     limit: '50mb',
//     extended: true,
//     parameterLimit: 50000,
//   } )
// )
// server.use( bodyParser.json( { limit: '50mb', extended: true } ) )
// server.use( setHeaders )
// server.use( express.static( path.join( __dirname, '../build' ) ) )
// server.get( '/', function ( req, res ) {
//   res.sendFile( path.join( __dirname, '../build', 'index.html' ) )
// } )
// server.listen( 9000 )
// // у Леши прописан 9000 но грузится на локалхост3000 ?

// const saveContacts = async (name, lastname, phone, email) => {
//   const result = await writeFile(
//     './server/contacts.json',
//     JSON.stringify(name, lastname, phone, email),
//     {
//       encoding: 'utf8',
//     }
//   )
//   return result
// }

// const getContacts = async () => {
//   const result = await readFile( './server/contacts.json', {
//     encoding: 'utf8',
//   } )
//     .then( ( data ) => JSON.parse( data ) )
//     .catch( () => [] )
//   return result
// }

// server.post( '/api/v1/contact', async ( req, res ) => {
//   const contact = req.body
//   const oldContacts = await getContacts()
//   await saveContacts( [ ...oldContacts, contact ] )
//   res.json( { status: 'success', data: contact } )
// } )

// server.get( '/api/v1/contact', async ( req, res ) => {
//    const contact = await getContacts()
//    res.json({ status: 'success', data: contact })
// } )

// // server.use('/api/', (req, res) => {
// //   res.status(404)
// //   res.end()
// // })