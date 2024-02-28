function home() { const e = document.getElementById("play-now"), t = document.getElementById("rules"), n = document.getElementById("about"), a = document.getElementById("leaderboards"), o = document.getElementById("close"), r = document.createElement("script"); r.setAttribute("src", "./src/game.js"); const i = new Audio("./assets/audios/MIND THE DROP.mp3"), c = document.querySelector(".char-1"), s = document.querySelector(".char-2"), [l] = characters.splice(Math.floor(Math.random() * characters.length), 1), [d] = characters.splice(Math.floor(Math.random() * characters.length), 1), h = document.getElementById("modal"), p = document.getElementById("modal-title"), u = document.getElementById("modal-content"); t.onclick = e => { e.preventDefault(), h.style.display = "block", p.innerText = "Rules", u.innerHTML = "GOAL\n    <br><br>\n    Win all the cards in the deck.\n    <br><br>\n    THE GAME\n    <br><br>\n    The game is based on comparing the values ​​of your card with those of the other player. For your card to win, the chosen characteristic must have a higher value than your opponent's card.\n    When your card wins, you win your opponent's card and the next card in your pile appears for a new turn.\n    <br><br>\n    SCOREBOARD\n    <br><br>\n    The scoreboard shows the number of cards you and your opponents have. The score changes automatically with each round.\n    In case of a tie, the cards are returned to the bottom of each player's pile and a new round begins.\n    <br><br>\n    HOW TO PLAY\n    <br><br>\n    1. To start, choose from the information on your card the one that you think has the value capable of beating your opponents' cards.\n    <br><br>\n    If you win - the other player's card will go to the back of your pile of cards and you continue choosing the information for your next card.\n    If the other player wins - his card will go behind his pile of cards and the turn to choose passes to him.\n    In case of a tie - the cards will go behind each player's pile and a new dispute is held, with the player who chose the cards that tied must choose again.\n    <br><br>\n    2. The game ends when one of the players wins all the cards in the deck\n    <br><br>" }, n.onclick = e => { e.preventDefault(), h.style.display = "block", p.innerText = "About", u.innerHTML = "Amid the creative effervescence of the academic universe, a unique project emerges that seeks to unite the passion for software development with the electrifying atmosphere of a strategy game. Inspired by the classic Super Trunfo and immersed in the intriguing universe of Valorant, this initiative's fundamental purpose is to transcend the limits of the classroom, transforming learning into an engaging experience.\n  <br><br>\n  Each meticulously written line of code aims to create a faithful and exciting adaptation of the Valorant universe, transforming theoretical concepts into a practical and dynamic experience. The aim is not only to provide entertainment, but also to offer academics the opportunity to apply their knowledge in a playful way, developing strategic and cognitive skills in an innovative way.\n  <br><br>\n  Instead of simply replicating, the project seeks to enrich the experience of participants, providing a deep dive into the nuances of the game. Each card developed represents not only an element of Valorant, but also an opportunity for scholars to explore the intricacies of game programming. Authenticity is key, and every detail aims to create a unique symbiosis between technical learning and the virtual universe.\n  <br><br>\n  Ultimately, this academic project aims to go beyond the traditional boundaries of teaching, integrating theoretical knowledge with the engaging and exciting practice of electronic games. By combining the creativity of academics with the richness of the Valorant universe, the initiative aims not only to train competent professionals, but also to stimulate a new way of learning, where fun and education go hand in hand in an electrifying and academic challenge.\n  <br><br>" }, a.onclick = e => { e.preventDefault(); const t = document.createElement("div"); leaders.forEach((e => { const n = document.createElement("div"); n.setAttribute("id", "leaderItem"); const a = document.createElement("span"); a.innerText = "//" + e.name; const o = document.createElement("span"); o.innerText = e.time, n.appendChild(a), n.appendChild(o), t.appendChild(n) })), u.innerHTML = "", u.appendChild(t), h.style.display = "block", p.innerText = "Leaderboards" }, o.onclick = () => { h.style.display = "none" }, window.onclick = e => { "home" === e.target.id && (h.style.display = "none") }, e.onclick = e => { e.preventDefault(), i.pause(), fetch("./pages/game.html").then((e => e.text())).then((e => app.innerHTML = e)), setTimeout((() => app.appendChild(r)), 1e3) }, i.volume = 1, i.volume.loop = !0, i.play(), c.setAttribute("src", `${l.avatar}`), c.classList.add("loaded"), s.setAttribute("src", `${d.avatar}`), s.classList.add("loaded") } home();