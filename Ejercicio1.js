function parseURL(urlString) {
  // Dividimos la URL por las barras '/' y eliminamos los segmentos vacíos
  return urlString
      .split('/')  // Separa por cada barra '/'
      .filter(segment => segment !== '');  // Filtra los segmentos vacíos
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray); // ["en-US", "docs", "Web", "API", "URL", "pathname"]
