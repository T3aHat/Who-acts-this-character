/*
The MIT License (MIT)

Copyright (c) 2020 T3aHat.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
parent = document.getElementById("firstHeading");
divv = document.createElement("div");
divv.classList.add("cv");
res = document.getElementById("mw-content-text").innerHTML;
resp = res.split(
  /<span class="mw-headline" id="[^"]*登場人物[^"]*">[^>]*登場人物[^<]*<\/span>/
)[1];
if (resp === undefined) {
  resp = res.split(
    '<span class="mw-headline" id="登場キャラクター">登場キャラクター</span>'
  )[1];
}
resp = resp.split("</h2>")[1];

resp = resp.split("<h2>")[0].replace(/\n/g, "");
dtdd = resp.match(/<dt.*?\/dd>/g);
dt = resp.match(/<dt>.*?<\/dt>/g);
const parser = new DOMParser();
charlist = [];
for (let i = 0; i < dt.length; i++) {
  doc = parser.parseFromString(dt[i], "text/html");
  char = doc.getElementsByTagName("dt")[0].textContent.replace(/\[.*?\]/g, "");
  charlist.push(char);
}
for (let i = 0; i < dtdd.length; i++) {
  dddd = dtdd[i].match(/ [:-] .*?<\/dd>/g);
  try {
    divv.insertAdjacentHTML(
      "beforeend",
      "<strong>" +
        charlist[i] +
        "</strong>" +
        dddd[0]
          .replace(/<dt>/g, "<p>")
          .replace(/<\/dt>/g, "")
          .replace(/<dd>/g, "")
          .replace(/<\/dd>/g, "</p>")
    );
    parent.appendChild(divv);
  } catch {
    dddd = dtdd[i].match(/：.*?<\/dd>/g);
    try {
      divv.insertAdjacentHTML(
        "beforeend",
        "<strong>" +
          charlist[i] +
          "</strong>" +
          dddd[0]
            .replace(/<dt>/g, "<p>")
            .replace(/<\/dt>/g, "")
            .replace(/<dd>/g, "")
            .replace(/<\/dd>/g, "</p>")
      );
      parent.appendChild(divv);
    } catch {
      continue;
    }
  }
}
