import java.util.Scanner;

class ejercicio8 {
  public static void main(String[] args) {
    Scanner x = new Scanner(System.in);
    Scanner y = new Scanner(System.in);
    System.out.println("cuantos alumnos quiere ingesar: ");
    int tam = x.nextInt();
    String alumnosnom[] = new String[tam];
    String alumno = "";
    int edad = 0;
    for (int i = 0; i < tam; i++) {
      System.out.println("Nombre del alumno: ");
      alumno = y.nextLine();
      alumnosnom[i] = alumno;
    }
    int edadalum[][] = new int[tam][1];
    for (int i = 0; i < tam; i++) {
      System.out.println("Digita la edad del alumno " + alumnosnom[i] + ":");
      for (int j = 0; j < 1; j++) {
        System.out.println("edad: ");
        edad = x.nextInt();
        edadalum[i][j] = edad;
      }
    }
    for (int i = 0; i < tam; i++) {
      for (int j = 0; i < tam; i++) {
        if (edadalum[i][j] > 18) {
          System.out.println("el estudiante " + alumnosnom[i] + " es mayor de edad");
        } else {
          System.out.println("el estudiante " + alumnosnom[i] + " es menor de edad");
        }
      }
    }

  }

}