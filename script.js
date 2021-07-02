const btn = document.querySelector('button')







btn.onclick = function(event) {
    event.preventDefault()

    const nome = document.querySelector('input[name="nome"]').value

    const subject = document.querySelector('input[name="assunto"]').value
    const message = document.querySelector('textarea[name="mensagem"]').value
    const url = 'https://app-api-class.herokuapp.com/contact'

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