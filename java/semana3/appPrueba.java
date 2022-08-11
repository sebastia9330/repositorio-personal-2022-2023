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
      System.out.println("-----------Poliformismo----------");
      Persona arregloPersonas[] = new Persona[3];
      arregloPersonas[0] = unEstudiante;
      arregloPersonas[1] = unEmpleado;
      arregloPersonas[2] = untrabajador;
      for (int i = 0;i < arregloPersonas.length;i++){
        //length es un metodo que mide la longitud
        arregloPersonas[i].mostrarDeudas();

      }
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
    public void mostrarDeudas(){
      System.out.println("Deudas por Doquier");
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
      @Override
      public void mostrarDeudas(){
        System.out.println("Soy un estudiante y no tengo deudas");
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
        @Override
      public void mostrarDeudas(){
        System.out.println("Soy un empleado y mis deudas son $800000 pesos");
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
        @Override
      public void mostrarDeudas(){
        System.out.println("Soy un trabajador independiete y mis deudas son de 9 millones");
      }
    }
