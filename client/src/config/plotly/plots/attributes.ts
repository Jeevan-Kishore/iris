//Ref : https://plot.ly/javascript/reference/#scatter-marker

import {Constants} from '../../constants';
import {fontAttributes} from './font-attributes';
const extendFlat = require('../../../../../node_modules/plotly.js/src/lib/extend').extendFlat;


export const defaultAttributes = {
  x: [], //Array of numbers
  x0: 0, //Number or categorical coordinate string,
  dx: 1, //Number, default 1
  y: [], //Array of numbers,
  y0: 0, //Number or categorical coordinate string
  customdata: [], //custom data array to assign for each point on DOM
  dy: 1,
  ids: [], //data array - Assigns id labels to each datum.
  text: [], //array of strings - Sets text elements associated with each (x,y) pair
  hovertext: [], //array of strings to denote each point
  mode: 'text', //"lines", "markers", "lines+markers", "lines+markers+text", "none"
  hoveron: 'fills', //points", "fills", "points+fills
  line: {
    color: Constants.COLOR_GRAPH_PRIMARY, //string - Hex code or color name
    width: Constants.LAYOUT_WIDTH, // number - in pixels
    shape: 'linear', //'linear', 'spline', 'hv', 'vh', 'hvh', 'vhv'
    smoothing: 1, //number 0 - 1.3
    dash: 'solid', //"solid", "dot", "dash", "longdash", "dashdot", or "longdashdot" / "5px,10px,2px,2px"
    simplify: true, //boolean
  },
  connectgaps: false, //boolean
  fill: 'none', //'none', 'tozeroy', 'tozerox', 'tonexty', 'tonextx', 'toself', 'tonext'
  fillcolor: Constants.COLOR_GRAPH_PRIMARY,
  marker: extendFlat({}, {
      symbol: 'circle', // "0" | "circle" | "100" | "circle-open" | "200" | "circle-dot" | "300" | "circle-open-dot" | "1" | "square" | "101" | "square-open" | "201" | "square-dot" | "301" | "square-open-dot" | "2" | "diamond" | "102" | "diamond-open" | "202" | "diamond-dot" | "302" | "diamond-open-dot" | "3" | "cross" | "103" | "cross-open" | "203" | "cross-dot" | "303" | "cross-open-dot" | "4" | "x" | "104" | "x-open" | "204" | "x-dot" | "304" | "x-open-dot" | "5" | "triangle-up" | "105" | "triangle-up-open" | "205" | "triangle-up-dot" | "305" | "triangle-up-open-dot" | "6" | "triangle-down" | "106" | "triangle-down-open" | "206" | "triangle-down-dot" | "306" | "triangle-down-open-dot" | "7" | "triangle-left" | "107" | "triangle-left-open" | "207" | "triangle-left-dot" | "307" | "triangle-left-open-dot" | "8" | "triangle-right" | "108" | "triangle-right-open" | "208" | "triangle-right-dot" | "308" | "triangle-right-open-dot" | "9" | "triangle-ne" | "109" | "triangle-ne-open" | "209" | "triangle-ne-dot" | "309" | "triangle-ne-open-dot" | "10" | "triangle-se" | "110" | "triangle-se-open" | "210" | "triangle-se-dot" | "310" | "triangle-se-open-dot" | "11" | "triangle-sw" | "111" | "triangle-sw-open" | "211" | "triangle-sw-dot" | "311" | "triangle-sw-open-dot" | "12" | "triangle-nw" | "112" | "triangle-nw-open" | "212" | "triangle-nw-dot" | "312" | "triangle-nw-open-dot" | "13" | "pentagon" | "113" | "pentagon-open" | "213" | "pentagon-dot" | "313" | "pentagon-open-dot" | "14" | "hexagon" | "114" | "hexagon-open" | "214" | "hexagon-dot" | "314" | "hexagon-open-dot" | "15" | "hexagon2" | "115" | "hexagon2-open" | "215" | "hexagon2-dot" | "315" | "hexagon2-open-dot" | "16" | "octagon" | "116" | "octagon-open" | "216" | "octagon-dot" | "316" | "octagon-open-dot" | "17" | "star" | "117" | "star-open" | "217" | "star-dot" | "317" | "star-open-dot" | "18" | "hexagram" | "118" | "hexagram-open" | "218" | "hexagram-dot" | "318" | "hexagram-open-dot" | "19" | "star-triangle-up" | "119" | "star-triangle-up-open" | "219" | "star-triangle-up-dot" | "319" | "star-triangle-up-open-dot" | "20" | "star-triangle-down" | "120" | "star-triangle-down-open" | "220" | "star-triangle-down-dot" | "320" | "star-triangle-down-open-dot" | "21" | "star-square" | "121" | "star-square-open" | "221" | "star-square-dot" | "321" | "star-square-open-dot" | "22" | "star-diamond" | "122" | "star-diamond-open" | "222" | "star-diamond-dot" | "322" | "star-diamond-open-dot" | "23" | "diamond-tall" | "123" | "diamond-tall-open" | "223" | "diamond-tall-dot" | "323" | "diamond-tall-open-dot" | "24" | "diamond-wide" | "124" | "diamond-wide-open" | "224" | "diamond-wide-dot" | "324" | "diamond-wide-open-dot" | "25" | "hourglass" | "125" | "hourglass-open" | "26" | "bowtie" | "126" | "bowtie-open" | "27" | "circle-cross" | "127" | "circle-cross-open" | "28" | "circle-x" | "128" | "circle-x-open" | "29" | "square-cross" | "129" | "square-cross-open" | "30" | "square-x" | "130" | "square-x-open" | "31" | "diamond-cross" | "131" | "diamond-cross-open" | "32" | "diamond-x" | "132" | "diamond-x-open" | "33" | "cross-thin" | "133" | "cross-thin-open" | "34" | "x-thin" | "134" | "x-thin-open" | "35" | "asterisk" | "135" | "asterisk-open" | "36" | "hash" | "136" | "hash-open" | "236" | "hash-dot" | "336" | "hash-open-dot" | "37" | "y-up" | "137" | "y-up-open" | "38" | "y-down" | "138" | "y-down-open" | "39" | "y-left" | "139" | "y-left-open" | "40" | "y-right" | "140" | "y-right-open" | "41" | "line-ew" | "141" | "line-ew-open" | "42" | "line-ns" | "142" | "line-ns-open" | "43" | "line-ne" | "143" | "line-ne-open" | "44" | "line-nw" | "144" | "line-nw-open"
      opacity: 1 ,//array of numbers between or equal to 0 and 1
      size: 6, //array of numbers greater than or equal to 0
      maxdisplayed:0, //number greater than or equal to 0
      sizeref: 1,
      sizemin: 0,
      sizemode: 'diameter', //"diameter" | "area"
      showscale: false,
      colorbar: 'pixels', //"fraction" | "pixels"

      line: extendFlat({}, {
          width: 0, //number or array of numbers greater than or equal to 0
        }
      ),
      gradient: {
        type: 'none', //"radial" | "horizontal" | "vertical" | "none"
        color: Constants.COLORS_GRAPH_PRIMARY
      }
    }
  ),
  textposition: 'middle center', //'top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'
  textfont: fontAttributes,

  r: [], //Sets the radial coordinates. Polar charts only.
  t: [] //Sets the angular coordinates. Polar charts only.
};
