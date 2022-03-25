import {PackageJson, PackageName} from "../lib/types/package.type";
import {getPackageJson} from "../lib/services/getPackageJson.service";
import {fullCopy} from "../lib/services/fullCopy.service";
import {splitPackageName} from "../lib/services/getPackageName.service";
import {removePeerDependencies} from "../lib/services/removePeerDependencies.service";

let path:string = process.argv[2];
getPackageJson(path).then(async (packageJson:PackageJson)=>{
    console.log(`Importing npm package: ${packageJson.name} from: ${path}`);
    let packageName:PackageName = splitPackageName(packageJson.name);
    await fullCopy(path,packageName);
    console.log(`Initial copy complete.`);
    removePeerDependencies(packageJson);
    watchFiles(packageJson);
})

