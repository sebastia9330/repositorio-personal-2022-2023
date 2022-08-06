import java.util.Scanner;
public class forarreglo{
    public static void main(String args[]){
        Scanner x = new Scanner(System.in);
        //System.out.println("Digite el tamaño del arreglo: ");
        int tam = 7;
        int temperatura[] = new int[tam];
        System.out.println("El tamaño del arreglo es: "+ tam);
        int valor = 0;
        for(int i = 0; i<tam; i++){
            System.out.println("Digite la temperatura del día " +(i+1) +": ");
            valor = x.nextInt();
            temperatura[i]= valor;
        }
        for(int i = 0; i<tam; i++){
            System.out.println("La temperatura del día "+ (i+1) +" es: "+ temperatura[i]);

        }
    }
}