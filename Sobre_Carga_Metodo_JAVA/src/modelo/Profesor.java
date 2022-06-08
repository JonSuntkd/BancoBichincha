package modelo;

public class Profesor implements Escuela {

	double n1, n2, n3;

	public Profesor(double n1, double n2, double n3) {
		super();
		this.n1 = n1;
		this.n2 = n2;
		this.n3 = n3;
	}

	@Override
	public void escuela() {
		System.out.println("PROFESORES");

	}

	@Override
	public void proFinal() {
		double res = (n1 + n2 + n3) / 3;
		if (res < 7) {
			System.out.println("Reprobado");
			escuela();
		} else {
			System.out.println("Aprobado");
			escuela();
		} // TODO Auto-generated method stub

	}

	@Override
	public double PromedioNotas() {
		return (n1 + n2 + n3) / 3;
	}

}
