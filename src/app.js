//Credentials API
import { multi } from './air-port-codes-node';

const api = multi({
	key : '1651311905', 
	secret : '86aaca0687726d9', // Your API Secret Key: use this if you are not connecting from a web server
	limit : 20
});

//UI import
import {UI, ui} from './ui'


//Searh airport

const searchAirport = document.getElementById("search")

//Add Event Listener
searchAirport.addEventListener('keyup', e => {
    
    //Get user input
    const term = e.target.value
    console.log(term)

    //When user write sth
    if(term !== ''){
        //Make an http request to API
        api.request(term)
        // SUCCESS we found some airports
        api.onSuccess = (data) => {
            //console.log(data)
            ui.showResults(data)
        };

        // FAIL no airports found
        api.onError = (data) => {
            ui.showAlert(data)
        };

    }else{

    }
})