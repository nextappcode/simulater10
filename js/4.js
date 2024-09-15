alert ("Bienvenido a Simulater10 v0.1 alpha, Diviertete!");

let recurso=new Array();
let cont = 0;
recurso [0]="img/1.- Arrancar-CD-DVD-para-instalar-Windows.webp";
recurso [1]="img/2.- Preparando-asistente-de-configuración-de-Windows-10-1.gif";
recurso [2]="img/3.-Elegir-idioma-para-instalar-Windows-10.webp";
recurso [3]="img/4.-Empezar-instalación-de-Windows-10.webp";
recurso [4]="img/5.-Preparando-instalación-de-Windows-de-nuevo.webp";
recurso [5]="img/6.-Introducir-licencia-de-Windows-para-instalar.webp";
recurso [6]="img/7.-Elegir-edición-de-Windows-10.webp";
recurso [7]="img/8.-Aceptar-términos-de-uso-de-Windows-10.webp";
recurso [8]="img/9.-Actualizar-o-instalar-Windows-10-desde-cero.webp";
recurso [9]="img/10.-Elegir-disco-y-crear-particiones-para-instalar-Windows.webp";
recurso [10]="img/10.1.-Particiones-creadas-para-instalar-Windows.webp";
recurso [11]="img/11.-Instalando-Windows-10-1.webp";
recurso [12]="img/11.1.-Instalando-Windows-10-2.webp";
recurso [13]="img/11.2.-Instalando-Windows-10-3.webp";
recurso [14]="img/2.- Preparando-asistente-de-configuración-de-Windows-10-1.gif";
recurso [15]="img/13.-Instalar-Windows-10-Asistente-Cortana-1.webp";
recurso [16]="img/13.-Preparando-asistente-de-configuración-de-Windows-10-2.webp";
recurso [17]="img/13.1.-Instalar-Windows-10-Asistente-Cortana-2.webp";
recurso [18]="img/13.2.-Instalar-Windows-10-Asistente-Cortana-3.webp";
recurso [19]="img/14.-Instalar-Windows-10-Región.webp";
recurso [20]="img/14.1.-Instalar-Windows-10-Distribución-de-teclado.webp";
recurso [21]="img/14.2-Instalar-Windows-10-Segunda-distribución-de-teclado.webp";
recurso [22]="img/15.-Instalar-Windows-10-Preparar-novedades.webp"
recurso [23]="abrazame y no me dejes te amo.jpg";
recurso [24]="Colinas azules.jpg";
recurso [25]="Face.jpg";
recurso [26]="Foto0311Wtq.jpg";
recurso [27]="imagesCA0VA2UZ.jpg";
recurso [28]="Invierno.jpg";
recurso [29]="(00)Foto0312.jpg";
recurso [30]="Nenúfares.jpg";
recurso [31]="imagesnew2/0/0/0/1/0/4/3/4/8/1/Puesta de sol.jpg";
recurso [32]="20062010(020).jpg";
recurso [33]="20032010-001_[01].jpg";
recurso [34]="paja.jpg";
recurso [35]="tarot-interpretacion-de-suenos-sonar-con-perros.jpg";
recurso [36]="1OCA89FK68CAG08TMOCAWNL46OCACGP5I8CA7RJ4FHCANPVTGUCA3A4DQCCAWZ90AOCAU7FWAECA1BUNL7CAQR0164CAE2EF3JCACGF3KMCAD5XA3SCAEZ1HSTCA4A12XHCA2RYDIGCAF4RKY8CAXIL3FZ.jpg";
recurso [37]="h8.jpg";
recurso [38]="24 - copia (3).jpg";
recurso [39]="23 - copia.jpg";
recurso [40]="P251210_16.08.jpg";
recurso [41]="29-07-10_1408-001.jpg";
recurso [42]="/imagesnew2/0/0/0/1/0/4/3/4/8/1/paja.bmp";
recurso [43]="/imagesnew2/0/0/0/1/0/4/3/4/8/1tigre.jpg";
recurso [44]="edifi.jpg";
recurso [45]="edifi.jpg";
recurso [46]="edifi.jpg";
recurso [47]="edifi.jpg";
recurso [48]="edifi.jpg";
recurso [49]="edifi.jpg";
recurso [50]="edifi.jpg";

function siguiente(){
    cont ++;
    if(cont > 50){
        cont = 0;
    }
    document.images.foto.src=recurso[cont];
}

function anterior(){
    cont --;
    if(cont < 0){
        cont = 50;
    }
    document.images.foto.src=recurso[cont];
}