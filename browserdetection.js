
window.detect = function (ua) {
	ua = ua || window.navigator.userAgent;

	var browserMatch = /((?:opr|opera)(?: [\w]+)?)[ /]([\d.]+)/i.exec(ua) || // opera
		/((?:\w+?)?browser(?:\w+)?)[ \/]([\d.]+)/i.exec(ua) || 	// qqbrowser  ucbrowser browserNG ...
		/(firefox|chrome|iemobile|(?:mobile )?safari)[ \/]([\d.]+)/i.exec(ua) ||
		/(msie) ([\d.]+)/i.exec(ua) ||
		/(applewebKit)\/([\d.]+)/i.exec(ua) ||
		/(browser\/\w+)([\d.]+)/i.exec(ua) ||
		/ucweb\/?([\d.]+)/i.exec(ua) ||
		/(nokia) ?([\w.]+)/i.exec(ua) ||
		/([\w]+?browser)/i.exec(ua) ||
		/(mozilla)\/([\d.]+)/i.exec(ua) || [null, 'unknow'],

		osMath = /(android|adr|brew)(?:[ \/]([\d.]+))?/i.exec(ua) ||
		/([\w ]+?os)[ \/]([\d._]+)/i.exec(ua) ||
		/(mac os x) ([\d_]+)/i.exec(ua) ||
		/(windows nt) ([\d.]+)/i.exec(ua) ||
		/(windows phone) [\d.]+/i.exec(ua) || 
		/(windows); u; (wds [\d.]+)/i.exec(ua) ||
		/(linux); ?(?:u;) ?([\d.]+)/i.exec(ua) ||
		/(linux) ([\d_x]+)/i.exec(ua) ||
		/(nokia|mtk|blackberry|(?:windows ce))/i.exec(ua) || 
		/(series ?\d+)(?:\/([\d.]+))?/i.exec(ua) || [null, 'unknow'];

	return {
		browser: browserMatch[1],
		browserVersion: browserMatch[2],
		os: osMath[1],
		osVersion: osMath[2]
	}

};
