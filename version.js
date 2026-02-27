const { gitDescribeSync } = require('git-describe');
const { version } = require('./package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');

const gitInfo = gitDescribeSync({
  dirtyMark: false,
  dirtySemver: false
});

gitInfo.version = version;
var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
gitInfo.date = new Date().toLocaleString("en-US", options);

/** Read exact installed version from node_modules */
function getInstalledVersion(packageName) {
  try {
    const pkgPath = resolve(__dirname, 'node_modules', packageName, 'package.json');
    return require(pkgPath).version;
  } catch {
    return 'unknown';
  }
}

gitInfo.dependencies = {
  angular: getInstalledVersion('@angular/core'),
  angularFire: getInstalledVersion('@angular/fire'),
  coreUi: getInstalledVersion('@coreui/angular'),
  fontAwesome: getInstalledVersion('@fortawesome/angular-fontawesome'),
  rxjs: getInstalledVersion('rxjs'),
  typescript: getInstalledVersion('typescript'),
};

const file = resolve(__dirname, 'src', 'environments', 'version.ts');
writeFileSync(file,
`// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(gitInfo, null, 4)};
/* tslint:enable */
`, { encoding: 'utf-8' });

console.log(`Wrote version info ${gitInfo.raw} to ${relative(resolve(__dirname, '..'), file)}`);