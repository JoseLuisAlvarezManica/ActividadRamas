
    const apiURL = 'https://66f4a9ee77b5e889709a1d3f.mockapi.io/tasks';

    const datacontainer = document.getElementById('data-container');

    function getData(){
        fetch(apiURL).then(response =>{
            if (!response.ok){
                throw new Error('Problema de red:');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            const contenido = data.map(tarea => {
                return`
                    <div>
                        <h4>${tarea.name}</h4>
                    </div>
                `
            }).join('');
            datacontainer.innerHTML = contenido;
        }).catch(error =>{
            console.error('Fetch error:',error)
        })
    }
    function login() {
        let user = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        // Verifica las credenciales
        if (user === "Moises" && password === "123") {
            document.getElementById('contador').style.visibility = 'visible';
            document.getElementById('mensaje').textContent = "";  // Limpia el mensaje de error
            getData();
        } else {
            document.getElementById('mensaje').textContent = "¿Quién sos?";
            document.getElementById('contador').style.visibility = 'hidden';  // Oculta el contador si las credenciales son incorrectas
        }
    }