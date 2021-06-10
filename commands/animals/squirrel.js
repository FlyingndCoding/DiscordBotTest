// const cheerio = require('cheerio')
// const request = require('request')
// module.exports = {
//     name: 'squirrel',
//     description: 'this is a squirrel command',
//     execute(client, receivedMessage, command, args, Discord) {
//       let url = 'https://www.example.com?name=n1&name=n2';
//         let params = (new URL(url)).searchParams;
//         params.get('name') # => "n1"
//         params.getAll('name') # => ["n1", "n2"]
//         var options = {
//             url: 'https://results.dogpile.com/serp?pc=images&q=' + "squirrelimages",
//            // url: 'https://results.dogpile.com/serp?q=squirrel&sc=nF5Nfdk5O3jFALVRQzNZxHjNudYYctn7ffJgmnRFdSvM4vkr_vvzdElR3zUef7L5ykwNQRC2GpJWWLPQQ-KtpZFcIHeLkYIz1L3shX8MxFP0xYxi5kthKd2F0XwfQM-ygEwMQBQKvSRCFQUzRxG9li6OTWNQmAKkFcO0iGtsjpwOQ5PYJlGGkdPECl37g5OXs8AxJzOwXPk6v0mijWH1DWz5GTbi4XSpjXacQihoITL8ZViOLLY366R_Uz_jMPXQ3T8dj6W8Eqqi-hAdIUksur0KNzTY2sTvAlx0YccEorDzyz9fANszcdWtPR9Xa0vVbT_nepcuaWUk25oKXSnBFLuUon9Mqu2JLdDuya4z4sNIuzWxY4h_AC4VMto0ym9-8IJsNWQLa1RTYfCrsMHIvUyrrlRHWFtt0dUupPj1ArWU8_ldaA0rFX6KotoEISyuOslv4_jme_JG5fBGOsIEMO8Ya-TZ5xYjfyaXFyE1wje2xy5Cfmjxoj7UzMeOLyhQOhQt3E1WPwHk48DZuln7R3CwhDmS23c921PSg7j7U0S-XH4SPdMen9cYLGcRv_KP7T_XlXrSKVuOQgdk8Vw2nu8SbeNXigyQD8zl00foVlz9HdEsN4cQ9se-upK5ecyzh1nxfZUaHN9DLBco9WL6YFHUIjgi5tiIboVhhGQo44d3Wie6GTLUdPdtCUuQtD62nwdtxgUFwIH-qAmgzBd3mI0ypY5ZNxmP8aBaWBy1YnZvb5CuznlSwVAQY1eJF2bWmOhtGLfCn3nzGZSyGWcCppDlzW4IKEVk-MiTbH2N5jbTPlnPsTBsMV9hEiSdY0RT6ejoFrHD3BRhU4oskL6Q8TrDFil4mvcTX9w08gCL0mxOE1uuntOGjGRmYBkX5SifWEgcHnLmURa4Wq-6Ql4h_bLG0pSvYwmgpWoZc54oxxDOaWpDO6yCzzJY-xU2RWwgBVb5QNl5e09coi6lVBHGVu0JtJg8ZM2XhVUBFliD-2nvDiimhJmVjgVQ4KmW6vuWLg18xPWF8mK3y-St1KLts359osqHeKlBZeget93usxGG-pcMOtJ5kVpX1WeWihYZFgXyIBqULa7gs54n3jn9YUdMJqHSGNwM6WX4JJU8B3neD6XfrH7_KqDy9Lc7bMLDQpCR3u_Jn_WT28AgRbEvOqk_dY5jSUpfW8AnccRx6djqvP7SMREWyiAzrQizWV9rkkRuGkLaSYNLXtTar1ccXEaHkqPo55C-C_3--UjYlMRzTSCoSk1LOWKdoTNBk0XA5N4gsfeOM9QjTF5VeaaW_fmecGC461XBqSZZ2NzYR2tPUK76PzgHFEYyOTj62d5hS3hn3AKLUWBknoW1u9InbhYTHRpX9M4ELpwJns2sW-N_xWO5YbtKR5U3g14coEoJeQObiL2l_Flsjco6uVeUg7KuKWqCxex7VpoOSxI37BiHJg50i9BM0DnUPRZLjlsOrV3wNxbHPBYH7pCX4L9ni8J23De6L46QMwBiuYpO2xE3XfIbM2hN7_KdL7o7bN_GvfjFtI6ZicbB_ngWVHW1eUMwkV5PoXIimhO2a46mee9Zeu-3E_QNWxww8cV-v_Gfm98C_GVID0G5PrJMidCfA2e5KmYRlNhgkEI2Pe0k2-rkkrFtrllz4IFcobLELUGkclSV8cC6t9_XSkjxqAhjB_lPzXKKJtCtOeMMAR-brtr0BQNbA-SZxSt-EGdAAoBWtU0bL6gu7EloaRnGbs8bWR3mDXv1M_Utm4BnUEuB662egnsWyod-ETeNi_Q5iDjw7g',
//             method: "GET",
//             headers: {
//                 "Accept": "text/html",
//                 "User-Agent": "Chrome",
//             }
//         };

//         request(options, function (error, response, responsebody) {
//             if (error) return console.log("Error1")
//             $ = cheerio.load(responsebody);
//             console.log($)
//             var links = $(".image a.link");
//             var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

//             console.log(urls)
//             receivedMessage.channel.send(urls[Math.floor(Math.random() * urls.length)])

//         })

//     }
// }