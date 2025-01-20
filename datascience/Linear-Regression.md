+++
title = 'Linear Regression'
date = 2024-12-18T14:02:30+01:00
draft = true
+++

In statistics, linear regression is a model that estimates the linear relationship between a scalar response (dependent variable) and one or more explanatory variables (regressor or independent variable). A model with exactly one explanatory variable is a simple linear regression; a model with two or more explanatory variables is a multiple linear regression. This term is distinct from multivariate linear regression, which predicts multiple correlated dependent variables rather than a single dependent variable.

The parameters are chosen in a way to reduce the residuals.

[Penrose Inverse](./Pseudo-Inverse.md)

<!--more-->

# Simple Linear Regression

Simple linear regression is a regression with exactly one variable and leads to the model:

$$
\begin{align}
    Y &= \beta_0 + \beta_1 X + \epsilon\\
    \beta_0 &: \text{the intercept}\\
    \beta_1 &: \text{the slope}
\end{align}
$$

The model parameters can be calculated by the following closed form equations:

$$
\begin{align}
\hat{\beta_1} &= \frac{\sum_{i=1}^n(x_i - \bar{x})(y_i-\bar{y})}{\sum_{i=1}^n(x_i-\bar{x})^2}\\
\hat{\beta_0} & = \bar{y} - \hat{\beta_1}\bar{x}\\
\bar{x},\bar{y} &: \text{the mean of x and y}
\end{align}
$$

See the derivation [here](./Parameter-Optimization.md)

# Multiple Linear Regression

Multiple linear regression means that there are multiple independent variables relate to the predicted variable. The model can be written in matrix form:

$$
\begin{align}
    \hat{y} &= \overrightarrow{x} \beta \\
    \hat{y} &: \text{the predicted value} \\
    \beta &: \text{the parameter matrix of the linear model} \\
    \overrightarrow{x} &: \text{the variable vector}
\end{align}
$$

To calculate the parameters $$\beta$$ the following equation can be used:

$$
\begin{align}
    \beta &= (X^T)^{-1}X^T \overrightarrow{y} \\
    \beta &: \text{the model parameters} \\
    X &: \text{the data matrix} \\
    \overrightarrow{y} &: \text{the predicted values in vector form}
\end{align}
$$

See the derivation [here](Parameter-Optimization.md).

# Multivariate Linear Regression

Multivariate linear regression means that there are multiple predicted variables.
