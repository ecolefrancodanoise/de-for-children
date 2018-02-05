/**
 * Author: Nicolas Guilbert
 */
#include <cstdlib>
#include <cmath>
#include <stdio.h>
#include <time.h>

#define populationSize 10
#define defautValue 10.0
#define defaultTrust 0.4
#define transferredValueMultiplier 2.6
#define transferredValueSplit 0.2
#define nbSamples 100000

/*
 * Class representing an individual with its value, honesty and trust relations
 */
class Individual {
public:
    Individual() {};
    Individual(int id, double honestyCoeff) :
        _id(id), _value(defautValue), _honesty(honestyCoeff)
        {
            for(int i = 0; i < populationSize; ++i) {
                _relations[i] = defaultTrust;
            }
        };
    int _id;
    double _value;
    double _honesty;
    double _relations[populationSize];

    double sumRelations() const {
        double retVal = 0.0;
        for(int i = 0; i < populationSize; ++i) {
            retVal += _relations[i];
        }
        return retVal;
    }
};

/*
 * Function to create a population of individuals
 */
void initializeIndividuals (double honestyCoeff, Individual individuals[]) {
    for (int i = 0; i < populationSize; ++i) {
        individuals[i]= Individual(i, honestyCoeff);
    }
}

/*
 * Struct to convey the change in a relation
 */
struct RelationChange {
    double _sourceValueIncrease;
    double _targetValueIncrease;
    double _newTrustValue;
    RelationChange(double sourceValueIncrease, double targetValueIncrease, double newTrustValue) :
    _sourceValueIncrease(sourceValueIncrease), _targetValueIncrease(targetValueIncrease), _newTrustValue(newTrustValue) {};
};

/*
 * Function returning the change occurring in a transaction
 * Returns the change in value for both indviduals and change in their trust relationship.
 */
RelationChange computeRelation(int sourceIndex, int targetIndex, const Individual individuals[]) {
    const Individual& sourceIndividual = individuals[sourceIndex];
    const Individual& targetIndividual = individuals[targetIndex];
    const double& trustValue = sourceIndividual._relations[targetIndex]; // should be the same as
                                                              // targetIndividual.relations[sourceIndex]
    double transferredValue = sourceIndividual._relations[targetIndex] * sourceIndividual._value * transferredValueMultiplier;
    double honestyScore = (double)(std::rand() % 1000)/1000;
    bool honestyTest = targetIndividual._honesty >= honestyScore;
    if (honestyTest) {
        return RelationChange(transferredValue * transferredValueSplit - sourceIndividual._value * (1-transferredValueSplit),
                              transferredValue * (1 - transferredValueSplit),
                              trustValue * (1 + 0.1) / ((1 + trustValue * 0.1)));
    } else {
        return RelationChange(-sourceIndividual._value * (1-transferredValueSplit),
                              transferredValue,
                              trustValue * ((1 + trustValue * 0.1)) / (1 + 0.1));
    }
}

/*
 * Function to calculate the evolution of a population.
 * Returns the full history.
 */
double runSimulation(double honestyCoeff, int nbIterations) {
    Individual individuals[populationSize];
    initializeIndividuals(honestyCoeff, individuals);
    for (int i = 0; i < nbIterations; ++i) {
        int relationSourceIndex = floor(std::rand() % populationSize);
        int relationTargetIndex = floor(std::rand() % populationSize);
        if (relationSourceIndex == relationTargetIndex) {
            continue;
        }
        RelationChange newRelations = computeRelation(relationSourceIndex, relationTargetIndex, individuals);
        individuals[relationSourceIndex]._value += newRelations._sourceValueIncrease;
        individuals[relationSourceIndex]._relations[relationTargetIndex] = newRelations._newTrustValue;
        individuals[relationTargetIndex]._value += newRelations._targetValueIncrease;
        individuals[relationTargetIndex]._relations[relationSourceIndex] = newRelations._newTrustValue;
    }
    double totalValue = 0;
    for(int i = 0; i < populationSize; ++i) {
        totalValue += individuals[i]._value;
    }
    return totalValue;
}

int main() {
    printf("%30s\n", "Simulation parameters:");
    printf("%30s %8d\n", "Population size:", populationSize);
    printf("%30s %8.2f\n", "Start value:", defautValue);
    printf("%30s %8.2f\n", "Start trust:", defaultTrust);
    printf("%30s %8.2f\n", "Transferred value multiplier:", populationSize);
    printf("%30s %8.2f\n", "Transferred value split:", transferredValueSplit);
    printf("%30s %8d\n", "Number of samples per run:", nbSamples);
    printf("\n");
    printf("Simulation results:\n");
    srand (time(NULL));
    for (int i = 1; i <= 5; ++i) {
        double cumulatedValue = 0.0;
        double minValue = 1e300;
        double maxValue = 0.0;
        double honesty = 0.2 * i;
        for (int j = 0; j < nbSamples; ++j) {
            double latestResult = runSimulation(honesty, 500);
            cumulatedValue += latestResult;
            if (latestResult < minValue) {
                minValue = latestResult;
            }
            if (latestResult > maxValue) {
                maxValue = latestResult;
            }
        }
        cumulatedValue /= nbSamples;
        printf("Honesty: %5.1f%, Avg. Value: %9.1f, Min: %9.1f, Max: %12.1f\n", honesty * 100, cumulatedValue/1e6, minValue/1e6, maxValue/1e6);
    }
}
