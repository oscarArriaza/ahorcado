document.addEventListener
(
    "DOMContentLoaded",
    function()
    {
        let indiceDeLaPalabra;
        principal();

        function principal()
        {
            let codigoASCII;
            let letra;
            let laLetraEnieYaSeImprimio=false;
            let encontrada;
            let mascaraConvertidaACadena;
            let palabra="";
            let numeroDeErrores;
            let pista="";
            const MAXIMO_DE_ERRORES=6;
            let estadoDeLaPartida;

            let body=document.getElementById("body");
            body.style="background-color: rgb(181, 182, 152);"

            let contenedorPrincipal=document.createElement("div");
            contenedorPrincipal.className="container";
            contenedorPrincipal.style="text-align:center;";
            body.appendChild(contenedorPrincipal);

            let h1Bienvenida=document.createElement("p");
            h1Bienvenida.className="h1";
            nombreDeUsuario=obtenerNombreDeUsuario();
            h1Bienvenida.textContent="Bienvenido "+nombreDeUsuario;
            contenedorPrincipal.appendChild(h1Bienvenida);

            let contenedorRow=document.createElement("div");
            contenedorRow.className="row";
            //contenedorRow.style="border: solid red";
            contenedorPrincipal.appendChild(contenedorRow);

            let divColDibujo=document.createElement("div");
            divColDibujo.className="col-sm-6 col-lg-4";
            contenedorRow.appendChild(divColDibujo);

            let divColInformacion=document.createElement("div");
            divColInformacion.className="col-sm-6 col-lg-4";
            contenedorRow.appendChild(divColInformacion);

            let divColAlfabeto=document.createElement("div");
            divColAlfabeto.className="col-sm-6 col-lg-4";
            contenedorRow.appendChild(divColAlfabeto);

            let divCol2Dibujo=document.createElement("div");
            divCol2Dibujo.className="card w-auto h-100";
            divColDibujo.appendChild(divCol2Dibujo);

            let divCol2Informacion=document.createElement("div");
            divCol2Informacion.className="card w-auto h-100";
            divColInformacion.appendChild(divCol2Informacion);

            let divCol2Alfabeto=document.createElement("div");
            divCol2Alfabeto.className="card w-auto h-100";
            divColAlfabeto.appendChild(divCol2Alfabeto);

            let divDibujoHeader=document.createElement("div");
            divDibujoHeader.className="card-header";
            divDibujoHeader.style="background-color: rgb(151, 151, 151)";
            divCol2Dibujo.appendChild(divDibujoHeader);

            let divDibujoBody=document.createElement("div");
            //divDibujo.style="border: solid blue";
            divDibujoBody.className="card-body";
            divDibujoBody.style="background-color: rgb(177, 177, 49);";
            divCol2Dibujo.appendChild(divDibujoBody);

            let divDibujoFooter=document.createElement("div");
            divDibujoFooter.className="card-footer";
            divDibujoFooter.style="height:5.706vh; background-color: rgb(151, 151, 151);";
            divCol2Dibujo.appendChild(divDibujoFooter);

            let divInformacionHeader=document.createElement("div");
            divInformacionHeader.id="informacionHeader";
            divInformacionHeader.className="card-header";
            divInformacionHeader.style="background-color: rgb(151, 151, 151); text-align:center;";
            divCol2Informacion.appendChild(divInformacionHeader);

            let divInformacionBody=document.createElement("div");
            divInformacionBody.id="informacionBody";
            //divInformacion.style="border:solid purple";
            divInformacionBody.className="card-body";
            divInformacionBody.style="background-color: rgb(177, 177, 49);";
            divCol2Informacion.appendChild(divInformacionBody);

            let divInformacionFooter=document.createElement("div");
            divInformacionFooter.id="informacionFooter";
            divInformacionFooter.className="card-footer";
            divInformacionFooter.style="background-color: rgb(151, 151, 151)";
            divCol2Informacion.appendChild(divInformacionFooter);

            let divAlfabetoHeader=document.createElement("div");
            divAlfabetoHeader.className="card-header";
            divAlfabetoHeader.style="height:6.079vh; background-color: rgb(151, 151, 151);";
            divCol2Alfabeto.appendChild(divAlfabetoHeader);

            let divAlfabetoBody=document.createElement("div");
            divAlfabetoBody.className="card-body";
            divAlfabetoBody.style="background-color: rgb(177, 177, 49);";
            divCol2Alfabeto.appendChild(divAlfabetoBody);

            let divAlfabetoFooter=document.createElement("div");
            divAlfabetoFooter.className="card-footer";
            divAlfabetoFooter.style="height:5.706vh; background-color: rgb(151, 151, 151);";
            divCol2Alfabeto.appendChild(divAlfabetoFooter);

            let h1Mascara=document.createElement("p");
            h1Mascara.className="h3";
            divDibujoHeader.appendChild(h1Mascara);

            let h1Categoria=document.createElement("p");
            h1Categoria.className="h3";
            divDibujoBody.appendChild(h1Categoria);

            let h1NumeroDeErrores=document.createElement("p");
            h1NumeroDeErrores.className="h3";
            divDibujoBody.appendChild(h1NumeroDeErrores);

            let dibujo=document.createElement("img");
            dibujo.src="./media/imagenes/"+obtenerNumeroDeErrores()+"_ahorcado.png";
            dibujo.className="w-100 rounded";
            dibujo.setAttribute("width", "300vw");
            dibujo.setAttribute("height", "300vh");
            divDibujoBody.appendChild(dibujo);

            if(obtenerEstadoDeLaPartida()==="terminada")
            {
                if(obtenerMensajeFinal()==="victoria")
                {
                    indiceDeLaPalabra=obtenerIndiceDeLaPalabra();
                    mostrarInformacion("victoria");
                }
                else if(obtenerMensajeFinal()==="derrota")
                {
                    indiceDeLaPalabra=obtenerIndiceDeLaPalabra();
                    mostrarInformacion("derrota");
                }   
            }

            for (let i = 0; i < 27; i++)
            {
                let laLetraYaFueUsada=false;
                if(i===14)
                {
                    letra="\u00D1";
                    laLetraEnieYaSeImprimio=true;
                    laLetraYaFueUsada=verificarQueLaTeclaNoFueUsada(letra,laLetraYaFueUsada);
                }
                else
                {
                    if(laLetraEnieYaSeImprimio)
                    {
                        codigoASCII=64+i;
                    }
                    else
                    {
                        codigoASCII=65+i;
                    }
                    letra=String.fromCharCode(codigoASCII);
                    laLetraYaFueUsada=verificarQueLaTeclaNoFueUsada(letra,laLetraYaFueUsada);
                }
                if(!laLetraYaFueUsada)
                {
                    let boton=document.createElement("button");
                    boton.setAttribute("type", "button");
                    boton.setAttribute("value", letra);
                    boton.textContent=letra;
                    boton.className="letras btn btn-primary ms-3 mt-3";
                    divAlfabetoBody.appendChild(boton);
                }
            }
            palabra=elegirPalabraAlAzar();
            pista=elegirPista();
            //console.log(palabra);
            //inicializarMascara(palabra);
            h1Mascara.textContent="La palabra es: "+obtenerMascara();
            h1Categoria.textContent="Pista: "+pista;
            numeroDeErrores=obtenerNumeroDeErrores();
            h1NumeroDeErrores.textContent="NUMERO DE ERRORES:"+numeroDeErrores+"/"+MAXIMO_DE_ERRORES;
            let letras=document.getElementsByClassName("letras");
            estadoDeLaPartida=obtenerEstadoDeLaPartida();
            if(estadoDeLaPartida==="terminada")
            {
                bloquearLetras(letras);
            }
            for (const elemento of letras)
            {
                elemento.addEventListener
                (
                    "click", () =>
                    {
                        let teclasUsadas=obtenerLetrasUsadas();
                        teclasUsadas.push(elemento.value);
                        guardarLetrasUsadas(teclasUsadas);
                        let letra=elemento.value;
                        elemento.setAttribute("hidden", "true");
                        encontrada=buscarLetraYModificarMascara(palabra,obtenerMascara(),letra,h1Mascara)
                        //console.log(encontrada);
                        //console.log(mascara);
                        if (encontrada)
                        {
                            mascaraConvertidaACadena=convirtiendoMascaraAString(obtenerMascara());
                            mascaraConvertidaACadena=mascaraConvertidaACadena.toLowerCase();
                            //console.log(mascaraConvertidaACadena);
                            //console.log(palabra);
                            if (mascaraConvertidaACadena===palabra)
                            {
                                guardarEstadoDeLaPartida("terminada");
                                guardarMensajeFinal("victoria");
                                bloquearLetras(letras);
                                mostrarInformacion("victoria");
                            }
                        }
                        else
                        {
                            numeroDeErrores++;
                            guardarNumeroDeErrores(numeroDeErrores);
                            cambiarDibujo(obtenerNumeroDeErrores(),dibujo);
                            h1NumeroDeErrores.textContent="NUMERO DE ERRORES:"+numeroDeErrores+"/"+MAXIMO_DE_ERRORES;
                            if (numeroDeErrores===MAXIMO_DE_ERRORES)
                            {
                                guardarEstadoDeLaPartida("terminada");
                                guardarMensajeFinal("derrota");
                                bloquearLetras(letras);
                                mostrarInformacion("derrota");
                            }
                        }
                    }
                );
            }
        }
        function elegirPalabraAlAzar()
        {
            let palabras=[];
            const MIN=0, MAX=29;
            let palabra;
            let estadoDeLaPartida;
            palabras[0]="managua";
            palabras[1]="caracas";
            palabras[2]="bogota";
            palabras[3]="tegucigalpa";
            palabras[4]="asuncion";
            palabras[5]="brasilia";
            palabras[6]="argel";
            palabras[7]="gaborone";
            palabras[8]="guitega";
            palabras[9]="praia";
            palabras[10]="luanda";
            palabras[11]="tripoli";
            palabras[12]="minsk";
            palabras[13]="lisboa";
            palabras[14]="dublin";
            palabras[15]="madrid";
            palabras[16]="moscu";
            palabras[17]="ankara";
            palabras[18]="damasco";
            palabras[19]="sana";
            palabras[20]="teheran";
            palabras[21]="pekin";
            palabras[22]="pionyang";
            palabras[23]="beirut";
            palabras[24]="honiara";
            palabras[25]="canberra";
            palabras[26]="suva";
            palabras[27]="wellington";
            palabras[28]="tarawa";
            palabras[29]="palikir";
            estadoDeLaPartida=obtenerEstadoDeLaPartida();
            if(estadoDeLaPartida==="noIniciada")
            {
                indiceDeLaPalabra = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
                guardarIndiceDeLaPalabra(indiceDeLaPalabra);
            }
            else
            {
                indiceDeLaPalabra=obtenerIndiceDeLaPalabra();
            }
            palabra=palabras[indiceDeLaPalabra];
            if(estadoDeLaPartida==="noIniciada")
            {
                inicializarMascara(palabra);
                guardarEstadoDeLaPartida("enCurso");
            }
            return palabra;
        }
        function inicializarMascara(palabra)
        {
            let mascara=[];
            for (let i = 0; i < palabra.length; i++)
            {
                mascara[i]="_";    
            }
            guardarMascara(mascara);
        }
        function buscarLetraYModificarMascara(palabra,mascara,letra,h1Mascara)
        {
            encontrada=false;
            letra = letra.toLowerCase();
            for (let i = 0; i < palabra.length; i++)
            {
                if (palabra.charAt(i)===letra)
                {
                    if(i===0)
                    {
                        letra = letra.toUpperCase();
                    }
                    mascara[i]=letra;
                    h1Mascara.textContent="La palabra es: "+mascara;
                    guardarMascara(mascara);
                    letra = letra.toLowerCase();
                    encontrada=true;
                }
            }
            return encontrada;
        }
        function convirtiendoMascaraAString(mascara)
        {
            let mascaraConvertidaACadena;
            //mascaraConvertidaACadena=mascara.toString();
            mascaraConvertidaACadena = mascara.join("");
            return mascaraConvertidaACadena;
        }
        function cambiarDibujo(numeroDeErrores,dibujo)
        {
            switch (numeroDeErrores)
            {
                case 1:
                    dibujo.src="./media/imagenes/1_ahorcado.png";
                    break;
                case 2:
                    dibujo.src="./media/imagenes/2_ahorcado.png";
                    break;
                case 3:
                    dibujo.src="./media/imagenes/3_ahorcado.png";
                    break;
                case 4:
                    dibujo.src="./media/imagenes/4_ahorcado.png";
                    break;
                case 5:
                    dibujo.src="./media/imagenes/5_ahorcado.png";
                    break;
                case 6:
                    dibujo.src="./media/imagenes/6_ahorcado.png";
                    break;
                default:
                    break;
            }
        }
        function bloquearLetras(letras)
        {
            for (const elemento of letras)
            {
                elemento.setAttribute("disabled",true);
            }
        }
        function elegirPista()
        {
            let pista;
            if(indiceDeLaPalabra<6)
            {
                pista="Se encuentra en América.";
            }
            else if(indiceDeLaPalabra<12)
            {
                pista="Se encuentra en África.";
            }
            else if(indiceDeLaPalabra<18)
            {
                pista="Se encuentra en Europa.";
            }
            else if(indiceDeLaPalabra<24)
            {
                pista="Se encuentra en Asia.";
            }
            else
            {
                pista="Se encuentra en Oceanía.";
            }
            return pista;
        }
        function mostrarInformacion(resultado)
        {
            rellenarDivInformacion();
            h1MesajeFinal=document.getElementById("mensajeFinal");
            h1NombreDeLaCapital=document.getElementById("nombreCapital");
            imagenDeLaCapital=document.getElementById("imagenCapital");
            parrafoInformacion=document.getElementById("parrafoInformacion");
            let capital00=[],capital01=[],capital02=[],capital03=[],capital04=[],capital05=[],capital06=[],capital07=[],capital08=[],capital09=[],capital10=[],capital11=[],capital12=[],capital13=[],capital14=[];
            let capital15=[],capital16=[],capital17=[],capital18=[],capital19=[],capital20=[],capital21=[],capital22=[],capital23=[],capital24=[],capital25=[],capital26=[],capital27=[],capital28=[],capital29=[];
            let capitales=
            [
                capital00=["Managua","https://upload.wikimedia.org/wikipedia/commons/7/71/Rotonda_Ruben_Dario.jpg","Managua (del náhuatl: Manawak), oficialmente Leal Villa de Santiago de Managua, es un municipio y la capital de la República de Nicaragua, cabecera del departamento de Managua, así como la sede del gobierno y los poderes del Estado. Se localiza en el occidente de Nicaragua, en la costa suroeste del lago Xolotlán o Managua, siendo la ciudad más grande del país en términos de población y extensión geográfica y una de las ciudades más grandes de América Central. La ciudad está asentada en un histórico poblado precolombino que fue elevado a villa en 1819 por el rey Fernando VII de España. Luego a ciudad en 1846, declarada Capital de la Nación en 1852 y fue creado distrito en 2009. Managua tiene una población de alrededor 1 370 000 habitantes dentro de sus límites municipales, el área metropolitana de Managua, (que comprende las ciudades más pobladas y próximas como Tipitapa y Ciudad Sandino) suma dos millones de habitantes, lo que la convierte en una de las ciudades más pobladas de América Central. Managua es el mayor núcleo poblacional del país, concentrando al 24 % de la población."],
                capital01=["Caracas","https://live.staticflickr.com/65535/48037480446_9c6ff288e6_h.jpg","Caracas, es la capital de la República Bolivariana de Venezuela y la ciudad más poblada de este país. Desde el siglo xix es considerada el centro del poder político y económico de Venezuela. Está ubicada en la zona centro-norte costera del país, a 12 km de la costa del mar Caribe y se sitúa dentro de un valle montañoso. Aunque se sitúa próxima a la costa, la ciudad se ubica a casi 900 metros de altitud, separada del Litoral central de Vargas, por la Cordillera de la Costa y que, a su paso por el núcleo urbano, se constituye como el Parque nacional El Ávila. La autopista Caracas-La Guaira sirve como principal vía de comunicación entre la ciudad y el estado costero de La Guaira, así como al Aeropuerto Internacional Simón Bolívar de Maiquetía y al puerto de La Guaira, el segundo puerto del país. Caracas fue fundada el 25 de julio de 1567 bajo el nombre de Santiago de León de Caracas por Diego de Losada."],
                capital02=["Bogotá","https://www.bain.com/contentassets/f62cb583095348a0adfa9776d94c23d3/local-office-images-bogota-v02-1950x650.jpg","Bogotá, oficialmente Bogotá, Distrito Capital (antiguamente, Santafé de Bogotá) nota es la capital de la República de Colombia y del departamento de Cundinamarca. Está administrada como distrito capital, y goza de autonomía para la gestión de sus intereses dentro de los límites de la Constitución y la ley. A diferencia de los demás distritos de Colombia, Bogotá es una entidad territorial de primer orden, con las atribuciones administrativas que la ley confiere a los departamentos. Está constituida por 20 localidades o distritos, donde cada uno de estos tiene su propio alcalde, al cual se le denomina Alcalde Menor, y una Junta Administradora Local (JAL), y es el epicentro político, económico, administrativo, industrial, artístico, cultural, deportivo y turístico del país."],
                capital03=["Tegucigalpa","https://www.dentons.com/-/media/images/website/background-images/offices/honduras/honduras.ashx?sc_lang=en","Tegucigalpa (del náhuatl: Tekohtsinkalpan 'En la casa del gran señor'), oficialmente Tegucigalpa, Municipio del Distrito Central y abreviado como Tegucigalpa, M. D. C., es la capital y sede de gobierno de la República de Honduras, junto a su ciudad gemela Comayagüela, según los artículos 8 y 295 de la actual Constitución de Honduras. Es la tercera ciudad más poblada de Centroamérica. Aunque ya desde 1536 se le conocía al pequeño poblado a las orillas de la cuenca del río Choluteca (hoy en día el Centro Histórico) por el nombre de Taguzgalpa, es con la llegada de los españoles a la región en busca de minerales que se reconoce el 29 de septiembre de 1578 como el día que marca su fundación bajo el nombre de Real de Minas de San Miguel de Tegucigalpa. Tres siglos después, el 30 de octubre de 1880 se convierte en la capital del país, durante la presidencia de Marco Aurelio Soto."],
                capital04=["Asunción","https://www.yluux.com/wp-content/uploads/La-nueva-Asunción-2016.jpg","Asunción, oficialmente la Ciudad de la Asunción (fundada como Nuestra Señora de la Asunción) es la capital y ciudad más poblada del Paraguay, ubicada en el centro-oeste de la Región Oriental. Es un municipio de primer orden administrado como distrito capital y no está integrado en ningún departamento. Limita al norte con el río Paraguay que lo separa del departamento de Presidente Hayes y de la Región Occidental; al este y sur con el departamento Central; y al oeste con el río Paraguay, que lo separa de la República Argentina por lo que es una ciudad fronteriza. Fue fundada el 15 de agosto de 1537 por Juan de Salazar de Espinosa, lo que la hace una de las ciudades más antiguas de Sudamérica."],
                capital05=["Brasilia","https://www.re-thinkingthefuture.com/wp-content/uploads/2021/08/A4789-Theory-in-Architecture-Athens-Charter-Image-6.jpeg","Brasilia (en portugués Brasília) es la capital federal de Brasil y la sede del Gobierno del Distrito Federal, localizada en la región Centro-Oeste del país. Tiene una población de 3 015 268 habitantes, según estimaciones de 2019 del Instituto Brasileño de Geografía y Estadística, lo que la convierte en la tercera ciudad del país por población. Además, tiene una población de 4 284 676 en la zona metropolitana. Es sede del Gobierno federal, conformado por los tres poderes de la república (ejecutivo, legislativo y judicial)."],
                capital06=["Argel","http://4.bp.blogspot.com/-E3z0hZbAbxU/U1k9JUYLVEI/AAAAAAAA0eg/CLLm0NuvYVQ/s1600/Argel_7.jpg","Argel (en árabe: الجزائر Al-Ŷazā'ir, «las islas», en francés: Alger, en tamazight: ⴷⵣⴰⵢⴻⵔ Ledzayer) es la capital y la mayor ciudad de Argelia. Argel está situada en el litoral mediterráneo y es el principal puerto del noroeste del Magreb. Conocida como «Argel la blanca» por el blanco luminoso de sus edificios vistos desde el mar, evolucionó en el siglo XIX hacia una ciudad mezcla de oriente y occidente que sedujo a muchos viajeros y escritores europeos a principios del siglo XX. Actualmente es una ciudad moderna, cuyos edificios y avenidas de estilo colonial francés empezaron a ser construidos en el siglo XIX; en el corazón de la ciudad, la alcazaba (casbah), con sus callejuelas laberínticas, corresponde a la ciudad vieja y fue declarada Patrimonio de la Humanidad por la Unesco en el año 1992."],
                capital07=["Gaborone","https://www.limkokwing.net/graphics/cache/65242a06fab4b11e316bb74d6e918104710e6fff.jpg","Gaborone (pron. AFI [χabʊ'rʊnI]) es la capital de Botsuana, con una población estimada de 246 325 (censo del 2022). Se localiza en el valle de los montes Kgale y Oodi, en la zona suroriental de Botsuana. Está a 15 kilómetros de la frontera con Sudáfrica y a 358 kilómetros de Pretoria. También es la capital administrativa del distrito sudeste. En ella se encuentra la sede de la Comunidad de Desarrollo de África Austral; la organización fue fundada en 1980 con el objetivo de incrementar la cooperación económica de sus miembros y reducir la dependencia de Sudáfrica. En Gaborone se encuentra la Universidad de Botsuana."],
                capital08=["Guitega","https://www.countryaah.com/wp-content/uploads/2019/06/Burundi-Gitega-730x548.jpg","Guitega es la reciente capital de Burundi. Está ubicada en el centro del país, en la meseta central de Burundi, esta aproximadamente a unos 62 kilómetros al sureste de Buyumbura. Guitega fue la sede y capital del Reino de Burundi hasta el año 1966. A finales de diciembre del año 2018, el presidente de Burundi, Pierre Nkurunziza, anunció la promesa en devolver a Guitega su antiguo estatus de capital política. Una votación en el Parlamento de Burundi hizo el cambio oficial el 16 de enero del año 2019, y se espera que todas las ramas del gobierno se trasladen en unos tres años a la nueva capital Guitega. Es capital de la provincia homónima, una de las 17 provincias de Burundi. La ciudad alberga el Museo Nacional de Burundi y el Aeropuerto de Guitega. La ciudad tiene un área de aproximadamente 27 kilómetros y tiene una población de 132.367 habitantes, o sea que tiene poco más de 4902 habitantes por km². Casi todas las calles de la ciudad de Guitega están sin asfaltar, mientras que el IDH del área metropolitana de la ciudad es el más bajo del mundo con 0,437 puntos de IDH. La ciudad está en el centro del país."],
                capital09=["Praia","https://upload.wikimedia.org/wikipedia/commons/f/fb/Praia_Harbor.jpg","Praia (pronunciación en portugués: /'pɾajɐ/ lit. 'Playa') es la capital y ciudad más poblada de la República de Cabo Verde. Se encuentra ubicado en el municipio del mismo nombre. La ciudad está localizada en la isla de Santiago, y es la capital del municipio de su nombre. Cuenta con una población que supera los 130 000 habitantes. La ciudad contaba en 1990 con 61 644 habitantes. La ciudad tiene un puerto comercial, que exporta café, caña de azúcar y frutas tropicales. Posee también una importante industria pesquera."],
                capital10=["Luanda","https://media.baamboozle.com/uploads/images/62255/1643482203_254587.jpeg","Luanda es la capital y principal ciudad de Angola. Está situada en la costa del océano Atlántico, y es el principal puerto y centro económico del país. También es capital de la provincia homónima. Fue fundada el 25 de enero de 1576 por el noble y explorador portugués Paulo Dias de Novais, bajo el nombre de São Paulo da Assunção de Loanda (San Pablo de la Asunción de Loanda). Actualmente tiene una población aproximada de 5 millones de habitantes, lo que la convierte en la tercera ciudad más poblada de habla portuguesa en el mundo, solo por detrás de São Paulo y Río de Janeiro, ambas en Brasil, y la 19.ª aglomeración más poblada del continente."],
                capital11=["Trípoli","https://static.toiimg.com/photo/69115951/tripoli.jpg?width=748&resize=4","Trípoli (en árabe طرابلس, Ṭarābulus) es la capital y la ciudad más poblada de Libia. Es, además, la sede del Gobierno central y la administración. Tiene una población de cerca de 1 690 000 habitantes y está situada en el noroeste del país, en la costa mediterránea. Trípoli fue fundada en el siglo VII a. C. por los fenicios, quienes la llamaron Oea. Más tarde, con la llegada de los romanos, la ciudad adquirió el estatus de ciudad romana más importante del continente africano. Por la ciudad fueron pasando cronológica e históricamente, además de los bereberes autóctonos del territorio, vándalos, bizantinos, árabes, españoles, turcos e italianos. Durante el dominio colonial italiano (1911 - 1941), la ciudad fue hecha capital del recién creado estado de Libia. El país logró la independencia en 1951. El puerto de Trípoli es el principal del país y la ciudad es centro comercial y manufacturero de este. Sede de la Universidad de Al-Fateh, Trípoli era una de las ciudades más modernas, ricas y con un mayor nivel de vida de África antes de la guerra de 2011 contra el coronel Gadafi."],
                capital12=["Minsk","http://3.bp.blogspot.com/-db4bmAJOQ2o/U4S6w1T_VQI/AAAAAAAAExc/o5O-70m8eaQ/s1600/НЛО+или+...порт+межгалактической+телепортации.jpg","Minsk (en bielorruso: Мінск; en ruso: Минск) es la capital y ciudad más grande de Bielorrusia. Se encuentra situada en el centro del país, y es atravesada por los ríos Nyamiha y Svíslach. Es la sede administrativa de la Comunidad de Estados Independientes (CEI). Minsk se extiende en un área de 509 km² en la que según estimaciones para el año 2020 habitan un total de 2 020 600 personas. Como capital del Estado, Minsk tiene un estatus administrativo especial dentro de Bielorrusia y es además la capital del óblast de Minsk y del distrito homónimo. Las primeras referencias históricas de la ciudad datan de 1067, cuando se la nombra como ciudad provincial en el principado de Polotsk. El asentamiento se desarrolló en los ríos que lo atraviesan. En 1242, Minsk se convirtió en parte del Gran Ducado de Lituania y recibió el título de ciudad en 1499. Desde 1569 fue la capital del Voivodato de Minsk, en la República de las Dos Naciones o Mancomunidad de Polonia-Lituania. En 1793 fue una de las regiones anexionadas por el Imperio ruso como consecuencia de la Segunda partición de Polonia. Entre 1919 y 1991, tras la Revolución rusa, Minsk fue la capital de la República Socialista Soviética de Bielorrusia y posteriormente, en 1991, de Bielorrusia tras la disolución de la Unión Soviética."],
                capital13=["Lisboa","https://i.pinimg.com/originals/1c/10/d3/1c10d33fdd76bd465a380fbd1fe45d4c.jpg","Lisboa (pronunciación en portugués: /liʒ'βoɐ/) es la capital y mayor ciudad de Portugal. Situada en la desembocadura del río Tajo, es la capital del país, capital del distrito de Lisboa, de la región de Lisboa, del Área Metropolitana de Lisboa, y es también el principal centro de la subregión de la Gran Lisboa. La ciudad tiene una población de 547.773 habitantes y su área metropolitana se sitúa en los 2.810.923 en una superficie de 2.921,90 km². Esta área contiene el 26% de la población del país. Lisboa es la ciudad más rica de Portugal."],
                capital14=["Dublín","https://www.wallpics.net/wp-content/uploads/2017/12/Dublin-Full-HD-scaled.jpg","Dublín (en irlandés: Baile Átha Cliath, pronunciado [ˌbʲlʲa: 'clʲiə] o población del vado de cañizo; en inglés: Dublin, pronunciado ['dʌblIn]) es la capital de la República de Irlanda y la ciudad más poblada de la isla. Está ubicada cerca del centro de la costa este sobre el mar de Irlanda, en la desembocadura del río Liffey y en el centro del condado de Dublín. Fue fundada por los vikingos alrededor de 841 como base militar y centro de comercio de esclavos, y ha sido capital del país desde la Edad Media."],
                capital15=["Madrid","https://www.rayburntours.com/wp-content/uploads/2018/11/madrid-1200x675.jpg","Madrid es un municipio y una ciudad de España. La localidad, con categoría histórica de villa, es la capital del Estado y de la Comunidad de Madrid. En su término municipal, el más poblado de España, están empadronadas 3 280 782 personas (INE 2022), constituyéndose como la segunda ciudad más poblada de la Unión Europea, así como su área metropolitana, con 6 779 888 habitantes empadronados."],
                capital16=["Moscú","https://i.pinimg.com/originals/c8/95/68/c895682975ebd67ab6e9b4b69c2f782f.jpg","Moscú (en ruso: Москва́, AFI: [mɐ'skva], transliterado como Moskvá) es la capital y la entidad federal más poblada de Rusia. La ciudad es un importante centro político, económico, cultural y científico de Rusia y del continente. Moscú es la megaciudad más septentrional de la Tierra y la ciudad más poblada de Europa. Su población es de 12 108 257 habitantes. En virtud de su expansión territorial al suroeste del óblast de Moscú, el 1 de julio de 2012 la capital aumentó su área en 2,5 veces, desde unos 1000 km² hasta 2500 km², y ganó una población adicional de 230 000 habitantes. Moscú está situada a orillas del río Moscova, en el Distrito Federal Central de la Rusia europea. En el curso de su historia, la ciudad ha sido capital de una sucesión de estados, desde el Gran Ducado de Moscú de la Edad Media, el Zarato ruso y la Unión Soviética, exceptuando el período del Imperio ruso."],
                capital17=["Ankara","https://idsb.tmgrup.com.tr/ly/uploads/images/2022/02/08/thumbs/800x531/180844.jpg","Ankara (tradicionalmente en español Angora) es la capital de Turquía y de la provincia homónima en la región de Anatolia Central. Tiene una población de 5 270 575 habitantes, lo que la convierte en la segunda ciudad más poblada del país tras Estambul. Es la sede del parlamento turco, de los ministerios y demás instituciones gubernamentales, además de las delegaciones diplomáticas extranjeras. Se trata de una importante ciudad comercial e industrial situada en el centro de Anatolia. Se encuentra estratégicamente situada en el centro de las redes turcas de autopistas y ferrocarriles, y funciona como centro para comercializar los productos de las áreas agrícolas colindantes. La ciudad fue famosa por sus cabras de pelo largo (cabras de angora) y su preciada lana (mohair), por su raza única de gatos (gatos de angora), por sus conejos blancos, por sus peras, su miel y por la uva moscatel que se produce en la región."],
                capital18=["Damasco","https://i.pinimg.com/originals/e6/78/ae/e678ae5c72e68ece041fd0bd2a2f5046.jpg","Damasco (en árabe: دمشق Dimashq, también transcrito como Dimisq, comúnmente conocida en Siria como ash-Sham y apodada la «Ciudad del Jazmín») es la capital y la segunda ciudad más poblada de Siria después de Alepo. Además de ser una de las ciudades habitadas más antiguas del mundo con más de 4000 años de historia, Damasco es un importante centro cultural y religioso del Levante mediterráneo. La ciudad tenía una población estimada de 1 711 000 habitantes en 2009."],
                capital19=["Saná","https://www.maciejdakowicz.com/wp-content/uploads/ngg_featured/arabia_middle_east_yemen_Sanaa_old_city_architecture_travel_adventure-1600x1067.jpg","Saná (también escrito en ocasiones como Sana, Sanaa, Sana'a o Sanaá; del árabe صنعاء, transcrito Ṣan'ā') es la capital de Yemen. Posesión etíope en el siglo VI, la ciudad fue ocupada en numerosas ocasiones por el Imperio otomano. Cuando Yemen se independizó en 1918, Saná se convirtió en la capital del país, hasta 1948, año en el que fue trasladada a Ta'izz, antes de volver a Saná en 1962. La ciudad de Saná es un centro cultural islámico, en la que se encuentra una universidad musulmana y muchas mezquitas. La 'Ciudad vieja de Saná' fue declarada en 1986 Patrimonio de la Humanidad por la Unesco, y más tarde Capital árabe de la cultura (2004). La guerra civil de Yemen causó graves daños a la ciudad en 2015 por lo que el Comité del Patrimonio de la Humanidad inscribió el sitio en la lista de Patrimonio de la Humanidad en peligro."],
                capital20=["Teherán","https://media.cntraveler.com/photos/6124643cc9e624849c7a44bd/16:9/w_2560%2Cc_limit/LICENSE_Mehrdad-Mzadeh-Tehran_(c)-Getty-Images_CNT-UK_Sophie-Knight.jpg","Teherán (pronunciado: [tee'ɾan]; en persa: تهران tr.: Tehrān [teh'ɾɒ:n]) es la capital de la República Islámica de Irán. Está situada en el norte del país, en una meseta al pie de los montes Alborz (también llamados Elbourz). Debido a su población (8 429 807 habitantes según una estimación de 2010) e importancia constituye una de las urbes más importantes del llamado mundo islámico. Es el centro político y económico de la nación. Más de la mitad de las industrias de Irán están concentradas en ella, entre las que destacan la textil, el azúcar, el cemento y la industria automovilística y el comercio de alfombras. También cuenta con refinerías de petróleo."],
                capital21=["Pekín","https://news.cgtn.com/news/3251444e7a597a6333566d54/img/5146f33b-a294-4faa-9f76-5e80fd57b9fe.jpg","Pekín, Pequín o Beijing (léase Pei-chin ; en chino, 北京; pinyin, Běijīng; literalmente, 'la capital del norte') es la capital de la República Popular China y una de las ciudades más pobladas del mundo con 21 890 000 habitantes en 2020. Es además, junto con Shanghái, Tianjin y Chongqing, uno de los cuatro municipios del país."],
                capital22=["Pionyang","https://www.beleggersbelangen.nl/wp-content/uploads/2017/09/abn-noord-korea.jpg","Pionyang (en chosŏn'gŭl, 평양; en hancha, 平壤; romanización revisada del coreano, Pyeongyang; McCune-Reischauer, P'yŏngyang; pronunciado [pʰjɔŋ.jaŋ]) es la capital y ciudad más poblada de Corea del Norte, localizada en el suroeste del país, cerca del río Taedong. En el censo de 2008 la ciudad contaba con una población de 3 255 388 habitantes. La ciudad tiene la administración de gobierno directo, al mismo nivel de una provincia."],
                capital23=["Beirut","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3c/3a/3c/beirut.jpg?w=1200&amp;h=1200&amp;s=1","Beirut (en árabe: بيروت, Baīrūt) es la capital y principal puerto marítimo del Líbano. Perteneciente a la gobernación de Beirut, en 2019 se estimaba que su población era de unos 3 300 000 habitantes. La ciudad es una de las más diversas de Oriente Próximo, dividida entre las diferentes ramas cristianas y musulmanas. Beirut fue destruida durante la Guerra Civil del Líbano y la invasión israelí de 1982, y dividida entre Beirut occidental (musulmán) y oriental (cristiano). La ciudad también sufrió daños considerables a causa de los bombardeos de la aviación israelí durante la guerra de los 33 días entre Israel y Hezbollah en verano de 2006 y a causa de la explosión de Beirut en 2020, un accidente causado por el almacenamiento negligente de 3000 toneladas de nitrato de amonio en el puerto de la ciudad."],
                capital24=["Honiara","https://live-production.wcms.abc-cdn.net.au/4c758de66b6a5a07c8eaa8f601820479?impolicy=wcms_crop_resize&cropH=499&cropW=746&xPos=74&yPos=0&width=862&height=575","Honiara (/ˌhoʊni'a:rə/) es la capital de las Islas Salomón. Se encuentra en la isla de Guadalcanal, aunque no pertenece a esa provincia, sino que tiene estatus de Territorio de la capital. El último censo oficial data de 1999 y cifra en 49 107 el número de habitantes de la ciudad, cifra que aumenta hasta 66 824 en estimaciones para el año 2009. Este número de habitantes la convierte en la ciudad más poblada del país."],
                capital25=["Canberra","https://media.kasperskycontenthub.com/wp-content/uploads/sites/67/2013/11/10084229/canberra_australia_9.jpg","Canberran (pronunciación en inglés: /'kænb(ə)ɹə/, del ngunnawal: Kanberra, que significa 'lugar de reunión') es la capital de Australia, con una población superior a los 345 000 habitantes. Es sede del Territorio de la Capital Australiana, ubicada en la parte norte de este, 300 kilómetros al sudoeste de Sídney y 650 kilómetros al noreste de Melbourne. La situación de Canberra fue seleccionada para la posición de la capital nacional en 1908 como un compromiso entre Sídney y Melbourne, las dos grandes ciudades. Es diferente a las demás ciudades australianas, ya que fue construida desde cero, como una ciudad planificada. Tras un concurso internacional para el diseño de la ciudad, se seleccionó el proyecto realizado por los arquitectos Walter Burley Griffin y Marion Mahony Griffin de Chicago y la construcción comenzó en 1913."],
                capital26=["Suva","https://i.pinimg.com/originals/ad/55/7b/ad557bdfb208948cb6a112dad4b5d850.jpg","Suva es la capital de Fiyi. Está localizada en la costa sureste de la isla de Viti Levu, en la división de Fiyi Central, de la cual también es la capital. Suva se convirtió en la capital oficial de Fiyi en 1877 cuando la geografía de Kaivalagi, un antiguo asentamiento europeo en Levuka en la isla de Ovalau, se volvió muy restringida. En el censo de 1996, la ciudad de Suva tenía una población de 77.366 habitantes. En el censo de 2007 había pasado a 85.691. Incluyendo los suburbios independientes, la población del área urbana de Suva del Norte era de 173.399 en el mismo censo."],
                capital27=["Wellington","https://toposmagazine.com/wp-content/uploads/2022/02/Wellington_Pixabay.jpg","Wellington (en maorí: Te Whanganui-a-Tara o Pōneke) es la capital de Nueva Zelanda, así como de la región de Wellington. Está localizada al sur de la isla Norte (North Island en inglés), en la que Wellington es la segunda ciudad más poblada. Con 212 100 habitantes en 2019, es la tercera ciudad más poblada del país, después de Auckland y Christchurch, esta última localizada en la Isla Sur."],
                capital28=["Tarawa","https://upload.wikimedia.org/wikipedia/commons/b/b5/South_Tarawa_from_the_air.jpg","Tarawa(en inglés: Tarawa) es un municipio de la República de Kiribati que ejerce la función de capital tradicional del estado, reconocida internacionalmente como tal, y siendo además la sede de los principales órganos de gobierno. Está situada en el atolón de Tarawa. Tiene varios núcleos de población, localidades relativamente cercanas entre sí y situadas en la parte sur del atolón de Tarawa, conformando así el municipio conocido como Tarawa Sur. El municipio de Tarawa Sur posee una población de 63 349 habitantes, a fecha de 2020."],
                capital29=["Palikir","https://www.onde-e-quando.net/site/images/illustration/palikir_836.jpg","Palikir es una ciudad y la capital federal de los Estados Federados de Micronesia. La ciudad se encuentra en el estado de Ponapé. Su población aproximada es de 6227 habitantes según las estimaciones realizadas en 2004."]
            ];            
            if(resultado==="victoria")
            {
                h1MesajeFinal.textContent="Victoria";
            }
            else if(resultado==="derrota")
            {
                h1MesajeFinal.textContent="Derrota";
            }
            for (let i = 0; i < capitales.length; i++)
            {
                if(i===indiceDeLaPalabra)
                {
                    /*console.log("Nombre: "+capitales[i][0]);
                    console.log("Imagen: "+capitales[i][1]);
                    console.log("Informacion: "+capitales[i][2]);*/
                    h1NombreDeLaCapital.textContent=capitales[i][0];
                    imagenDeLaCapital.src=capitales[i][1];
                    parrafoInformacion.textContent=capitales[i][2];
                }
            }
            generarBotonVolverAJugar();
        }
        function guardarEstadoDeLaPartida(estadoDeLaPartida)
        {
            let datos= 
            {
                estadoDeLaPartida:estadoDeLaPartida,
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosPartida',datosJSON);
        }
        function guardarIndiceDeLaPalabra(indiceDeLaPalabra)
        {
            let datos=
            {
                indiceDeLaPalabra: indiceDeLaPalabra
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('indiceDeLaPalabra',datosJSON);
        }
        function guardarMascara(mascara)
        {
            let datos=
            {
                mascara: mascara
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('mascara',datosJSON);
        }
        function guardarLetrasUsadas(letrasUsadas)
        {
            let datos=
            {
                letrasUsadas: letrasUsadas
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosLetrasUsadas',datosJSON);
        }
        function guardarNumeroDeErrores(numeroDeErrores)
        {
            let datos=
            {
                numeroDeErrores: numeroDeErrores
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosNumeroDeErrores',datosJSON);
        }
        function guardarMensajeFinal(mensajeFinal)
        {
            let datos=
            {
                mensajeFinal: mensajeFinal
            }
            let datosJSON=JSON.stringify(datos);
            localStorage.setItem('datosMensajeFinal',datosJSON);
        }
        function obtenerLetrasUsadas()
        {
            let letrasUsadas;
            let datosJSON = localStorage.getItem('datosLetrasUsadas');
            let datos = JSON.parse(datosJSON);
            letrasUsadas=datos.letrasUsadas;
            return letrasUsadas;
        }
        function obtenerNombreDeUsuario()
        {
            let nombreDeUsuario;
            let datosJSON = localStorage.getItem('datosUsuario');
            let datos = JSON.parse(datosJSON);
            nombreDeUsuario=datos.nombreDeUsuario;
            return nombreDeUsuario;
        }
        function obtenerEstadoDeLaPartida()
        {
            let estadoDeLaPartida;
            let datosJSON = localStorage.getItem('datosPartida');
            let datos = JSON.parse(datosJSON);
            estadoDeLaPartida=datos.estadoDeLaPartida;
            return estadoDeLaPartida;
        }
        function obtenerIndiceDeLaPalabra()
        {
            let indiceDeLaPalabra;
            let datosJSON = localStorage.getItem('indiceDeLaPalabra');
            let datos = JSON.parse(datosJSON);
            indiceDeLaPalabra=datos.indiceDeLaPalabra;
            return indiceDeLaPalabra;
        }
        function obtenerMascara()
        {
            let mascara;
            let datosJSON = localStorage.getItem('mascara');
            let datos = JSON.parse(datosJSON);
            mascara=datos.mascara;
            return mascara;
        }
        function obtenerNumeroDeErrores()
        {
            let numeroDeErrores;
            let datosJSON = localStorage.getItem('datosNumeroDeErrores');
            let datos = JSON.parse(datosJSON);
            numeroDeErrores=datos.numeroDeErrores;
            return numeroDeErrores;
        }
        function obtenerMensajeFinal()
        {
            let mensajeFinal;
            let datosJSON = localStorage.getItem('datosMensajeFinal');
            let datos = JSON.parse(datosJSON);
            mensajeFinal=datos.mensajeFinal;
            return mensajeFinal;
        }
        function verificarQueLaTeclaNoFueUsada(letra,laLetraYaFueUsada)
        {
            let letrasUsadas=obtenerLetrasUsadas();
            for (let i = 0; i < letrasUsadas.length; i++)
            {
                if(letrasUsadas[i]===letra)
                {
                    laLetraYaFueUsada=true;
                }
            }
            return laLetraYaFueUsada;
        }
        function generarBotonVolverAJugar()
        {
            divInformacionFooter=document.getElementById("informacionFooter");

            let enlaceIndex=document.createElement("a");
            enlaceIndex.href="index.html";
            divInformacionFooter.appendChild(enlaceIndex);
            
            let botonVolverAJugar=document.createElement("button");
            botonVolverAJugar.setAttribute("type", "button");
            botonVolverAJugar.setAttribute("value", "Volver a jugar");
            botonVolverAJugar.textContent="Volver a jugar";
            botonVolverAJugar.className="btn btn-success";
            botonVolverAJugar.id="volverAJugar";
            enlaceIndex.appendChild(botonVolverAJugar);
        }
        function rellenarDivInformacion()
        {
            divInformacionHeader=document.getElementById("informacionHeader");
            divInformacionBody=document.getElementById("informacionBody");

            let h1MesajeFinal=document.createElement("p");
            h1MesajeFinal.className="h3";
            if(obtenerMensajeFinal()==="victoria")
            {
                h1MesajeFinal.textContent="Victoria";
            }
            else if(obtenerMensajeFinal()==="derrota")
            {
                h1MesajeFinal.textContent="Derrota";
            }
            h1MesajeFinal.id="mensajeFinal";
            divInformacionHeader.appendChild(h1MesajeFinal);

            let h1NombreDeLaCapital=document.createElement("p");
            h1NombreDeLaCapital.className="h3";
            h1NombreDeLaCapital.id="nombreCapital";
            divInformacionBody.appendChild(h1NombreDeLaCapital);

            let imagenDeLaCapital=document.createElement("img");
            imagenDeLaCapital.id="imagenCapital";
            imagenDeLaCapital.className="w-100 rounded";
            imagenDeLaCapital.setAttribute("width", "300vw");
            imagenDeLaCapital.setAttribute("height", "300vh");
            divInformacionBody.appendChild(imagenDeLaCapital);

            let parrafoInformacion=document.createElement("p");
            parrafoInformacion.id="parrafoInformacion";
            divInformacionBody.appendChild(parrafoInformacion);
        }
    }
);