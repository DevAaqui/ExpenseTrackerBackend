



let form = document.getElementById('forgotform')

form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem('token')

    let forgotObj = {
        email: document.getElementById('email').value,
        
        //upPass: document.getElementById('password').value
    }

    axios.post(`http://3.87.243.227:3000/password/forgotpassword`, forgotObj, {headers: {'Authorization': token}})
    .then(response => {
        if(response.status ===202)
        {
            document.body.innerHTML = 'Email sent successfully'
        }
        else{
            throw new Error('Something wrong!!!')
        }
    })
    .catch(err=> console.log(err))
}