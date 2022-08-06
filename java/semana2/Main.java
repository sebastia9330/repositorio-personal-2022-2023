import java.util.Scanner;
class Main {
    public static void main(String[] args){
     Scanner x= new Scanner(System.in);
     System.out.println("Digite el primer numero: ");
     int n1 = x.nextInt();
     System.out.println("Digite el segundo numero: ");
     int n2 = x.nextInt();
     if(n1>n2)  {
        System.out.println("El numero mayor es: "+ n1);
     }else if (n1<n2){
        System.out.println("El numero mayor es: "+ n2);
     }
     else{
        System.out.println("Los numeros son iguales");

     }
    
    }
    
}
