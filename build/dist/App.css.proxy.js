// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App {\n\ttext-align: center;\n}\n\n.App-logo {\n\theight: 40vmin;\n\tpointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\t.App-logo {\n\t\tanimation: App-logo-spin infinite 20s linear;\n\t}\n}\n\n.App-header {\n\tbackground-color: #282c34;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n}\n\n.App-link {\n\tcolor: #61dafb;\n}\n\n@keyframes App-logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}