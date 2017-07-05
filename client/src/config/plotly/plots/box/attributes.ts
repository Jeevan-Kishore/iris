import {defaultAttributes} from '../attributes';

import {Constants} from '../../../constants';
import {fontAttributes} from '../font-attributes';
import {colorAttributes} from "../color-attributes";
const extendFlat = require('../../../../../node_modules/plotly.js/src/lib/extend').extendFlat;




module.exports = {
    x: defaultAttributes.x,
    x0: defaultAttributes.x0,
    dx: defaultAttributes.dx,
    y: defaultAttributes.y,
    y0: defaultAttributes.y0,
    dy: defaultAttributes.dy,

    text: defaultAttributes.text,
    hovertext: defaultAttributes.hovertext,

    textposition: 'none', //'inside', 'outside', 'auto', 'none'

    textfont: extendFlat({}, fontAttributes, {
        description: 'Sets the font used for `text`.'
    }),

    insidetextfont: extendFlat({}, fontAttributes, {
        description: 'Sets the font used for `text` lying inside the bar.'
    }),

    outsidetextfont: extendFlat({}, fontAttributes, {
        description: 'Sets the font used for `text` lying outside the bar.'
    }),

    orientation: 'v', // 'v', 'h'

    base: null,

    offset: null, //Shifts the position where the bar is drawn - number

    width: null, //number

    //marker: marker, TODO - Create config for marker .. Dependency exists

    r: defaultAttributes.r,
    t: defaultAttributes.t,

    _deprecated: {
        bardir: 'h' //'v','h'
    }
};
