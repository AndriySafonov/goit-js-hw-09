function e(e,o){Math.random()>.3?resolve("fulfill"):reject("rejected")}e().then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),console.log(e());
//# sourceMappingURL=03-promises.cf720f96.js.map
