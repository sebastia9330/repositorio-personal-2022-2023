package java.semana4;
import javax.swing.JFrame;// esta clase encapsula una venta clasica
import java.awt.FlowLayout;//especifica el orden de los elementos
import javax.swing.JLabel;// muestra texto e imagenes
import javax.swing.JButton;//muestra bonoes
import javax.swing.JTextField;//caja de texto
import javax.swing.ImageIcon; //carga las imagenes
import javax.swing.Icon;//manipular imagenes
import javax.swing.SwingConstants; //constastes comunes
import javax.swing.JOptionPane; //mostrar mensajes en ventana
import java.awt.event.*; //clase para escuchar eventos
import javax.swing.JComboBox; //menu despleglable
import javax.swing.JTextArea; //permite ingresar multiples lineas
import javax.swing.JScrollPane; //es un contenedor para componentes que necesiten redimensionarse 

class proyecto4 {
  public static void main(String[] args) {
    MiMarco ventana = new MiMarco();
    }
}
class MiMarco extends JFrame{
  //definir variables
      private JLabel labelTexto;
      private JTextField txtDato;
      private JLabel labelImagen;
      private JButton botonMensaje;
      private JButton botonGuardar;
      private JComboBox<String> combo;
      private JTextArea textArea;
      private JScrollPane scroll;  
  //constructor
    public MiMarco(){
  //configuracion ventana
      setLayout(null);
      setBounds(500,200,600,400);
      setTitle("Dashboard");
  //cierra toda la aplicacion 
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  //mostrar = true ocultar = false
      setVisible(true);
  //cargar componentes
      //etiqueta
      labelTexto = new JLabel("Mensaje");
      labelTexto.setBounds(10,5, 200, 30);
      add(labelTexto);
      //caja de texto
      txtDato = new JTextField();
      txtDato.setBounds(80, 8, 200, 23);
      add(txtDato);
      //imagen
      Icon miImagen = new ImageIcon(getClass().getResource("insecto.gif"));
      labelImagen = new JLabel("",miImagen,SwingConstants.LEFT);
      labelImagen.setBounds(300, 2, 106, 112);
      add(labelImagen);
        
    }
}  