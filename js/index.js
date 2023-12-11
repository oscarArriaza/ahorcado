document.addEventListener
(
    "DOMContentLoaded",
    function()
    {
        principal();
        function principal()
        {
            let botonJugar=document.getElementById("jugar");
            botonJugar.addEventListener
            (
                "click",
                guardarDatos
            );
        }
        function guardarDatos()
        {
            guardarNombre();
            guardarEstadoDeLaPartida();
            guardarLetrasUsadas();
            guardarNumeroDeErrores();
            guardarMensajeFinal();
        }
        function guardarNombre()
        {
            let nombreDeUsuario=document.getElementById("nombreUsuario").value;
            let datos=
            {
                nombreDeUsuario: nombreDeUsuario
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosUsuario',datosJSON);
        }
        function guardarEstadoDeLaPartida()
        {
            let datos= 
            {
                estadoDeLaPartida:"noIniciada",
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosPartida',datosJSON);
        }
        function guardarLetrasUsadas()
        {
            let datos=
            {
                letrasUsadas: []
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosLetrasUsadas',datosJSON);
        }
        function guardarNumeroDeErrores()
        {
            let minimoDeErrores=0;
            let datos=
            {
                numeroDeErrores: minimoDeErrores
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosNumeroDeErrores',datosJSON);
        }
        function guardarMensajeFinal()
        {
            let datos=
            {
                mensajeFinal: ""
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosMensajeFinal',datosJSON);
        }
    }
);