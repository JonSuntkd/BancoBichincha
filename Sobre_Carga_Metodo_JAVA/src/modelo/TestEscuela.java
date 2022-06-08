package modelo;

public class TestEscuela {

	public static void main(String[] args) {
		Alumno alum = new Alumno(2,1,2);
		alum.promedioFinal(alum.PromedioNotas());
		Profesor prof = new Profesor(9, 9, 9);
		System.out.println(prof.PromedioNotas());
		prof.beca(prof.PromedioNotas());
	}

}
