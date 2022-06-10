import java.util.Scanner;

public class TestNumeros {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		String dato1 = "",dato2 = "";

		System.out.println("Ingrese dato 1:");
		dato1 = teclado.nextLine();
		System.out.println("Ingrese dato 2:");
		dato2 = teclado.nextLine();

		Operaciones<String> op = new Operaciones<String>();
		op.restaDosNumeros(dato1, dato2);
		op.sumarDosNumeros(dato1, dato2);
		op.multiplicacionDosNumeros(dato1, dato2);
		op.divisionDosNumeros(dato1, dato2);

	}

}
