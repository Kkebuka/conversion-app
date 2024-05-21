import config from './config.js'
const apiKey = config.apiKey;

class XchangeRate{
    constructor(){
    
    }
    async todayRate(){
        const newRate = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);

        const response = await newRate.json()
        console.log(response)
        let output = `
            <h4> Dollar for ${response.
                time_last_update_utc
                } is ₦${response.conversion_rates.NGN}
            </h4>
        `
        console.log(output)

        document.querySelector('.rate').innerHTML = output;
    }

    paintUI(response){
        console.log(response, 'it works')
    }
}

const xchangeRate = new XchangeRate()

xchangeRate.todayRate()

