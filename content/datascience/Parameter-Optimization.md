+++
title = 'Parameter Optimization'
date = 2025-01-15T08:42:48+01:00
draft = true
+++

Parameter optimization can be done by defining the error that has to be minimized, taking the derivative of that equation with respect to the parameters and then setting the derivative to zero.

<!--more-->

## Simple Linear Regression

For simple linear regression the parameters are chosen to minimize the (RSS)[./Glossary.md]. This is done by first calculating the intercept {{<tex >}}$\beta_0${{</tex >}} and then the slope {{<tex >}}$\beta_1${{</tex >}}.

{{<tex >}}$
\begin{align}
    RSS &= \sum_i^n \left( y_i - \hat{y_i} \left)^2 \\
    RSS &= \sum_i^n \left( y_i - \beta_0 - \beta_1 x \left)^2 \\
    0 &= \frac{\partial RSS}{\partial \beta_0} \\
    0 &= -2\sum_i^n \left( y_i - \beta_0 - \beta_1 x \left) && \text{dividing by -2 and splitting the sums} \\
    0 &= \sum_i^n y_i - \sum_i^n \beta_0 - \beta_1 \sum_i^n x && \text{$\beta$ is constant and can be pulled out of the sum} \\
n\beta_0 &= \sum_i^n y_i - \beta_1 \sum_i^n x && \text{dividing by $n$, which means that the mean of $x$ and $y$ is calculated} \\
\beta_0 &= \bar{y} - \beta_1 \bar{x}
\end{align}
${{</tex >}}

Next the slope is calculated in a similar way and by inserting the intercept.

{{<tex >}}$
\begin{align}
    0 &= \frac{\partial RSS}{\partial \beta_0} \\
\end{align}
${{</tex >}}

## Multiple Linear Regression
