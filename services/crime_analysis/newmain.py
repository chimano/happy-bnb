import matplotlib.pyplot as plt
import numpy as np
import csv

from sklearn.cluster import DBSCAN
from sklearn import metrics
from sklearn.cluster import KMeans
from sklearn.datasets.samples_generator import make_blobs
from sklearn.preprocessing import StandardScaler

# #############################################################################
positions = []
with open('./crime_data.csv', encoding='ISO-8859-1') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    positions = [list(map(float, x)) for x in [row[6:] for row in filter(
        lambda x: x[6] != '1' and x[7] != '1', spamreader)][1:]]

positions = np.array(positions)
colors = ['b', 'g', 'c']
markers = ['o', 'v', 's']


X = positions.reshape(len(positions), 2)
K = 150
kmeans_model = KMeans(n_clusters=K).fit(X)

with open('eggs.csv', 'w') as csvfile:
    spamwriter = csv.writer(csvfile).writerows(kmeans_model.cluster_centers_)

centers = np.array(kmeans_model.cluster_centers_)

plt.plot()
plt.title('k means centroids')


plt.scatter(centers[:, 0], centers[:, 1], marker="x", color='r')
plt.show()
