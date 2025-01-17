//                   @@
//                 @@@@@@
//                (@@@@@@@
//                @@@@@@@@/
//                @@@@@@@@@
//                @@@@@@@@@
//                @@@@@@@@&
//                @@@@@@@@*
//                @@@@@@@@
//                 @@@@@@@
//                 @@@@@@@
//                 @@@@@@@
//                 @@@@@@&
//                 @@@@@@&
//                 @@@@@@@
//                @@@@@@@@&
//              *@@@@@@@@@@@
//            /@@@@@@@@@@@@@@%
//         ,&&&&&&&&&&&&&&&&&&&&.

//       @@@@@@@@@@@@@@@@@@@@@@@@@@
//       @@@@@@@@@@@@@@@@@@@@@@@@@@
//       @@@@@@@@@@@@@@@@@@@@@@@@@@
//       ((((((((((((((((((((((((((

//      ,@@@@@@@@@@@@@@@@@@@@@@@@@@
//      #@@@@@@@@@@@@@@@@@@@@@@@@@/
//      @@@@@@@@@@@@@@@@@@@@@@@@@@
//      @@@@@@@@@@@@@@@@@@@@@@@@@@
//     @@@@@@@@@@@@@@@@@@@@@@@@@@@
//    @@@@@@@&@@@@@@@@@@@@@@@@@@@
//  #@@@@@@# @@@@@@@@@@@@@@@@@@@

//|+|~~~~~~~~~~~~~~~Standar Áridos~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// Syncing all the models at once.
const syncConfig = { force: true }; // -FIX-
conn.sync(syncConfig).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('°');
    console.log('°');
    console.log('°');
    console.log(
      '<>----------[ Servidor',
      process.env.PORT,
      ' Levantado]----------<>'
    );

    console.log(
      '//|+|~~~~~~~~~~~~~~~Standar Áridos~~~~~~~~~~~~~~~~~~~~~~|+|//'
    );

    console.log('-');
    console.log('\x1b[31m%s\x1b[0m', 'Sync Config: ', syncConfig);
    console.log('-');
  });
});
