(function() {

    //dom volledig klaar
    document.addEventListener("DOMContentLoaded", init);
    function init () {
        api.get('https://rickandmortyapi.com/api/character/').then(function(response){
            console.info(response);
            console.info(response.results.length);
            console.info(typeof(response.results.length));
            let length = response.results.length;
            let characterArray = [];
            for(let i = 0; i < 8 ; i++){
                let c = new Character(
                  response.results[i].id,
                  response.results[i].name,
                  response.results[i].status,
                  response.results[i].species,
                  response.results[i].gender,
                  response.results[i].image,
                  response.results[i].origin.name
                );
                characterArray.push(c);
            }
            renderHtmlPart1(characterArray);
        });
        getSecondPart();
        getThirdPart();
    }

    function renderHtmlPart1(characters){
        let bobTheHTMLBuilder = ``;
        for(let i = 0, l = characters.length; i < l; i++){
            bobTheHTMLBuilder +=
            `<div class="character-info">
                <div class="character-info__name">${characters[i].name}</div>
                <div class="character-info__top">
                    <div class="character-info__top__image"><img src="${characters[i].image}"></div>
                </div>
                <div class="character-info__body">
                    <div class="characters__id"><p>id:</p><p>${characters[i].id}</p></div>
                    <div class="characters__status"><p>status:</p><p>${characters[i].status}</p></div>
                    <div class="characters__species"><p>species:</p><p>${characters[i].species}</p></div>
                    <div class="characters__gender"><p>gender:</p><p>${characters[i].gender}</p></div>
                </div>
            </div>`
            ;
        }

        document.querySelector(".characters-page1").innerHTML = bobTheHTMLBuilder;
    }

    function getSecondPart(){
        api.get('https://rickandmortyapi.com/api/character/?page=2').then(function(response){
            console.info(response);
            console.info(response.results.length);
            console.info(typeof(response.results.length));
            let length = response.results.length;
            let characterArray = [];
            for(let i = 0; i < 8 ; i++){
                let c = new Character(
                  response.results[i].id,
                  response.results[i].name,
                  response.results[i].status,
                  response.results[i].species,
                  response.results[i].gender,
                  response.results[i].image,
                  response.results[i].origin.name
                );
                characterArray.push(c);
            }
            renderHtmlPart2(characterArray);
        });
    }

    function renderHtmlPart2(characters){
        let bobTheHTMLBuilder = ``;
        for(let i = 0, l = characters.length; i < l; i++){
            bobTheHTMLBuilder +=
            `<div class="character-info">
                <div class="character-info__name">${characters[i].name}</div>
                <div class="character-info__top">
                    <div class="character-info__top__image"><img src="${characters[i].image}"></div>
                </div>
                <div class="character-info__body">
                    <div class="characters__id"><p>id:</p><p>${characters[i].id}</p></div>
                    <div class="characters__status"><p>status:</p><p>${characters[i].status}</p></div>
                    <div class="characters__species"><p>species:</p><p>${characters[i].species}</p></div>
                    <div class="characters__gender"><p>gender:</p><p>${characters[i].gender}</p></div>
                </div>
            </div>`
            ;
        }

        document.querySelector(".characters-page2").innerHTML = bobTheHTMLBuilder;
    }

    function getThirdPart(){
        api.get('https://rickandmortyapi.com/api/character/?page=3').then(function(response){
            console.info(response);
            console.info(response.results.length);
            console.info(typeof(response.results.length));
            let length = response.results.length;
            let characterArray = [];
            for(let i = 0; i < 8 ; i++){
                let c = new Character(
                  response.results[i].id,
                  response.results[i].name,
                  response.results[i].status,
                  response.results[i].species,
                  response.results[i].gender,
                  response.results[i].image,
                  response.results[i].origin.name
                );
                characterArray.push(c);
            }
            renderHtmlPart3(characterArray);
        });
    }

    function renderHtmlPart3(characters){
        let bobTheHTMLBuilder = ``;
        for(let i = 0, l = characters.length; i < l; i++){
            bobTheHTMLBuilder +=
            `<div class="character-info">
                <div class="character-info__name">${characters[i].name}</div>
                <div class="character-info__top">
                    <div class="character-info__top__image"><img src="${characters[i].image}"></div>
                </div>
                <div class="character-info__body">
                    <div class="characters__id"><p>id:</p><p>${characters[i].id}</p></div>
                    <div class="characters__status"><p>status:</p><p>${characters[i].status}</p></div>
                    <div class="characters__species"><p>species:</p><p>${characters[i].species}</p></div>
                    <div class="characters__gender"><p>gender:</p><p>${characters[i].gender}</p></div>
                </div>
            </div>`
            ;
        }

        document.querySelector(".characters-page3").innerHTML = bobTheHTMLBuilder;
    }

})();

(function(){

        // Set the date we're counting down to
        var countDownDate = new Date("Sep 25, 2019 05:30:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
    
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
    
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        // Display the result in the element with id="demo"
        document.querySelector(".e-days").innerHTML = days;
        document.querySelector(".e-hours").innerHTML = hours;
        document.querySelector(".e-minutes").innerHTML = minutes;
        document.querySelector(".e-seconds").innerHTML = seconds;
    
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".c-countdown-timer").innerHTML = "IT'S OUT!!!";
        }
        }, 1000);

})();

(function(){

    let button_page1,
        button_page2,
        button_page3;

    function init(){
        initializeControls();
        SwitchPages();
        toggleText();
    }

    function initializeControls(){
        button_page1 = document.querySelector(".page1");
        button_page2 = document.querySelector(".page2");
        button_page3 = document.querySelector(".page3");
    }

    function SwitchPages(){
        button_page1.addEventListener("click", function(){
            button_page1.classList.add("active");
            button_page2.classList.remove("active");
            button_page3.classList.remove("active");
        });
        button_page2.addEventListener("click", function(){
            button_page2.classList.add("active");
            button_page1.classList.remove("active");
            button_page3.classList.remove("active");
        });
        button_page3.addEventListener("click", function(){
            button_page3.classList.add("active");
            button_page1.classList.remove("active");
            button_page2.classList.remove("active");
        });
    }

    var status = "more";

    function toggleText()
    {
        var text="The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons.";

        if (status == "less") {
            document.querySelector("addText").innerHTML=text;
            document.querySelector("toggleButton").innerText = "See Less";
            status = "more";
        } else if (status == "more") {
            document.querySelector("addText").innerHTML = "";
            document.querySelector("toggleButton").innerText = "See More";
            status = "less";
        }
    }

})();