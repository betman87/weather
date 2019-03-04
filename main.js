
// const grad = document.getElementById('grad');
const dugme = document.getElementById('dugme');
function ucitajPrognozu() {
    let grad = $("#grad").val();
    console.log(grad);
    let url = `https://proxy-requests.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${grad}`;
    fetch(url)
        .then(response => response.json())
        .then(podatak => {
            console.log(podatak);

            let n = podatak.length;
            for (i = 0; i <= n; i++) {
                let a='';
                id = podatak[i].woeid;
                let url2 = `https://proxy-requests.herokuapp.com/https://www.metaweather.com/api/location/${id}`;
                a="Danasnja temperadura u "+podatak[i].title+" je :";
                fetch(url2).then(odgovor => odgovor.json())
                    .then(podataka => {
                     a+=podataka.consolidated_weather[0].the_temp;
                        document.body.innerText+=a+"\n";
                    });
                     
            }
            //     let c = Object.keys(podatak.query.pages)[0];

            // document.write(podatak.query.pages[c].extract);

            // document.body.innerHTML 
            //     document.getElementById('k').innerHTML='';
            //    document.getElementById('k').innerHTML+= podatak.query.pages[c].extract; //probati div
            // console.log() //ubaci slike i ostalo kuci
            // document.body.innerHTML+= <img src=${}></img>
        });

}

// dugme.addEventListener('click', ucitajPrognozu);
forma.addEventListener('submit', function (e) {
    e.preventDefault();//da se ne refresuje
    ucitajPrognozu();
});
