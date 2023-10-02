class EntrenamientoDeportivo {
    constructor(nombre, duracion, tipoEjercicio) {
        let _nombre = nombre;
        let _duracion = duracion;
        let _tipoEjercicio = tipoEjercicio;

        this.getNombre = () => _nombre;
        this.getDuracion = () => _duracion;
        this.getTipoEjercicio = () => _tipoEjercicio;

        this.setNombre = fuction (nombreNuevo) {
            _nombre = nombreNuevo;
        };

        this.setDuracion = fuction (duracionNueva) {
            _duracion = duracionNueva;
        };

        this.agregarEjercicio = fuction (ejercioNuevo) {
            if(_tipoEjercicio.indexof(ejercioNuevo) == -1)
           _tipoEjercicio.push(ejercioNuevo);
        };

        this.eliminarEjercicio = fuction (ejercicioAEliminar) {
            let indice = _tipoEjercicio.indexof(ejercicioAEliminar)
            if (indice != -1) _tipoEjercicio.splice(indice, 1);
        };

    }

}

class Gestor{
    constructor(){
        let _entrenamientos = [];

        this.getEntrenamientos = () => _entrenamientos;

        /* asumiendo que el nombre no se puede repetir lo uso como identificador */

        this.agregarEntrenamiento = fuction (nombre, duracion, tipoEjercicio) {
            let existente = false;
            for (let i = 0; i < _entrenamientos.length && !existente; i++){
                if(_entrenamientos[i].getNombre == nombre) existente=true;
            }
            if (!existente)
                 _entrenamientos.push( new EntrenamientoDeportivo(nombre, duracion, tipoEjercicio));
        };

        this.eliminarEntrenamiento = function (nombreEntrenamiento) {
            let n = -1;
            let bandera = false;
            for (let i = 0; i < _entrenamientos.length && !bandera; i++){
                if(_entrenamientos[i].getNombre() == nombreEntrenamiento){
                    bandera = true;
                    n = i;
                }
            }
            if(n > -1) _entrenamientos.splice(n,1);
        };

        this.entrenamientosPorTipo = fuction (tipoEjercicio) {
            let entrenamientos = "";
            for (let i = 0; i < _entrenamientos.length; i++){
                if(_entrenamientos[i].getTipoEjercicio().indexof(tipoEjercicio) != -1)
                    entrenamientos += "\n" + _entrenamientos[i].getNombre();
            }
            console.log(`Los entrenamientos de tipo ${EntrenamientoDeportivo} son: ${entrenamientos}`);

        };
    }
}

/* la funcion editar es realizada mediante los setters y las funciones agregar y eliminar de EntrenamientoDeportivo */

const gestor = new Gestor();
gestor.agregarEntrenamiento("Entrenamiento Matutino","20 minutos",["Estiramiento" , "Calentamiento"]);
gestor.agregarEntrenamiento("Entrenamiento Aerobico","40 minutos",["Natacion"]);
gestor.agregarEntrenamiento("Entrenamiento de fuerza","30 minutos",["Estiramiento" , "Pesas"]);
gestor.agregarEntrenamiento("Entrenamiento funcional","600 minutos",["Pesas" , "Calentamiento" , "Crossfit"]);

gestor.entrenamientosPorTipo("Pesas");

gestor.getEntrenamientos()[2].agregarEjercicio("Pesas");

gestor.entrenamientosPorTipo("Pesas");

gestor.eliminarEntrenamiento("Entrenamiento de fuerza");

gestor.entrenamientosPorTipo("Pesas");