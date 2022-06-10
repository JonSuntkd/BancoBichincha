
public class Operaciones <T> {
	
	public void sumarDosNumeros(T n1, T n2){
		if(validarSiNumero(n1)==true && validarSiNumero(n2)==true){
			int numero1 = (Integer.parseInt((String) n1));
			int numero2 = (Integer.parseInt((String) n2));
			System.out.println("La suma es = " + (numero1 + numero2));
		}else {
			System.out.println("No se puede sumar");
		}
	}
	
	public void restaDosNumeros(T n1, T n2){
		if(validarSiNumero(n1)==true && validarSiNumero(n2)==true){
			int numero1 = (Integer.parseInt((String) n1));
			int numero2 = (Integer.parseInt((String) n2));
			System.out.println("La resta es = " + (numero1 - numero2));
		}else {
			System.out.println("No se puede restar");
		}
	}
	public void multiplicacionDosNumeros(T n1, T n2){
		if(validarSiNumero(n1)==true && validarSiNumero(n2)==true){
			int numero1 = (Integer.parseInt((String) n1));
			int numero2 = (Integer.parseInt((String) n2));
			System.out.println("La multiplicacion = " + (numero1 * numero2));
		}else {
			System.out.println("No se puede multiplicar");
		}
	}
	public void divisionDosNumeros(T n1, T n2){
		if(validarSiNumero(n1)==true && validarSiNumero(n2)==true){
			double numero1 = (Integer.parseInt((String) n1));
			double numero2 = (Integer.parseInt((String) n2));
			System.out.println("La division es = " + (numero1 / numero2));
		}else {
			System.out.println("No se pudo dividir");
		}
	}
	
	public boolean validarSiNumero (T n){
		try {
			int resultado = (Integer.parseInt((String) n));
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
