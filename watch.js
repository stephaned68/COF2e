import { watch, readFileSync, writeFileSync } from 'fs';

const lsep = "\r\n";
const cof2esrc = "./src/cof2e.html";
const cof2ejs = "./src/cof2e.js";
const cof2edist = "./cof2e.html";

console.log(`Watching for file changes on ${cof2ejs} & ${cof2esrc}`);

const mergeSources = () => {

  const jsRows = readFileSync(cof2ejs).toString().split(lsep);

  let foundSW = false;
  const htmlRows = readFileSync(cof2esrc)
    .toString()
    .split(lsep)
    .filter(hrow => {
      if (hrow.startsWith("<script"))
        foundSW = true;
      return !foundSW;
    });
  
    htmlRows.push("<script type=\"text/worker\">");
    htmlRows.push("");
    jsRows.forEach(jsRow => {
      htmlRows.push(jsRow);
    });
    htmlRows.push("</script>");

    writeFileSync(cof2edist, htmlRows.join(lsep));
    console.log(`${cof2edist} updated`);
}

let fsWait = false;
watch(cof2ejs, (event, filename) => {
  if (filename) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, 100);
    console.log(`\n${new Date().toISOString()} - ${filename} file Changed`);
  }

  mergeSources()

});

watch(cof2esrc, (event, filename) => {
  if (filename) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, 100);
    console.log(`\n${new Date().toISOString()} - ${filename} file Changed`);
  }
  
  mergeSources()
  
});