+++
title = 'Matrix Properties'
date = 2025-01-08T13:04:17+01:00
draft = false
+++

| Property              | Explanation                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Rank                  | Number of linear independant columns in the matrix                                                                         |
| Transpose             | The transpose switches the row and the column indices. A visual interpretation is to mirror the matrix along it's diagonal |
| Inverse               | Only exists for quadratic matrices multiplied with <br> the original matrix evaluates to the identity matrix               |
| Positive Semidefinite | All eigenvalues of the matrix are positive                                                                                 |
| Trace                 | Sum of the diagonal elements                                                                                               |
| Frobinius Norm        | Is the square root of the sum of the squared matrix elements                                                               |

<!--more-->

# Transpose

Formally the transpose is defined as $[A^T]_{ij}=[A]_{ji}$.

There are a number of properties for involving transposed matrices:

$$
\begin{align}
    (A^T)^T &= A \\
    (A+B)^T &= A^T + B^T \\
    (cA)^T &= cA^T \\
    (AB)^T &= B^TA^T \\
    |A^T| &= |A| \\
    (A^T)^{-1} &= (A^{-1})^T
\end{align}
$$

If A only has real entries, then $A^TA$ is a positive semidefinite matrix.

If A is an $m\times n$ matrix then $AA^T \in m\times m$ and $A^TA \in n\times n$. Further these matrices are symmetric matrices.

# Inverse

The inverse only exists for square matrices and only if the matrix has full rank or the determinant is non-zero.

There are a number of properties for invertible matrices:

$$
\begin{align}
A\cdot A^{-1} &= A^{-1} \cdot A = I \\
I^{-1} &= I \\
(A^{-1})^{-1} &= A \\
(A\cdot B)^{-1} &= B^{-1} \cdot A^{-1} \\
(A_1 \cdot A_2 \cdots A_k)^{-1} &= A_k^{-1} \cdots A_2^{-1} \cdot A_1^{-1} \\
(A^k)^{-1} &= (A^{-1})^k \\
(cA)^{-1} &= c^{-1}A^{-1} \\
(A^T)^{-1} &= (A^{-1})^T \\
rank(A^{-1}) &= rank(A) \\
|A^{-1}| &= |A|^{-1} \\
\end{align}
$$

If $$\lambda$$ is an eigenvalue of A then $\lambda^{-1}$ is an eigenvalue of $A^{-1}$

The inverse can be calculated with the Gauß-Jordan-Algorithm.

# Frobinius Norm

$$||A||_F = \sqrt{\sum_{i,j}A_{ij}^2}$
