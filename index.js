const fetchCountries = async()=>{
const data = await fetch('https://restcountries.com/v3.1/all')
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
    return data;
}).catch((err)=>{
    console.log(err);
})
const main = document.getElementById('main');
const countries =data.map((country)=>{
    const countryDiv = document.createElement("div")
    countryDiv.setAttribute('class','flex flex-col  items-center bg-slate-300 pb-[20px] w-fit')

countryDiv.innerHTML=`
<img class="h-[10rem] w-[20rem] mb-4" src=${country.flags.png} alt=${country.flags.alt}>
<div>
  <p>Name:${country.name.common}</p>
  <p>Capital:${country.capital}</p>
  <p>Population:${country.population.toLocaleString()}</p>
  <p>independencies:${country.independent }</p>
  <a target="blank" class="bg-purple-400 rounded-2xl text-white  px-[2rem] py-2" href=${country.maps.googleMaps}><button class="mt-4">show on google map</button></a>
</div>
`
main.appendChild(countryDiv)
})
return countries
}
fetchCountries();