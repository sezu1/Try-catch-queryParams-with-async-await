import { getBtn, form, usersList } from "./elements.js"


async function getUsersList (usernames= null, names = null, e_mail = null, web_site = null, phones = null) {// 
    try{
        let url = 'http://localhost:8000/users'

        if(usernames){
            url += `?username=${usernames}`
        }else if(names){
            url += `?name=${names}`
        }else if(e_mail){
            url += `?email=${e_mail}`
        }else if(web_site){
            url += `?website=${web_site}`
        }else if(phones){
            url += `?phone=${phones}`
        }
        



        const response = await fetch (url);

        if (response.status === 200){
            const posts = await response.json()
            showText (posts)
      
         }else if(response.status === 404){
             throw `Error: 404 Not found this url`
         }
    }
    catch(error){
        console.log(error); 
    }
}


function showText (posts2){
        usersList.innerHTML = ''
        posts2.forEach(element => {
        usersList.innerHTML += `<li>${element.name}, ${element.email}, ${element.website}, ${element.phone}, ${element.username}</li>`
    })    
}


async function valueOfForm (event) {
    event.preventDefault();
    const {usernames, names, e_mail, web_site, phones} = form
    getUsersList(usernames.value, names.value, e_mail.value, web_site.value, phones.value)
    }


getUsersList()

form.addEventListener('submit', valueOfForm)







































// (url += `?name=${user.name}&username=${user.username}&email=${user.email}&website=${user.website}&phone=${user.phone}`)

        
//  if(response.status === 200){
    // users.forEach(user => {
    //     filterText.innerHTML = ''
    //          filterText.innerHTML += url += `?name=${user.name}&username=${user.username}&email=${user.email}&website=${user.website}&phone=${user.phone}`
    //  })
    //  }         
       
 
        
        
        
   