function game() { const e = document.createElement("script"); e.setAttribute("src", "./src/lose.js"); const l = document.createElement("script"); l.setAttribute("src", "./src/home.js"); const n = document.getElementById("confirm"), t = document.getElementById("play"), s = document.getElementById("game-area"), a = document.getElementById("timer"), r = document.getElementById("input"), i = document.getElementById("modal-card"), c = document.getElementById("modal-card-title"), d = document.getElementById("modal-card-area"), o = document.getElementById("cards-player"), p = document.getElementById("score-player"), u = document.getElementById("player-turn"), m = document.getElementById("cards-cpu"), y = document.getElementById("score-cpu"), f = document.getElementById("cpu-turn"); let k, g, v = 0; const h = new CardGame(characters); function T() { 0 === v ? (u.classList.add("turn"), f.classList.remove("turn")) : 1 === v && (u.classList.remove("turn"), f.classList.add("turn")) } function C(e, l) { const n = e[0], t = document.createElement("div"); t.classList.add(`card-flip-${l}-fliped`, `card-flip-${l}`); const a = document.createElement("div"); let r, i; a.classList.add("card-inner"), "player" === l && (t.onclick = () => t.classList.remove("card-flip-player-fliped")), r = `\n      <div id="${n.id}" class="card-${l}" style="background-image: url(${n.cover});">      \n        <img class="info-${l}" src="./assets/images/info.svg">\n        <div class="card-info">\n          <span class="name">${n.name}</span>\n          <img class="class" src='${n.class}'>\n          <ul class="list-cards">\n            <li class="skill-${l}">\n              <span>ATTACK</span>\n              <span>${n.skills.attack}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>DEFENSE</span>\n              <span>${n.skills.defense}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>AGILITY</span>\n              <span>${n.skills.agility}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>TECH</span>\n              <span>${n.skills.tech}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n      `, i = '\n      <div \n        class="card-back" \n        style="\n          background-image: url(\'./assets/images/card unflip.png\');\n          background-size: cover;\n          background-position: center;\n        ">\n      </div>\n      ', a.innerHTML += '\n      <div \n        class="card-back" \n        style="\n          background-image: url(\'./assets/images/card unflip.png\');\n          background-size: cover;\n          background-position: center;\n        ">\n      </div>\n      ', a.innerHTML += r, t.appendChild(a), s.appendChild(t) } function E(e) { "player" === e ? document.querySelectorAll(`.skill-${e}`).forEach((e => { e.onclick = () => { p.innerText = e.children[1].innerText, h.skillsPlayer.name = e.children[0].innerText, h.skillsPlayer.skill = parseInt(e.children[1].innerText) } })) : "cpu" === e && document.querySelectorAll(`.skill-${e}`).forEach((e => { e.children[0].innerText === h.skillsPlayer.name && (h.skillsCPU.name = e.children[0].innerText, h.skillsCPU.skill = parseInt(e.children[1].innerText)) })) } function I() { y.innerText = "00", p.innerText = "00", o.innerText = h.PlayerCards.length, m.innerText = h.CPUCards.length } function P() { let e = document.querySelector(".card-flip-cpu"); e.classList.contains("card-flip-cpu-fliped") && e.classList.remove("card-flip-cpu-fliped"), y.innerText = h.skillsCPU.skill, p.innerText = h.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-left"), C(h.CPUCards, "cpu") }), 2e3), v = 1, setTimeout((() => { e.remove(), B(), T(), I(), $() }), 3e3) } function L() { let e = document.querySelector(".card-flip-player"); e.classList.contains("card-flip-player-fliped") && e.classList.remove("card-flip-player-fliped"), y.innerText = h.skillsCPU.skill, p.innerText = h.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-player-right"), C(h.PlayerCards, "player") }), 2e3), v = 0, setTimeout((() => { T(), I(), e.remove(), B(), E("player") }), 3e3) } function x() { const l = h.gameEnded(); "player lose" === l ? fetch("./pages/lose.html").then((e => e.text())).then((e => app.innerHTML = e)).then(app.appendChild(e)) : "cpu lose" === l && (r.style.display = "block", clearInterval(k), clearInterval(g)) } function $() { const e = parseInt(document.querySelector(".card-cpu").id), l = parseInt(document.querySelector(".card-player").id); let n, t = 0; h.CPUCards.forEach((l => { if (l.id === e) for (skillItem in l.skills) l.skills[skillItem] > t && l.skills[skillItem] <= 7 && (t = l.skills[skillItem], n = skillItem) })), h.skillsPlayer.name = n, h.skillsCPU.name = n, h.skillsCPU.skill = t, h.PlayerCards.forEach((e => { e.id === l && (h.skillsPlayer.skill = e.skills[n]) })); const s = h.compareSkills(); if ("playerWin" === s) P(); else if ("cpuWin" === s) L(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); l.classList.contains("card-flip-player-fliped") && l.classList.remove("card-flip-player-fliped"), e.classList.remove("card-flip-cpu-fliped"), y.innerText = h.skillsCPU.skill, p.innerText = h.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), C(h.CPUCards, "cpu"), C(h.PlayerCards, "player") }), 2e3), v = 0, setTimeout((() => { I(), e.remove(), l.remove(), E("player"), B(), T() }), 3e3) } x() } function B() { const e = document.querySelector(".info-player"), l = document.querySelector(".info-cpu"), n = parseInt(document.querySelector(".card-player").id), t = parseInt(document.querySelector(".card-cpu").id), s = document.createElement("div"); function a(e) { characters.forEach((l => { l.id === e && (s.innerText = l.bio, d.appendChild(s), c.innerText = l.name, i.style.display = "block") })) } function r() { i.style.display = "none", d.removeChild(d.lastElementChild) } s.setAttribute("id", "modal-card-content"), e.onmouseover = () => a(n), l.onmouseover = () => a(t), e.onmouseleave = () => r(), l.onmouseleave = () => r() } h.shuffleCards(), h.getCards(), t.onclick = e => { e.preventDefault(), function () { if (parseInt(p.innerText) > 0) { E("cpu"); const e = h.compareSkills(); if ("playerWin" === e) P(); else if ("cpuWin" === e) L(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); e.classList.remove("card-flip-cpu-fliped"), y.innerText = h.skillsCPU.skill, p.innerText = h.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), C(h.CPUCards, "cpu"), C(h.PlayerCards, "player") }), 2e3), v = 1, setTimeout((() => { I(), e.remove(), l.remove(), B(), T(), $() }), 3e3) } x() } }() }, n.onclick = e => { e.preventDefault(); const n = document.getElementsByTagName("input")[0], t = a.innerText, s = { name: n.value, time: t }; n.value.length >= 3 && (leaders.unshift(s), r.style.display = "none", fetch("./pages/home.html").then((e => e.text())).then((e => app.innerHTML = e)).then(app.appendChild(l))) }, C(h.PlayerCards, "player"), C(h.CPUCards, "cpu"), function () { let e = 0, l = 0; g = setInterval((() => e++), 1e3), k = setInterval((() => { l++; let n = e % 60 < 10 ? "0" + e % 60 : e % 60, t = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : e % 60; a.innerText = `${t}:${n}.0${l % 10}` }), 100) }(), T(), I(), B(), E("player"); let S, b = document.getElementById("sound-01"); function q() { S = Math.floor(4 * Math.random() + 1), b = document.getElementById(`sound-0${S}`) } function U() { b.currentTime = 0, b.play() } b.addEventListener("loadedmetadata", (() => { q(), setTimeout(U, 3e3) })), b.addEventListener("timeupdate", (() => { b.currentTime >= .97 * b.duration && (q(), U()) })) } game();