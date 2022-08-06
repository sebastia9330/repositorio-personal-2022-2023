import java.util.Scanner;
class fora {
  public static void main(String[] args) {
    Scanner x = new Scanner(System.in);
    
    int tam = 7;
    int temperatura[][]=new int[tam][4];
   /* int temperatura2[]=new int[tam];
    int temperatura3[]=new int[tam];
    int temperatura4[]=new int[tam];*/
    int valor=0;
    for(int j= 0; j< 4; j++)  {  
        for(int i= 0; i< tam; i++) {
        System.out.print("Digite la temperatura del día "+ (i+1) +" de la semana "+ (j+1)+": ");
        valor = x.nextInt();
        temperatura[i][j]=valor;
        }  
    }/* 
    for(int i= 0; i< tam; i++) {
        System.out.print("Digite la temperatura del día "+ (i+1) +" de la semana 2: ");
        valor = x.nextInt();
        temperatura2[i]=valor;
    }
    for(int i= 0; i< tam; i++) {
        System.out.print("Digite la temperatura del día "+ (i+1) +" de la semana 3: ");
        valor = x.nextInt();
        temperatura3[i]=valor;
    }
    for(int i= 0; i< tam; i++) {
        System.out.print("Digite la temperatura del día "+ (i+1) +" de la semana 4: ");
        valor = x.nextInt();
        temperatura4[i]=valor;
    }*/

    for(int j= 0; j< 4; j++) {
    System.out.println("semana "+ (j+1)+ ": ");
        for(int i= 0; i< tam; i++) {
        System.out.println(temperatura[i][j] + " ");
        } 
        System.out.println("");
    }/* 
    System.out.println("semana 2");
    for(int i= 0; i< tam; i++) {
      System.out.println(temperatura2[i] + " ");
    } 
    System.out.println("semana 3");
    for(int i= 0; i< tam; i++) {
      System.out.println(temperatura3[i] + " ");
    } 
    System.out.println("semana 4");
    for(int i= 0; i< tam; i++) {
      System.out.println(temperatura4[i] + " ");
    } */
  }
}