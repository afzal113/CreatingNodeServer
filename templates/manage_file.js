var fs = require('fs');
var folder = process.cwd() + '/templates/';
var encoding = 'utf8';

function write (name, data) {
  fs.writeFile(folder + name, data, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
}

function read (name) {
  try {
    return fs.readFileSync(folder + name, encoding);
  } catch(ex) {
    return undefined;
  }
}
module.exports = {read: read,write: write};
