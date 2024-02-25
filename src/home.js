function home() { const e = document.getElementById("play-now"), t = document.getElementById("rules"), n = document.getElementById("about"), a = document.getElementById("leaderboards"), o = document.getElementById("close"), i = document.createElement("script"); i.setAttribute("src", "./src/game.js"); const r = ["BG jett", "BG raze", "BG yoru", "BG omen"], s = ["BG brimstone", "BG killjoy", "BG phoenix", "BG viper"], c = r[Math.floor(Math.random() * r.length)], l = s[Math.floor(Math.random() * s.length)]; const d = document.getElementById("modal"), h = document.getElementById("modal-title"), m = document.getElementById("modal-content"); t.onclick = e => { e.preventDefault(), d.style.display = "block", h.innerText = "Rules", m.innerHTML = "GOAL\n    <br><br>\n    Win all the cards in the deck.\n    <br><br>\n    THE GAME\n    <br><br>\n    The game is based on comparing the values ​​of your card with those of the other player. For your card to win, the chosen characteristic must have a higher value than your opponent's card.\n    When your card wins, you win your opponent's card and the next card in your pile appears for a new turn.\n    <br><br>\n    SCOREBOARD\n    <br><br>\n    The scoreboard shows the number of cards you and your opponents have. The score changes automatically with each round.\n    In case of a tie, the cards are returned to the bottom of each player's pile and a new round begins.\n    <br><br>\n    HOW TO PLAY\n    <br><br>\n    1. To start, choose from the information on your card the one that you think has the value capable of beating your opponents' cards.\n    <br><br>\n    If you win - the other player's card will go to the back of your pile of cards and you continue choosing the information for your next card.\n    If the other player wins - his card will go behind his pile of cards and the turn to choose passes to him.\n    In case of a tie - the cards will go behind each player's pile and a new dispute is held, with the player who chose the cards that tied must choose again.\n    <br><br>\n    2. The game ends when one of the players wins all the cards in the deck\n    <br><br>" }, n.onclick = e => { e.preventDefault(), d.style.display = "block", h.innerText = "About", m.innerHTML = "Amid the creative effervescence of the academic universe, a unique project emerges that seeks to unite the passion for software development with the electrifying atmosphere of a strategy game. Inspired by the classic Super Trunfo and immersed in the intriguing universe of Valorant, this initiative's fundamental purpose is to transcend the limits of the classroom, transforming learning into an engaging experience.\n  <br><br>\n  Each meticulously written line of code aims to create a faithful and exciting adaptation of the Valorant universe, transforming theoretical concepts into a practical and dynamic experience. The aim is not only to provide entertainment, but also to offer academics the opportunity to apply their knowledge in a playful way, developing strategic and cognitive skills in an innovative way.\n  <br><br>\n  Instead of simply replicating, the project seeks to enrich the experience of participants, providing a deep dive into the nuances of the game. Each card developed represents not only an element of Valorant, but also an opportunity for scholars to explore the intricacies of game programming. Authenticity is key, and every detail aims to create a unique symbiosis between technical learning and the virtual universe.\n  <br><br>\n  Ultimately, this academic project aims to go beyond the traditional boundaries of teaching, integrating theoretical knowledge with the engaging and exciting practice of electronic games. By combining the creativity of academics with the richness of the Valorant universe, the initiative aims not only to train competent professionals, but also to stimulate a new way of learning, where fun and education go hand in hand in an electrifying and academic challenge.\n  <br><br>" }, a.onclick = e => { e.preventDefault(); const t = document.createElement("div"); leaders.forEach((e => { const n = document.createElement("div"); n.setAttribute("id", "leaderItem"); const a = document.createElement("span"); a.innerText = "//" + e.name; const o = document.createElement("span"); o.innerText = e.time, n.appendChild(a), n.appendChild(o), t.appendChild(n) })), m.innerHTML = "", m.appendChild(t), d.style.display = "block", h.innerText = "Leaderboards" }, o.onclick = () => { d.style.display = "none" }, window.onclick = e => { "home" === e.target.id && (d.style.display = "none") }, e.onclick = e => { e.preventDefault(), fetch("./pages/game.html").then((e => e.text())).then((e => app.innerHTML = e)), setTimeout((() => { app.appendChild(i) }), 1e3) }, function () { const e = document.querySelector(".char-1"); e.setAttribute("src", `./assets/images/${c}.png`), e.classList.add("loaded"); const t = document.querySelector(".char-2"); t.setAttribute("src", `./assets/images/${l}.png`), t.classList.add("loaded") }(); const u = document.getElementById("sound"); setTimeout((function () { u.currentTime = 0, u.play() }), 1500) } home();