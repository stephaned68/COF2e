import { watch, readFileSync, writeFileSync } from 'fs';

const cof2ehtml = "./cof2e.html";
const cof2edist = "./cof2e-dist.html";
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
  const js = readFileSync(filename).toString().split("\r\n");

  let foundSW = false;
  const htmlRows = readFileSync(cof2ehtml)
    .toString()
    .split("\r\n")
    .filter(hrow => {
      if (hrow.startsWith("<script"))
        foundSW = true;
      return !foundSW;
    });
  
    htmlRows.push("<script type=\"text/worker\">");
    htmlRows.push("");
    js.forEach(jsRow => {
      htmlRows.push(jsRow);
    });
    htmlRows.push("</script>");

    writeFileSync(cof2edist, htmlRows.join("\r\n"));
    console.log(`${cof2edist} updated`);
});
