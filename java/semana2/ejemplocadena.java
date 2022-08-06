import java.util.Scanner;
public class ejemplocadena {
  public static void main(String[] args) {
    String cadena1 = "hola";
    Scanner x= new Scanner(System.in);
    System.out.println("Digite cadena");
    String cadena2=x.nextLine();
    if(cadena1.equals(cadena2)){
      System.out.println("son iguales");
    }else{
      System.out.println("son diferentes");
    }
  }
}
