
export async function getData() {
    const url = "https://f4ckavlbp6.execute-api.us-east-2.amazonaws.com/movies";
    let message = 'Failed'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          movie_name: 'Coradawwdne' ,
          users: [
            'treemang', 'thatmemecrona', 'ratgaming'
          ]
        })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const jsonString = await response.json();
      console.log(jsonString);
      if(!jsonString.statusCode){ 
        message = jsonString.movie + '\n' + jsonString.year + '\n' + jsonString.runtime;
      }
      else{
        message = jsonString.body;
      }
    } catch (error) {
      console.error(error.message);
      message = error.message;
    }

    return message;
  }