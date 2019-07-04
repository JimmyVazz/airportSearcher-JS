class UI {

    constructor(){
        this.display = document.getElementById("displayRow")
        this.notify = document.getElementById("notification")
    }

    showResults(data){
        const results = data.airports
        console.log(results)

        let output = ''

        for (let i = 0; i < results.length; i++){
            output += "<tr>"
            output += "<td>" + results[i].name + "</td>"
            output += "<td>" + results[i].iata + "</td>"
            output += "<td>" + results[i].state.type + "</td>"
            output += "<td>" + results[i].city + "</td>"
            output += "<td>" + results[i].state.name + "</td>"
            output += "<td>" + results[i].country.name + "</td>"

            output += "</tr>"
        }
        this.display.innerHTML = output
    }

    showAlert(data){
        console.log(data.message)
        this.notify = innerHTML = `
            <article class="message is-danger">
            <div class="message-body">
                ${data.message}
            </div>
            </article>    
            `;

    }

}



export const ui = new UI()