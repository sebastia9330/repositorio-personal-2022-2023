import java.util.Scanner;
public class Main1 {
    public static void main(String[] args){
        Scanner x= new Scanner(System.in);
        System.out.println("Digite su estracto: ");
        int n=x.nextInt();
        switch(n){
            case 1:
                System.out.println("descuento del 40%");
                break;
            case 2:
                System.out.println("descuento del 200%");
                break;
            case 3:
                System.out.println("descuento del 10%");
                break; 
            default:
            System.out.println("estracto no corresponde");
            break;           
        }
    }
    
    
}
