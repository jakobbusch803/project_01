window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureLocation = document.querySelector(".temperature-location");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector('.temperature span');


    
    // Ermitteln der Geokoordinaten Lattitude und Longitude
    if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            // API
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=13f348e74ccf35a82a832d6a516970bd`


            fetch(api)
              .then(response => {
                return response.json();
              })
              .then(data => {
                console.log(data);
                const {temp} = data.main;
                const {name} = data;
                const {country} = data.sys;

                temperatureDegree.textContent = temp;
                temperatureLocation.textContent = name;
                locationTimezone.textContent = country;

                // Celsius Formel
                let celsius = (temp - 273.15);

                // Umrechnung von Kelvin in Celsius
                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "K"){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    }else {
                        temperatureSpan.textContent = "K";
                        temperatureDegree.textContent = temp;
                         
                    }

                });



                



              });
         });

     

    
    }

    

});

