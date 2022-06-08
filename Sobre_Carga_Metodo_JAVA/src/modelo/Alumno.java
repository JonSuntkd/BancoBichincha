package modelo;

public class Alumno implements Escuela{

	double n1,n2,n3;
	
	public Alumno(double n1, double n2, double n3) {
		super();
		this.n1 = n1;
		this.n2 = n2;
		this.n3 = n3;
	}
	
	public Alumno() {
		super();
	}
	

	public Alumno(double n1, double n2) {
		super();
		this.n1 = n1;
		this.n2 = n2;
	}

	public void sumaN(){
		double res = n1+n2+n3;
		System.out.println(res);
	}
	
	public void sumaN(int dimen){
		double res = n1+n2+n3;
		
		for (int i = 0; i < 5; i++) {
			res = res + i;
		}
		
		System.out.println(res);
	}
	
	public void sumaN(double prom){
		double res=0;
		
		if(prom==3){
			res = (n1+n2+n3)/3;			
		}
		System.out.println(res);
	}

	@Override
	public void escuela() {
		System.out.println("ALUMNOS");
		
	}

	@Override
	public void proFinal() {
		double res = (n1 + n2 + n3)/3;
		if(res<7){
			System.out.println("Reprobado");
			escuela();
		}else {
			System.out.println("Aprobado");
			escuela();
		}	// TODO Auto-generated method stub
		
	}

	@Override
	public double PromedioNotas() {
		return (n1 + n2 + n3)/3;
	}
	
}
