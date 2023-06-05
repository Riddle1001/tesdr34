fetch('https://9x72jv4z97n0wfudr6sgaho6txznnc.oastify.com/', { mode: 'no-cors' })
    .then(response => {
        // handle response
        console.log(response);
    })
    .catch(error => {
        // handle error
        console.log('Fetch error: ' + error);
    });
