#include <iostream>
#include <string>
using namespace std;

double inputscore(){
    double score;
    cout <<"Enter score : ";
    cin >>score;
    return score;
}

string calgrade(double score){
    if (score >= 80){
        return "A";
    }
    else if (score >= 75){
        return "B+";
    }
    else if (score >= 70){
        return "B";
    }
    else if (score >= 65){
        return "C+";
    }
    else if (score >= 60){
        return "C";
    }
    else if (score >= 55){
        return "D+";
    }
    else if (score >= 50){
        return "D";
    }
    else {
        return "F";
    }
}

void displayinfo(int Numberofstudent, double score, string grade){
    cout <<"No." <<Numberofstudent <<" Score : " << score <<"\nGrade : "<<grade<<endl;
}

int main(){
    int Numberofstudent = 20;
    cout << "Grading program with 8 grade"<<endl;
    for(int i = 1; i<= Numberofstudent; i++){
        double score = inputscore();
        string grade = calgrade(score);
        displayinfo(i,score,grade);
        cout << endl;
    }
    return(0);
}