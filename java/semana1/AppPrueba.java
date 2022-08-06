public class AppPrueba{
    public static void main(String args[]){
        Persona unaPersona = new Persona(); 
    unaPersona.saludar();
    unaPersona.despedir();
    }
}
class Persona {
    public String nombre = " Sebastian";
    public String apellido;
    public int edad;
    public int telefono;
    
    public void saludar(){
        System.out.println("hola me llamo" + nombre);
    }
    public void despedir(){
        System.out.println("adios");  
    }
}