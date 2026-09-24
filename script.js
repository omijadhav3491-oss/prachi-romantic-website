let text = "For My GUBBU ❤️";
let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 100);
    }
}

typingEffect();


function checkPassword() {

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    let login = document.getElementById("login");


    if (password === "1511") {

        login.style.display = "none";


        let loveContent = document.createElement("div");

        loveContent.className = "love-content";


        loveContent.innerHTML = `

            <h1>Hey GUBBU ❤️</h1>

            <p class="subtitle">
                Welcome to our little love story 🫶
            </p>


            <div class="memory">

                <h2>19 August 2017 ❤️</h2>

                <p>
                    The day our beautiful story began... ✨
                </p>

                <p>
                    🏍️ Dombivli → Kondeshwar
                </p>

                <p>
                    Our first bike ride — 66 KM ❤️
                </p>

                <div id="love-counter">
                    ❤️ Our journey together ❤️
                </div>

            </div>


            <!-- OUR JOURNEY -->

            <div class="timeline">

                <button class="timeline-title">
                    आपला प्रवास ❤️
                </button>

                <div class="timeline-content">

                    <button class="timeline-btn">
                        2017 💙
                    </button>

                    <div class="timeline-text">

                        <p>
                            ही गोष्ट सुरू झाली 2017 मध्ये,
                            Royal College मध्ये. ❤️
                        </p>

                        <p>
                            मी तुला पहिल्यांदा कॉलेजमध्ये पाहिलं.
                            त्या वेळी तू sky blue रंगाचा
                            college dress घातला होता.
                        </p>

                        <p>
                            तुला पहिल्यांदा पाहिलं आणि कधी तू
                            माझ्या मनात इतकी खास झालीस,
                            हे मलाच कळलं नाही. ❤️
                        </p>

                        <p>
                            नंतर college WhatsApp group बनला.
                            तिथे तुझा पहिला photo पाहिला.
                            मनात खूप होतं तुझ्याशी बोलावं,
                            पण बोलायची हिंमत झाली नाही.
                        </p>

                        <p>
                            आणि असंच माझं एकतर्फी प्रेम
                            सुरू राहिलं. ❤️
                        </p>

                    </div>


                    <button class="timeline-btn">
                        2018 ❤️
                    </button>

                    <div class="timeline-text">

                        <p>
                            मग आला 2018...
                            त्या वर्षी आपण relationship मध्ये आलो. ❤️
                        </p>

                        <p>
                            आणि आपल्या नात्यातली माझी
                            सगळ्यात खास आठवण म्हणजे
                            आपली पहिली bike ride —
                            Dombivli ते Kondeshwar Temple. 🏍️❤️
                        </p>

                        <p>
                            त्या ride चे 66 KM आजही
                            माझ्या लक्षात आहेत.
                            तो दिवस माझ्यासाठी खूप special आहे. ❤️
                        </p>

                        <p>
                            त्या काळातही आपण खूप भेटू शकत नव्हतो.
                            मी Navi Mumbai ला आणि तू Dombivli ला...
                            पण distance असूनही आपलं नातं खास होतं.
                        </p>

                    </div>


                    <button class="timeline-btn">
                        First Ride 🏍️
                    </button>

                    <div class="timeline-text">

                        <p>
                            आपली पहिली bike ride —
                            Dombivli → Kondeshwar Temple. 🏍️❤️
                        </p>

                        <p>
                            तब्बल 66 KM आपण एकत्र प्रवास केला.
                            त्या दिवसाची आठवण माझ्यासाठी
                            आजही खूप special आहे. ❤️
                        </p>

                    </div>


                    <button class="timeline-btn">
                        13 August 2026 ❤️
                    </button>

                    <div class="timeline-text">

                        <p>
                            नंतर काही कारणांमुळे आपण
                            एकमेकांपासून दूर झालो.
                        </p>

                        <p>
                            काळ पुढे गेला...
                            पण काही नाती मनातून
                            खरंच कधीच जात नाहीत. ❤️
                        </p>

                        <p>
                            आणि मग आला
                            <b>13 August 2026</b>...
                        </p>

                        <p>
                            त्या दिवशी पुन्हा आपला contact झाला
                            आणि जिथे आपली गोष्ट थांबली होती,
                            तिथून पुन्हा एकदा सुरू झाली. ❤️
                        </p>

                    </div>


                    <button class="timeline-btn">
                        Today 🌍
                    </button>

                    <div class="timeline-text">

                        <p>
                            आज मी <b>Malaysia मध्ये</b> आहे
                            आणि तू <b>India मध्ये</b>. 🌍❤️
                        </p>

                        <p>
                            College मध्ये असतानाही
                            आपल्यामध्ये distance होतं.
                            तेव्हा Navi Mumbai आणि Dombivli
                            मध्ये अंतर होतं.
                        </p>

                        <p>
                            आज तर दोन देशांचं अंतर आहे.
                            🇲🇾 ❤️ 🇮🇳
                        </p>

                        <p>
                            पण यावेळी एक गोष्ट वेगळी आहे...
                        </p>

                        <p>
                            <b>
                                आपण पुन्हा एकमेकांना शोधलं आहे. ❤️
                            </b>
                        </p>

                        <p>
                            2017 मध्ये एका नजरेने सुरू झालेली गोष्ट,
                            2018 मध्ये प्रेमात बदलली,
                            मध्ये हरवली...
                            आणि 13 August 2026 ला पुन्हा सापडली. ❤️
                        </p>

                        <h3>
                            तू माझी GUBBU आहेस. ❤️
                        </h3>

                    </div>

                </div>

            </div>


            <div class="letter">

                <h2>Prachi ❤️</h2>

                <p>
                    Tu majhyapasun kiti hi lamb asli na,
                    pan majhya manat tu nehmi majhya javal astes.
                    Aapla long distance relationship ahe mhanun
                    kadhi kadhi tula khup miss karto… 🥺
                </p>

                <p>
                    Roj tuzyasobat bolta yet nahi, bhetata yet nahi,
                    tu samor naslis ki ek veglach feel hoto.
                    Pan ek gosht nakkich aahe —
                    distance mule Omkar cha Prachi varcha prem
                    kadhiच kami honar nahi. ❤️
                </p>

                <p>
                    Aaj aapan lamb aahot, pan ek divas hi distance
                    sampel ani aapan ekmekansobat asu. 🫶
                </p>

                <p>
                    I love you so much Prachi ❤️
                </p>

                <p class="signature">
                    — Tujha Omkar 🫶
                </p>

            </div>


            <h2 class="final-love">
                I Love You Prachi ❤️
            </h2>


            <div class="future">

                <h2>Until Forever… 🫶</h2>

                <p>
                    आज आपण कितीही दूर असलो,
                    तरी माझं मन नेहमी तुझ्यासोबतच आहे. ❤️
                </p>

                <p>
                    एक दिवस हे अंतर संपेल...
                    आणि आपल्या दोघांची एक सुंदर दुनिया असेल. 🏡
                </p>

                <p>
                    ना distance, ना waiting...
                    फक्त तू, मी आणि आपलं प्रेम. ♾️❤️
                </p>

            </div>


            <button onclick="showSurprise()">
                Click for a Surprise 🎁❤️
            </button>


            <p id="surprise"></p>

        `;


        document.body.appendChild(loveContent);


        updateLoveCounter();


        // आपला प्रवास button

        const timelineTitle =
            document.querySelector(".timeline-title");

        const timelineContent =
            document.querySelector(".timeline-content");


        timelineTitle.addEventListener("click", function () {

            timelineContent.classList.toggle("show");

        });


        // 2017, 2018, First Ride etc.

        const timelineButtons =
            document.querySelectorAll(".timeline-btn");


        timelineButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const story =
                    button.nextElementSibling;

                story.classList.toggle("show");

            });

        });

    }

    else {

        message.innerText = "Wrong Password 😜❤️";

    }
}



