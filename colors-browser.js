'use strict';

//
// Dummy module to temporarily replace @colors/colors for browser version
//

const noop = () => {};
const rarg = (arg) => arg;

module.exports = {
	enable: noop,
	strip: rarg,

	bold: rarg,
	dim: rarg,
	italic: rarg,
	underline: rarg,
	inverse: rarg,
	hidden: rarg,
	strikethrough: rarg,
  
	black: rarg,
	red: rarg,
	green: rarg,
	yellow: rarg,
	blue: rarg,
	magenta: rarg,
	cyan: rarg,
	white: rarg,
	gray: rarg,
	grey: rarg,
  
	brightRed: rarg,
	brightGreen: rarg,
	brightYellow: rarg,
	brightBlue: rarg,
	brightMagenta: rarg,
	brightCyan: rarg,
	brightWhite: rarg,
  
	bgBlack: rarg,
	bgRed: rarg,
	bgGreen: rarg,
	bgYellow: rarg,
	bgBlue: rarg,
	bgMagenta: rarg,
	bgCyan: rarg,
	bgWhite: rarg,
	bgGray: rarg,
	bgGrey: rarg,
  
	bgBrightRed: rarg,
	bgBrightGreen: rarg,
	bgBrightYellow: rarg,
	bgBrightBlue: rarg,
	bgBrightMagenta: rarg,
	bgBrightCyan: rarg,
	bgBrightWhite: rarg,
  
	blackBG: rarg,
	redBG: rarg,
	greenBG: rarg,
	yellowBG: rarg,
	blueBG: rarg,
	magentaBG: rarg,
	cyanBG: rarg,
	whiteBG: rarg,
};
