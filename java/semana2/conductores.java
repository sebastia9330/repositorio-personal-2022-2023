import java.util.Scanner;
class conductores {
  public static void main(String[] args) {
    Scanner x = new Scanner(System.in);
    Scanner y = new Scanner(System.in);
    //Scanner y = new Scanner(System.in);
    System.out.print("Digite el número de conductores: ");
    int tam = x.nextInt();
    int suma;
    String nombres[]=new String[tam];
    int total_kms[]=new int[tam];
    for(int i =0;i< tam;i++){
      System.out.println("Digite el nombre del conductor "+ (i+1));
      nombres[i]=y.nextLine();
    }
    int kms[][]=new int[tam][7];
    for(int i =0;i< tam;i++){
      System.out.println("Digite los kms del conductor "+ nombres[i]+": ");
      for(int j =0;j< 7;j++){
        System.out.println("del dia "+ (j+1)+": ");
        kms[i][j]=x.nextInt();
      }
    }
   
   for(int i =0;i< tam;i++){
      suma=0;
      for(int j =0;j< 7;j++){
        suma=suma+kms[i][j];
      }
     total_kms[i]=suma;
    }
    for(int i =0;i< tam;i++){
      System.out.println(nombres[i]+": "+total_kms[i]);
    }
    
  }
}