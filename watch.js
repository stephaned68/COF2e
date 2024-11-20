import { watch, readFileSync, writeFileSync } from 'fs';

const lsep = "\r\n";
const cof2esrc = "./cof2e-src.html";
const cof2edist = "./cof2e.html";
const cof2ejs = "./cof2e.js";

console.log(`Watching for file changes on ${cof2ejs}`);

let fsWait = false;
watch(cof2ejs, (event, filename) => {
  if (filename) {
    if (fsWait) return;
    fsWait = setTimeout(() => {
      fsWait = false;
    }, 100);
    console.log(`\n${new Date().toISOString()} - ${filename} file Changed`);
  }
  const jsRows = readFileSync(filename).toString().split(lsep);

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
});
