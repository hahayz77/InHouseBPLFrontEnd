async function clicklogin (username, password) {
    try {
      const Response = await fetch('http://localhost:8081/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: username, password: password})
    })
    } catch (error) {
      console.log(error)
    }
    const result = await Response.json();
    console.log(result);
    return result;
  }

async function clickCreateUser (){
  console.log("clickCreateUser")
}

  module.exports = { clicklogin, clickCreateUser };