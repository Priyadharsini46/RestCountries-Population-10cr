//Get countries which has more that 10cr population

const getcountries = () => {
    const country= new XMLHttpRequest();
    country.open('GET','https://restcountries.eu/rest/v2/all');
    country.responeType ='json';
    country.send();
    country.onload =()=> {const data = country.response;
    let obj = JSON.parse(data);
    let p=obj.filter((country)=>country.population > 10_00_00_000).map((country)=>[country.name,country.population] );
    console.log(p);
    
    }
}

getcountries();