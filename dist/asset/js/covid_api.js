
class CovidApi{
    constructor(){

    }

    async getData (){
        const res = await fetch("https://api.covid19api.com/summary");
        const newsRes = await fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "61b426f4b5mshe584380871579ddp1e8795jsn640bae4618f6",
                "x-rapidapi-host": "covid-19-news.p.rapidapi.com"            }
        })

        const data = await res.json();
        const newsData = await newsRes.json();
    
        return {
            data,
            newsData
        }
    }
}

