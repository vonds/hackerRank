// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa
const chooseBestSum = (t, k, ls) => ls.reduce((r, e) => r.concat(r.filter(c => c.length < k).map(c => c.concat([e]))), [[]]).filter(c => c.length === k).map(c => c.reduce((a, b) => a + b)).filter(s => s <= t).sort((a, b) => b - a)[0] || null