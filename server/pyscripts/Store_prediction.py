from sklearn.externals import joblib
import sys
import numpy as np

# age, lor, num_adults, gender, homeownder, haskids, marital_staus, metro, ubran


clf = joblib.load('UberSVC.pkl')

y = np.asarray([[sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],
                 sys.argv[6],sys.argv[7],sys.argv[8],sys.argv[9],sys.argv[10]]
               ,[0,0,0,0,0,0,0,0,0]])

clf.predict(y)[0]