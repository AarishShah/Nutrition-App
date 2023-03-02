const request = require('postman-request');

const url = 'https://api.api-ninjas.com/v1/nutrition?query=';
const query = 'water and orange juice';

request
    (
        {
            url: url + query,

            headers:
            {
                'X-Api-Key': 'FlX6q5RQkQ4wSab6f2XTLw==Xc6P2VGSoT9EueUD'
            },

            json: true
        },

        (error, response) =>
        {
            if (error) // means no response
                console.log('Unable to connect to service!');

            else if (query === '')
                console.log('No item entered');

            else if (response.body.length === 0) // occurs when query is empty or when item entered is not available in db eg. Harisa, Compueter.
                console.log('This item is not present in the database');

            else
                console.log(response.body)
        }
    )

// need to divide query into parts (quantity and item name)
// calculate total calories via add feature
// save calories with timestamp
// calories consumed (per week, month)
// calories compare with calories consumed