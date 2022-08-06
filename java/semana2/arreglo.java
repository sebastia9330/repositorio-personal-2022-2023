import java.util.Scanner;
public class arreglo{
    public static void main(String args[]){
        Scanner x = new Scanner(System.in);
        //System.out.println("Digite el tamaño del arreglo: ");
        int tam = 7;
        int temperatura[] = new int[tam];
        System.out.println("El tamaño del arreglo es: "+ tam);
        
        System.out.println("Digite la temperatura del día 1: ");
        int valor = x.nextInt();
        temperatura[0]= valor;
        System.out.println("La temperatura del día 1 es: "+ temperatura[0]);

        System.out.println("Digite la temperatura del día 2: ");
        valor = x.nextInt();
        temperatura[1]= valor;
        System.out.println("La temperatura del día 2 es: "+ temperatura[1]);

        System.out.println("Digite la temperatura del día 3: ");
        valor = x.nextInt();
        temperatura[2]= valor;
        System.out.println("La temperatura del día 3 es: "+ temperatura[2]);

        System.out.println("Digite la temperatura del día 4: ");
        valor = x.nextInt();
        temperatura[3]= valor;
        System.out.println("La temperatura del día 4 es: "+ temperatura[3]);

        System.out.println("Digite la temperatura del día 5: ");
        valor = x.nextInt();
        temperatura[4]= valor;
        System.out.println("La temperatura del día 5 es: "+ temperatura[4]);

        System.out.println("Digite la temperatura del día 6: ");
        valor = x.nextInt();
        temperatura[5]= valor;
        System.out.println("La temperatura del día 6 es: "+ temperatura[5]);

        System.out.println("Digite la temperatura del día 7: ");
        valor = x.nextInt();
        temperatura[6]= valor;
        System.out.println("La temperatura del día 7 es: "+ temperatura[6]);
    }
}    

