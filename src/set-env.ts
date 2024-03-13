/** Initialize environment.prod.ts with secrets */

const fs = require('fs');

let environment = process.argv[2];

if (environment) {
  // Write to production environment file
  fs.writeFile('./src/environments/environment.prod.ts', environment, (err: any) => {
    if (err) console.error(err);
    console.log('Output generated at ./src/environments/environment.prod.ts');
  });
}
