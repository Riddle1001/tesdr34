fetch('https://9x72jv4z97n0wfudr6sgaho6txznnc.oastify.com')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // This returns a promise
    })
    .then(data => {
        // This is where you handle the data returned from the server
        console.log(data);
    })
    .catch(e => {
        // This is where you run code if the server returns any errors
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
