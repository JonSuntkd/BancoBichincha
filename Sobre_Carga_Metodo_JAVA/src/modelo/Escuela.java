package modelo;

public interface Escuela {
	double n1=0,n2=0,n3=0;
	
	public void proFinal();
	public double PromedioNotas();
	
	public default void promedioFinal(double promedio){
		if(promedio<7){
			System.out.println("Reprobado");
			escuela();
		}else {
			System.out.println("Aprobado");
			escuela();
		}
	};
	
	public default void beca(double promedio){
		if(promedio>8){
			System.out.println("BECADO");
		}else {
			System.out.println("NO BECADO");
		}
		
	}
	public void escuela();
	
}
