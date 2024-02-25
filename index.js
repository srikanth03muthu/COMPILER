function show() {
  let html = document.querySelector("#html-code").value;
  let css = document.querySelector("#css-code").value;
  let js = document.querySelector("#js-code").value;
  console.log("hello")
  let code=
  `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>${css}</style>
  </head>
  <body>${html}</body>
  <script>${js}</script>
  </html>`
  document.querySelector("iframe").srcdoc=code
}
function reset(){
  document.querySelector("#html-code").value="";
   document.querySelector("#css-code").value="";
  document.querySelector("#js-code").value="";
  document.querySelector("iframe").srcdoc=""
}