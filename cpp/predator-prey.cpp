#include <stdio.h>
#include <time.h>

int main(){
    int executionTime = time(NULL);
    double predator = 1e2; //Number of Predators
    double prey = 1e4; //Number of Preys
    double alpha1 = 5e-2; //Number of new preys per day (per prey)
    double beta = 1e-4; //Number of preys eaten per day (per predator per prey)
    double gamma = 1e-2; //Predator death rate
    double delta = 1e-6; //Number of new predators per day (per predator per prey)
    double dt = 0.1; //Time step is one day
    double t = 0;
    
    for (int i = 0; i<1e5; i = i+1) {
        t = t + dt;
        double dPrey = dt*(alpha1 * prey - beta * prey * predator);
        double dPredator = dt*(delta * prey * predator - gamma * predator);
        prey = prey + dPrey;
        predator = predator + dPredator;
    }
    int executionTime2 = time(NULL);
    printf("%d\n", executionTime);
    printf("%d\n", executionTime2);

}
