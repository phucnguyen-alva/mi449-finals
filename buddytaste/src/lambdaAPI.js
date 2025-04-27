function splitFriends(allFriends){
    return allFriends.split(", ");
}


export async function getData(movie, friends) {
    const url = "https://f4ckavlbp6.execute-api.us-east-2.amazonaws.com/movies";
    let message = 'Failed'
    let friendsList = splitFriends(friends);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          movie_name: movie,
          users: friendsList
        })
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const jsonString = await response.json();
      if(!jsonString.statusCode){ 
        message = jsonString;
      }
      else{
        message = null;
      }
    } catch (error) {
      console.error(error.message);
      message = error.message;
    }

    return message;
  }