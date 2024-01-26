#ifndef PERSONA_H
#define PERSONA_H
#include<bits/stdc++.h>
using namespace std;
class persona{
    private:
        string nombre;
        int edad;
    public:
        persona(string,int);
        void mostrardatos();
};
persona::persona(string n, int e){
    nombre=n;
    edad=e;
}
void persona::mostrardatos(){
    cout<<"nombre\nedad"<<endl<<nombre<<"\n"<<edad;
}
#endif