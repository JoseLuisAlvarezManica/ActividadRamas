
    const apiURL = 'https://66f4a9ee77b5e889709a1d3f.mockapi.io/tasks';

    const datacontainer = document.getElementById('data-container');
    datacontainer.style.display = 'none';

    function getData() {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Problema de red:');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const contenido = data.map(tarea => {
                    return `
                        <div>
                            <h4>${tarea.name}</h4>
                        </div>
                    `;
                }).join('');
                datacontainer.innerHTML = contenido;
                datacontainer.style.display = 'flex';  // Mostrar el contenedor de datos
                document.querySelector('h1').style.display = 'block';  // Mostrar el título de los datos
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
    
    function login() {
        let user = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        // Verifica las credenciales
        if (user === "Moises" && password === "123") {
            document.getElementById('mensaje').textContent = "Bienvenido";  // Limpia el mensaje de error
            document.getElementById('login').style.display = 'none';
            getData();
            
        } else {
            document.getElementById('mensaje').textContent = "¿Quién sos?"
        }
    }
    function home(){
        const user = document.getElementById('username');
        const password = document.getElementById('password');
        document.getElementById('mensaje').textContent = "";
        user.value = "";
        password.value = "";
        document.getElementById('login').style.display = 'block';
        datacontainer.style.display = 'none';
        document.querySelector('h1').style.display = 'none';
    }