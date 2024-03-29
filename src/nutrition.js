const router = require('express').Router();

// keep app.js clean ✅
// move nutrition to "nutrition.js" in "src" directory ✅
router.get('/', (req,res) => {
    res.render('value')
})

router.get('/search', (req,res) => {
    
    const request = require('postman-request');
    
    const url = 'https://api.api-ninjas.com/v1/nutrition?query=';
    console.log(req.query.food)
    console.log(req.query.amount)
    const query = `${req.query.amount} ${req.query.food}`;
    
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
                    // res.send(response.body[0])
                    res.render('value',{
                        food:`Food: ${response.body[0].name}`,
                        amount:`Amount: ${response.body[0].serving_size_g}g`,
                        calories:`Calories: ${response.body[0].calories}`
                    })
                    
            }
        )
    
    // need to divide query into parts (quantity and item name) ✅
    // calculate total calories via add feature
    // save calories with timestamp
    // calories consumed (per week, month)
    // calories compare with calories consumed
    })

    module.exports = router