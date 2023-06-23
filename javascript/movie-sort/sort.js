'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear);
  return arr; // added this little gem
}


function compareYear(a, b) {
  return b.year - a.year; // don't worry, I'll get this one too.
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr; // seriously, this is the 3rd one. C'mon guys.
}


function compareTitle(a, b) {
  const regexArticle = /^(a|an|the)\s/i; // I'm not stoked about regex, so ChatGPT did this one for me.
  const aTitle = a.title.replace(regexArticle, '');
  const bTitle = b.title.replace(regexArticle, '');
  return aTitle.localeCompare(bTitle);
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};



