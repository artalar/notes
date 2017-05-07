#get default (global) path
npm config get prefix

#install all from pakage.json in current path
npm install

#'--save' connectthis package how required for this projet (dependency)
npm i somePackage --save

#packages with devDependency not install by 'link' or 'install', but install by package.json
npm i somePackage --save-dev

#will write package current version in package.json
npm i somePackage --save --save-exact


#'i' - shortcut #'-g' install exact modules in default path #after '@' set version
npm i npm@latest -g

#npm uninstall / npm uninstall -g

#remember package from current path, like local publicate (name from pakage.json)
npm link

#install local package
npm link myModule

#unpublish
npm unlink

#del link package
npm unlink myModule

#
npm update somePackage