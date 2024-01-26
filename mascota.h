#ifndef MASCOTA_H
#define MASCOTA_H
#include <string>
#include <iostream>
using namespace std;

class mascota{
    private:
        string nombre;
        int edad;
    public:
        mascota();
        mascota(string,int);
        void mostrarMascota();
};
mascota::mascota(){
    nombre="";
    edad=0;
}
mascota::mascota(string _nombre,int _edad){
    nombre=_nombre;
    edad=_edad;
}
void mascota::mostrarMascota(){
    cout<<"El nombre de la mascota es: "<<nombre<<endl;
    cout<<"La edad de la mascota es: "<<edad<<endl;
}



#endif