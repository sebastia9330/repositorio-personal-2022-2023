public class appPrueba {
    public static void main(String[] args) {
      //System.out.println("Hello world!");
      Persona unaPersona = new Persona("sebastian");
      unaPersona.saludar();
      System.out.println("---------Estudiante--------");
      Estudiante unEstudiante = new Estudiante();
      unEstudiante.mostrarNombreUniversidad();//metodo clase hija
      unEstudiante.saludar();
      System.out.println("---------Empleado--------");
      Empleado unEmpleado = new Empleado();
      unEmpleado.mostrarTiempolaborado();
      System.out.println("---------Trabajador Independiete--------");
      TrabajadorIndependiente untrabajador = new TrabajadorIndependiente();
      untrabajador.mostrarTipoNegocio();
    }
  }
  class Persona{
    public String nombre;
    public Persona (String nombre2){
      this.nombre = nombre2;
    }
    public void saludar(){
      System.out.println("hola me llamo " + this.nombre);
    }
  }
  class Estudiante extends Persona{
    public String nombreUniversidad = "UTB";
    public Estudiante(){//creando constructor de la clase estudiante
      super("juan");
    }
      public void mostrarNombreUniversidad(){
          this.saludar();
          System.out.println("El nombre de la universidad en la que estudio es "+this.nombreUniversidad);
  
      }
    }
    class Empleado extends Persona{
        public int tiempoLaborado = 24;
        public Empleado(){//creando constructor de la clase empleado
          super("Pedro");
        }
          public void mostrarTiempolaborado(){
              this.saludar();
              System.out.println("El tiempo que llevo en esta empresa son "+this.tiempoLaborado + " años");
      
        }
    }
    class TrabajadorIndependiente extends Persona{
        public String tipoNegocio = "Comercio";
        public TrabajadorIndependiente(){//creando constructor de la clase empleado
          super("Sara");
        }
          public void mostrarTipoNegocio(){
              this.saludar();
              System.out.println("mi tipo de negocio es "+this.tipoNegocio);
      
        }
    }
