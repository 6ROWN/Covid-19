
class UI {
    constructor(){
        this.globalTotal = document.getElementById("global-total");
        this.globalActive = document.getElementById("global-active");
        this.globalDeath = document.getElementById("global-death");
        this.globalRecoveries = document.getElementById("global-recoveries");
        this.tableData = document.getElementById("table-data");
    }

    globalOutput(data){
        this.globalTotal.innerHTML = data.TotalConfirmed;
        this.globalDeath.innerHTML = data.TotalDeaths;
        this.globalRecoveries.innerHTML = data.TotalRecovered;
        this.globalActive.textContent = data.NewConfirmed;
    }

    countryOutput(data){
        data.forEach((country)=>{
            const tableRow = document.createElement("tr");
            tableRow.innerHTML += `
            <td> <img class="flag-img" src="asset/flags/${country.CountryCode.toLowerCase()}.svg " width="12"> <span> ${country.Country}</span></td>
            <td>${country.TotalConfirmed}</td>
            <td>${country.NewConfirmed}</td>
            <td>${country.TotalDeaths}</td>
            <td>${country.NewDeaths}</td>
            <td>${country.TotalRecovered}</td>
            <td>${country.NewRecovered}</td>
            `
            this.tableData.appendChild(tableRow);    
        })
    }

    news(data){
        for(let i=0; i < data.length; i++){
            const addNews = document.getElementById("news");
            addNews.innerHTML += `
            <div class="col-md-6 py-3">
                <div class="card">
                    <div class="card-img" style="height: 150px;">
                        <img src="${data[i].media}" class="card-img-top h-100 w-100" alt="...">
                    </div>
                    <div class="card-body text-start">
                        <a href="${data[i].link}" target="_blank">
                            <h6 class="card-title">${data[i].title}</h6>   
                        </a>
                        <div class="text-start">
                            <small class ="text-muted">
                                <i class='bx bx-time'></i> ${new Date(data[i].published_date).getFullYear()}-
                                ${new Date(data[i].published_date).getMonth()}-
                                ${new Date(data[i].published_date).getDate()}
                            </small> 
                        </div>             
                    </div>
                </div>
            </div>
            `
        }

    }
    //Filter country
    filterSearch(e){
        const rows = document.querySelectorAll("tr td span")
        const quest = e.target.value.toLowerCase();
        
        rows.forEach(row => {
            row.closest("tr")
            if(row.textContent.toLowerCase().indexOf(quest) !=-1){
                row.closest("tr")
            } else{
                row.closest("tr").style.display= "none"
            }
        })        
    }


    //BAR CHART
    barChart(items){
        const myChart = document.getElementById("myChart").getContext("2d");

        new Chart(myChart, {
            type : "doughnut",
            data: {
                labels : ["New Cases", "Total Cases", "New Death", "Total Death", "New Recovered", "Total Recovered"],
                datasets : [{
                    label: "Cases",
                    data: [
                        items.NewConfirmed, items.TotalConfirmed, items.NewDeaths,items.TotalDeaths, items.NewRecovered, items.TotalRecovered
                    ],
                    backgroundColor: [
                        "#fcd535",
                        "#6771dc",
                        "#ff6384",
                        "#36a2eb",
                        "#f44336",
                        "#c767dc",
                    ]  
                }]
            }, option: {
                title : {
                    display: true,
                    text:"Global Case Distribution"
                }
            }  
        })
    }
}