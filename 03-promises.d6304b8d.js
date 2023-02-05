!function(){function o(o,n){Math.random()>.3?resolve("fulfill"):reject("rejected")}o().then((function(o){var n=o.position,c=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(c,"ms"))})).catch((function(o){var n=o.position,c=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(c,"ms"))})),console.log(o())}();
//# sourceMappingURL=03-promises.d6304b8d.js.map
