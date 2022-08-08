public class Persona {
    private String nombre = " Sebastian";
    public String apellido = "Carrero";
    public int edad = 22;
    public int telefono;
    public int estrato = 5;
    
    public void saludar(){
      System.out.println("hola me llamo" + this.nombre );
      /*if(this.edad>=18){
        System.out.println("hola me llamo" + nombre + "Soy mayor de edad");
      }else{
        System.out.println("hola soy menos de edad");
       }*/
        
    }
    public void despedir(){
        System.out.println("adios");  
    }
    public String getNombre(){
      return this.nombre;
    }/*
    public String getApellido(){
      return this.apellido;
    }
    public int getEdad(){
      return this.edad;
    }
    public void setNombre(String nombre2){
      this.nombre=nombre2;
    }
    public void setApellido(String apellido2){
      this.apellido=apellido2;
    }*/
  }

