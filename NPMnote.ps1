#get default (global) path
npm config get prefix

#install all from pakage.json in current path
npm install

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
