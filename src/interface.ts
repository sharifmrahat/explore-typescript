interface rectangleOptions {
  width: number;
  length: number;
  unit: string;
}

function drawRectangle(options: rectangleOptions) {
  let width = options.width;
  let length = options.length;
  let unit = options.unit;
}

drawRectangle({
  width: 30,
  length: 40,
  unit: "inches",
});
