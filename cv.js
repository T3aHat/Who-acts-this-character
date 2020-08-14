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
function get_resp(res) {
  resp = res.split(
    /<span class="mw-headline" id="登場人物">登場人物<\/span>/
  )[1];
  if (resp !== undefined) {
    return resp;
  } else if (resp === undefined) {
    resp = res.split(
      '<span class="mw-headline" id="登場キャラクター">登場キャラクター</span>'
    )[1];
  }
  if (resp !== undefined) {
    return resp;
  } else if (resp === undefined) {
    resp = res.split(
      /<span class="mw-headline" id="[^"]*登場人物[^"]*">[^<]*登場人物[^<]*<\/span>/
    )[1];
  }
  if (resp !== undefined) {
    return resp;
  } else {
    return;
  }
}
parent = document.getElementById("firstHeading");
divv = document.createElement("div");
divv.classList.add("cv");
res = document.getElementById("mw-content-text").innerHTML;
resp = get_resp(res);
resp = resp.split("</h2>")[1];
resp = resp.split("<h2>")[0].replace(/\n/g, "");
dtdd = resp.match(/<dt((?!<dt).)*?\/dd>/g);
const parser = new DOMParser();
for (let i = 0; i < dtdd.length; i++) {
  doc = parser.parseFromString(dtdd[i], "text/html");
  char = doc.getElementsByTagName("dt")[0].textContent.replace(/\[.*?\]/g, "");
  dddd = dtdd[i].match(/声.*?[：:-].*?<\/dd>/g);
  try {
    divv.insertAdjacentHTML(
      "beforeend",
      "<strong>" +
        char +
        "</strong>" +
        " : " +
        dddd[0]
          .split(/声.*?[：:-]/)[1]
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
