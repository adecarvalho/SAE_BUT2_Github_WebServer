//
//*********************************** */
// gauge temperature
const gaugeTemperature = new RadialGauge({
  renderTo: 'canvas_temperature_id',
  width: 300,
  height: 300,
  units: "°C",
  title: "Temp",
  minValue: -10,
  maxValue: 50,
  majorTicks: [
    -10,
    0,
    10,
    20,
    30,
    40,
    50
  ],
  minorTicks: 10,
  strokeTicks: true,
  highlights: [
    {
      "from": -10,
      "to": 0,
      "color": "rgba(0,0, 255, .3)"
    },
    {
      "from": 0,
      "to": 50,
      "color": "rgba(255, 0, 0, .3)"
    }
  ],
  ticksAngle: 225,
  startAngle: 67.5,
  colorMajorTicks: "#ddd",
  colorMinorTicks: "#ddd",
  colorTitle: "#eee",
  colorUnits: "#ccc",
  colorNumbers: "#fff",
  colorPlate: "#777",
  borderShadowWidth: 0,
  borders: true,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();
//****************** */
//end