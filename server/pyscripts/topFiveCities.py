import pandas as pd
import sys

def main():
    franchise = sys.argv[1]
    print(franchise);
    df = pd.read_csv('hackathon_data_set.csv')
    df = df.drop(df.columns[[1,2,3,4,5,6,8,9,11,12,13, 14,15,16]],1);
    df1 = df.query('franchise == @franchise');
    print(df1['area'].value_counts()[0:5])
if __name__ =="__main__":
    main()


#print(df1);
