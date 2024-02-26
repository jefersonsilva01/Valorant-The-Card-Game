function game() { const e = document.createElement("script"); e.setAttribute("src", "./src/lose.js"); const l = document.createElement("script"); l.setAttribute("src", "./src/home.js"); const n = document.getElementById("play"), t = document.getElementById("confirm"), s = document.getElementById("game-area"), a = document.getElementById("timer"), r = document.getElementById("input"), i = document.getElementById("modal-card"), c = document.getElementById("modal-card-title"), d = document.getElementById("modal-card-area"), o = document.getElementById("cards-player"), p = document.getElementById("score-player"), u = document.getElementById("player-turn"), m = document.getElementById("cards-cpu"), y = document.getElementById("score-cpu"), f = document.getElementById("cpu-turn"); let k, v, g = 0; const T = new CardGame(characters); function h() { 0 === g ? (u.classList.add("turn"), f.classList.remove("turn")) : 1 === g && (u.classList.remove("turn"), f.classList.add("turn")) } function C() { const e = document.querySelector(".card-flip-player"), l = (e, l, n) => e.style.setProperty(l, n), n = n => { let t = e.offsetWidth, s = n.pageX - e.offsetLeft, a = 5 * (.5 - (n.pageY - e.offsetTop) / t); l(e, "--dy", `${7 * -(.5 - s / t)}deg`), l(e, "--dx", `${a}deg`) }; e.addEventListener("mousemove", n, !1), e.addEventListener("mouseenter", n, !1), e.addEventListener("mouseleave", (() => { e.style.setProperty("--dy", "0"), e.style.setProperty("--dx", "0") }), !1) } function E(e, l) { const n = e[0], t = document.createElement("div"); t.classList.add(`card-flip-${l}-fliped`, `card-flip-${l}`); const a = document.createElement("div"); let r, i; a.classList.add("card-inner"), "player" === l && (t.onclick = () => t.classList.remove("card-flip-player-fliped")), r = `\n      <div id="${n.id}" class="card-${l}" style="background-image: url(${n.cover});">      \n        <img class="card-avatar-${l}" src="${n.avatar}" alt="${n.name}" />\n        <img class="info-${l}" src="./assets/images/info.svg">\n        <div class="card-info">\n          <span class="name">${n.name}</span>\n          <img class="class" src='${n.class}'>\n          <ul class="list-cards">\n            <li class="skill-${l}">\n              <span>ATTACK</span>\n              <span>${n.skills.attack}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>DEFENSE</span>\n              <span>${n.skills.defense}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>AGILITY</span>\n              <span>${n.skills.agility}</span>\n            </li>\n            <li class="skill-${l}">\n              <span>TECH</span>\n              <span>${n.skills.tech}</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n      `, i = '\n      <div \n        class="card-back" \n        style="\n          background-image: url(\'./assets/images/card unflip.png\');\n          background-size: cover;\n          background-position: center;\n        ">\n      </div>\n      ', a.innerHTML += '\n      <div \n        class="card-back" \n        style="\n          background-image: url(\'./assets/images/card unflip.png\');\n          background-size: cover;\n          background-position: center;\n        ">\n      </div>\n      ', a.innerHTML += r, t.appendChild(a), s.appendChild(t) } function I(e) { "player" === e ? document.querySelectorAll(`.skill-${e}`).forEach((e => { e.onclick = () => { p.innerText = e.children[1].innerText, T.skillsPlayer.name = e.children[0].innerText, T.skillsPlayer.skill = parseInt(e.children[1].innerText) } })) : "cpu" === e && document.querySelectorAll(`.skill-${e}`).forEach((e => { e.children[0].innerText === T.skillsPlayer.name && (T.skillsCPU.name = e.children[0].innerText, T.skillsCPU.skill = parseInt(e.children[1].innerText)) })) } function P() { y.innerText = "00", p.innerText = "00", o.innerText = T.PlayerCards.length, m.innerText = T.CPUCards.length } function L() { let e = document.querySelector(".card-flip-cpu"); e.classList.contains("card-flip-cpu-fliped") && e.classList.remove("card-flip-cpu-fliped"), y.innerText = T.skillsCPU.skill, p.innerText = T.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-left"), E(T.CPUCards, "cpu") }), 2e3), g = 1, setTimeout((() => { e.remove(), B(), h(), P(), S() }), 3e3) } function x() { let e = document.querySelector(".card-flip-player"); e.classList.contains("card-flip-player-fliped") && e.classList.remove("card-flip-player-fliped"), y.innerText = T.skillsCPU.skill, p.innerText = T.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-player-right"), E(T.PlayerCards, "player") }), 2e3), g = 0, setTimeout((() => { h(), P(), e.remove(), C(), B(), I("player") }), 3e3) } function $() { const l = T.gameEnded(); "player lose" === l ? fetch("./pages/lose.html").then((e => e.text())).then((e => app.innerHTML = e)).then(app.appendChild(e)) : "cpu lose" === l && (r.style.display = "block", clearInterval(k), clearInterval(v)) } function S() { const e = parseInt(document.querySelector(".card-cpu").id), l = parseInt(document.querySelector(".card-player").id); let n, t = 0; T.CPUCards.forEach((l => { if (l.id === e) for (skillItem in l.skills) l.skills[skillItem] > t && l.skills[skillItem] <= 7 && (t = l.skills[skillItem], n = skillItem) })), T.skillsPlayer.name = n, T.skillsCPU.name = n, T.skillsCPU.skill = t, T.PlayerCards.forEach((e => { e.id === l && (T.skillsPlayer.skill = e.skills[n]) })); const s = T.compareSkills(); if ("playerWin" === s) L(); else if ("cpuWin" === s) x(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); l.classList.contains("card-flip-player-fliped") && l.classList.remove("card-flip-player-fliped"), e.classList.remove("card-flip-cpu-fliped"), y.innerText = T.skillsCPU.skill, p.innerText = T.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), E(T.CPUCards, "cpu"), E(T.PlayerCards, "player"), C() }), 2e3), g = 0, setTimeout((() => { P(), e.remove(), l.remove(), I("player"), B(), h() }), 3e3) } setTimeout($, 2500) } function B() { const e = document.querySelector(".info-player"), l = document.querySelector(".info-cpu"), n = parseInt(document.querySelector(".card-player").id), t = parseInt(document.querySelector(".card-cpu").id), s = document.createElement("div"); function a(e) { characters.forEach((l => { l.id === e && (s.innerText = l.bio, d.appendChild(s), c.innerText = l.name, i.style.display = "block") })) } function r() { i.style.display = "none", d.removeChild(d.lastElementChild) } s.setAttribute("id", "modal-card-content"), e.onmouseover = () => a(n), l.onmouseover = () => a(t), e.onmouseleave = () => r(), l.onmouseleave = () => r() } T.shuffleCards(), T.getCards(), t.onclick = e => { e.preventDefault(); const n = document.getElementsByTagName("input")[0], t = a.innerText, s = { name: n.value, time: t }; n.value.length >= 3 && (leaders.unshift(s), r.style.display = "none", fetch("./pages/home.html").then((e => e.text())).then((e => app.innerHTML = e)).then(app.appendChild(l))) }, n.onclick = e => { e.preventDefault(), function () { if (parseInt(p.innerText) > 0) { I("cpu"); const e = T.compareSkills(); if ("playerWin" === e) L(); else if ("cpuWin" === e) x(); else { let e = document.querySelector(".card-flip-cpu"), l = document.querySelector(".card-flip-player"); e.classList.remove("card-flip-cpu-fliped"), y.innerText = T.skillsCPU.skill, p.innerText = T.skillsPlayer.skill, setTimeout((() => { e.classList.add("remove-cpu-right"), l.classList.add("remove-player-left"), E(T.CPUCards, "cpu"), E(T.PlayerCards, "player"), C() }), 2e3), g = 1, setTimeout((() => { P(), e.remove(), l.remove(), B(), h(), S() }), 3e3) } setTimeout($, 2500) } }() }, E(T.PlayerCards, "player"), C(), E(T.CPUCards, "cpu"), function () { let e = 0, l = 0; v = setInterval((() => e++), 1e3), k = setInterval((() => { l++; let n = e % 60 < 10 ? "0" + e % 60 : e % 60, t = Math.floor(e / 60) < 10 ? "0" + Math.floor(e / 60) : e % 60; a.innerText = `${t}:${n}.0${l % 10}` }), 100) }(), h(), P(), B(), I("player"); let b, q = document.getElementById("sound-01"); function U() { b = Math.floor(4 * Math.random() + 1), q = document.getElementById(`sound-0${b}`) } function A() { q.currentTime = 0, q.play() } U(), setTimeout(A, 3e3), q.addEventListener("timeupdate", (() => { q.currentTime >= .97 * q.duration && (U(), A()) })) } game();