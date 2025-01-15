+++
title = 'K Nearest Neighbors'
date = 2025-01-07T13:16:10+01:00
draft = false
parent = 'datascience'
+++

K-Nearest-Neighbors is a non-parametric model and can be used for clustering and regression.

TODO: Explain and link parametric and non-parametric models

# Clustering

1. Choose {{<tex >}}k \in \mathbf{N}{{</tex >}} the number of clusters
2. Choose k initial centroids
3. Assign each data point a cluster
4. Recalculate the centroids from the assigned points
5. Repeat step 3 and 4 until convergence

The distance measurement dictates which type of error measurement is used and how the cluster center is calculated. The following two sections show how to calculate the cluster centroids for Euclidean and Manhattan distance.

<!---more--->

## Euclidean Distance Measurement

For the Euclidean distance the error measurement is the SSE (TODO: Link Glossary):

{{<tex >}}$
    SSE = \sum_{i=1}^k\sum_{x \in c_i}(c_i - x)^2
${{</tex >}}

Where {{<tex >}}$c_i${{</tex >}} is the cluster center, x is the position of a data point belonging to the cluster c.

To update the cluster centroid for a single cluster the SSE has to be minimized which can be done by setting the derivative of the SSE has to be set to zero. Since only a single cluster is updated, the outer sum can be dropped.

{{<tex >}}$
\begin{align}
    \frac{\partial}{\partial c} SSE_{c_i} &= \frac{\partial}{\partial c} \sum_{x \in c_i}(c_i - x)^2 \\
    \frac{\partial}{\partial c} SSE_{c_i} &= \sum_{x \in c_i} 2(c_i - x) \stackrel{!}{=} 0 \\
    0 &= 2 m c_i - 2 \sum_{x\in c_i} x \\
    c_i &= \frac{1}{m}\sum_{x\in c_i} x \\
    m &= |c_i|
\end{align}
${{</tex >}}

Where m is the number of data points that belong to cluster c.

Therefore, when using the Euclidean distance, the centroids can be calculated by the mean of the data points which belong to the cluster.

## Manhattan Distance Measurement

For the Manhatten distance the error measurement is the SAE (TODO: Link Glossary):

{{<tex >}}$
    SAE = \sum_{i=1}^k\sum_{x \in c_i}|c_i - x|
${{</tex >}}

To update the cluster centroid for a single cluster the SAE has to be minimized which is again done by setting the derivative zero. Again, the update is only calculated for one cluster so the outer sum is dropped.

{{<tex >}}$
\begin{align}
    \frac{\partial}{\partial c} SSE_{c_i} &= \frac{\partial}{\partial c} \sum_{x \in c_i}|c_i - x| \\
    \frac{\partial}{\partial c} SSE_{c_i} &= \sum_{x \in c_i} sign(c_i - x) \stackrel{!}{=} 0 \\
    c_i &= median(x)
\end{align}
${{</tex >}}

The explanation of the median can be done intuitively: The sum of the signs is minimized when there are an equal amount of data points to the left of the centroid and two the right of the centroid. Therefore, the median is used.

# Regression

kNN regression works by taking the k nearest neighbors to the sample point and taking the average of the values of the neighbors.

# Influence of the parameter k

The model flexibility is is indirectly proportional to the parameter k. The model is extremely flexible when {{<tex >}}$k=1${{</tex >}} because only one data point will be used to do a decision. With small k it is also very likely that the model overfits. The larger the parameter k is chosen, the model becomes inflexible leading to under fitting.

# Problems

- Choosing the initial values for the centroids is hard
- Choosing the right k is hard