setInterval(function () {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    document.getElementById("hearts").appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 7000);

}, 700);



for (let i = 0; i < 40; i++) {

    let star = document.createElement("div");

    star.className = "star";

    star.innerHTML = "✦";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    star.style.animationDelay =
        Math.random() * 2 + "s";


    document.getElementById("stars").appendChild(star);

}



function showSurprise() {

    let surprise =
        document.getElementById("surprise");


     surprise.innerText =
    `GUBBU ❤️

 कधी माझी आठवण आली ना,
 तर डोळे बंद करून 2017 आठव…
 Royal College, तो sky blue dress,
 आणि तुला पहिल्यांदा पाहिलेला तो क्षण. 🥹❤️

 मग 2018 आठव…
 आपली पहिली bike ride,
 Dombivli ते Kondeshwar… 66 KM. 🏍️❤️

 आयुष्यात कितीही distance आलं,
 कितीही वेळ गेला,
 काही feelings कधीच बदलत नाहीत.

 13 August 2026 ला आपली story पुन्हा सुरू झाली…
 आणि यावेळी मला ती कायमची लिहायची आहे. ❤️

 Malaysia 🇲🇾 → India 🇮🇳
 
 Distance फक्त दोन जागांमध्ये आहे…
 आपल्या मनांमध्ये नाही. ❤️

  I Love You Prachi, My GUBBU. 🫶❤️`;

    surprise.classList.add("surprise-show");

}



function updateLoveCounter() {

    let startDate =
        new Date("2017-08-19");

    let today =
        new Date();


    let years =
        today.getFullYear() -
        startDate.getFullYear();


    let anniversary =
        new Date(
            startDate.getFullYear() + years,
            startDate.getMonth(),
            startDate.getDate()
        );


    if (today < anniversary) {

        years--;

        anniversary =
            new Date(
                startDate.getFullYear() + years,
                startDate.getMonth(),
                startDate.getDate()
            );

    }


    let months =
        today.getMonth() -
        anniversary.getMonth();


    if (today.getDate() < anniversary.getDate()) {

        months--;

    }


    if (months < 0) {

        months += 12;

    }


    let days =
        today.getDate() -
        anniversary.getDate();


    if (days < 0) {

        let previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );


        days += previousMonth.getDate();

    }


    document.getElementById("love-counter").innerHTML =
        `❤️ Together for ${years} Years, ${months} Months & ${days} Days ❤️`;

}



document.addEventListener("click", function(e) {

    let heart =
        document.createElement("div");


    heart.innerHTML = "❤️";

    heart.className = "tap-heart";


    heart.style.left =
        e.clientX + "px";


    heart.style.top =
        e.clientY + "px";


    document.body.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 1000);

});
function playMusic() {
    let song = document.getElementById("loveSong");

    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}