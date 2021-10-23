#include <iostream>
#include <vector>
#include <unordered_map>
#define FOR(i,a,b) for(int i=a; i<b; i++)
#define debug(x) cout << #x << " " << x <<endl
using namespace std;


int main(){
    int m, n ;
    cin>>m>>n ;
    int dp[m-1][n-1];
    FOR(i,0,m){
        dp[i][0] = 1 ;
    }
    FOR(j,1,n){
        dp[0][j] = 1 ;
    }
     FOR(i,0,m){
        FOR(j,0,n){
            cout<<dp[i][j]<<" " ;
        }
        cout<<endl ;
    }
    cout<<endl ;
    for(int i=1; i<m; i++){
        for(int j=1; j<n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
             FOR(i,0,m){
                FOR(j,0,n){
                    cout<<dp[i][j]<<" " ;
                }
                cout<<endl ;
             }
             cout<<endl ;
        }
    }
    cout<<endl ;
    cout<<dp[m-1][n-1] ;
}
