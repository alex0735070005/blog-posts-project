// function CityManager() {
//   this.inputCityName = document.querySelector("#city-name");
//   this.inputCityStrit = document.querySelector("#city-strit");
//   this.addBtnCity = document.querySelector("#add-name");
//   this.clearBtnListCities = document.querySelector("#clear-list");
//   this.listCitiesContainer = document.querySelector("#list-names");
//   this.dataCities = [];

//   this.addCity = function () {
//     // 1 get input name and city strit
//     var name = this.inputCityName.value;
//     var strit = this.inputCityStrit.value;

//     // 2 Valid name and city strit
//     var isNotValidError = this.isValidNotCity(name, strit);

//     // if is not valid stopped handler
//     if (isNotValidError) {
//       return alert(isNotValidError);
//     }

//     // 3 Add name to array list
//     this.dataCities.push({
//       name,
//       strit,
//     });
//     console.log(this.dataCities);
//     this.renderListCities();
//   };

//   this.isValidNotCity = function (name, strit) {
//     var isExistsName = this.dataCities.find(function (city) {
//       if (city.name === name || city.strit === strit) {
//         return true;
//       }
//       return false;
//     });

//     if (isExistsName) {
//       return "this data is exists !";
//     }
//     return false;
//   };

//   this.onInputName = function () {
//     console.log("onInputName");
//   };

//   this.onValidCity = function () {};

//   this.clearListCities = function () {
//     this.listCitiesContainer.innerHTML = "";
//     this.dataCities = [];
//     console.log("clearListCities");
//   };

//   // Render list cities
//   this.renderListCities = function () {
//     var html = "";
//     this.dataCities.forEach(function (city, index) {
//       html += `<p>${++index} ${city.name} ${city.strit} </p>`;
//     });
//     this.listCitiesContainer.innerHTML = html;
//   };

//   this.inputCityName.oninput = this.onInputName.bind(this);
//   this.addBtnCity.onclick = this.addCity.bind(this);
//   this.clearBtnListCities.onclick = this.clearListCities.bind(this);
// }

// new CityManager();

var pr = new Promise((r, j) => {
  r("HELLO");
});

var s = pr.then((d) => {
  console.log(d);
});
