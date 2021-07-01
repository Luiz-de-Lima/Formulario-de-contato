const btn = document.querySelector('button')

const nome = document.querySelector('input[name="nome"]').value

const subject = document.querySelector('input[name="assunto"]').value
const message = document.querySelector('textarea[name="mensagem"]').value
const url = 'https://app-api-class.herokuapp.com/contact'


let resp = document.querySelector('p[name="resposta"]')


btn.onclick = function(event) {
    event.preventDefault()

    const dados = {
        method: "POST",
        body: JSON.stringify({
            name: nome,
            assunto: subject,
            mensagem: message

        })

    }


    fetch(url, dados)
        .then((response) => {

            return response.json(response)
                .then((result) =>

                    console.log(result)



                )

        })

}