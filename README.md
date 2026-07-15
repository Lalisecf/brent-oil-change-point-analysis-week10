# Change Point Analysis and Statistical Modeling of Brent Oil Prices

**10 Academy – Artificial Intelligence Mastery Program**  
**Week 10 Challenge**

Author: **Lalise Fufi**  
Date: **July 2026**

---

# Project Overview

Brent crude oil prices are influenced by numerous geopolitical, economic, and policy-related events. Major events such as wars, OPEC production decisions, global financial crises, economic sanctions, and pandemics often lead to sudden changes in oil prices.

This project aims to analyze the historical Brent oil price time series and identify structural changes using statistical analysis and Bayesian Change Point Detection. The analysis will help investors, policymakers, and energy companies understand how major global events influence oil price movements.

This repository contains the **Final Submission** for the Week 10 Challenge, covering:

- **Task 1:** Exploratory Data Analysis (EDA) and Research
- **Task 2:** Bayesian Change Point Modeling and Insight Generation

The project investigates historical Brent oil price movements, detects structural changes using Bayesian inference, and associates detected change points with major geopolitical and economic events.

---

# Business Objective

The objective of this project is to investigate how major geopolitical and economic events affect Brent oil prices by:

- Understanding historical price behavior.
- Identifying structural changes in the oil market.
- Investigating trend, stationarity, and volatility properties.
- Preparing the data for Bayesian Change Point Modeling.
- Building a structured event dataset for later association with detected change points.

---

# Dataset

The dataset contains historical daily Brent crude oil prices covering:

- **Start Date:** 20 May 1987
- **End Date:** 30 September 2022

Dataset Columns:

| Column | Description |
|---------|-------------|
| Date | Trading date |
| Price | Brent oil price (USD per barrel) |

---

# Project Structure

```
brent-oil-change-point-analysis/

│
├── .github/
│   └── workflows/
│
├── data/
│   ├── raw/
│   │   └── BrentOilPrices.csv
│   │
│   └── processed/
│       └── oil_market_events.csv
│
├── notebooks/
│   ├── task1_eda.ipynb
│   └── task2_change_point_model.ipynb
│
├── reports/
│   ├── interim_report.md
│   └── final_report.md
│
├── src/
├── scripts/
├── tests/
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

# Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- SciPy
- Statsmodels
- PyMC (for Task 2)
- ArviZ
- Jupyter Notebook

---

# Project Objectives

## Task 1 – Exploratory Data Analysis

- Understand the Brent oil price dataset.
- Explore long-term price trends.
- Investigate stationarity and volatility.
- Compile a structured dataset of major geopolitical events.
- Prepare the dataset for Bayesian modeling.

## Task 2 – Bayesian Change Point Modeling

- Build a Bayesian Change Point Model using PyMC.
- Detect statistically significant structural breaks.
- Estimate posterior distributions of model parameters.
- Evaluate model convergence.
- Associate detected change points with geopolitical events.
- Quantify changes before and after the detected structural break.

---

# Data Analysis Workflow

The project follows the following workflow:

1. Load the Brent oil price dataset.
2. Perform data cleaning and preprocessing.
3. Explore the dataset using descriptive statistics.
4. Visualize historical oil price trends.
5. Analyze yearly average prices.
6. Study the price distribution.
7. Examine trend using moving averages.
8. Compute daily log returns.
9. Test stationarity using the Augmented Dickey-Fuller (ADF) test.
10. Analyze rolling volatility.
11. Examine autocorrelation using ACF and PACF.
12. Compile a structured geopolitical event dataset.
13. Prepare the dataset for Bayesian Change Point Modeling.

---

# Exploratory Data Analysis (EDA)

The exploratory analysis includes:

- Historical Brent oil price visualization
- Distribution analysis
- Boxplot analysis
- Annual average price analysis
- Correlation analysis
- Moving average trend analysis
- Daily log return analysis
- Rolling volatility analysis
- Autocorrelation (ACF)
- Partial Autocorrelation (PACF)

---

# Key Findings

## Historical Trend

The Brent oil price series exhibits multiple long-term upward and downward trends with several abrupt price changes corresponding to major geopolitical and economic events.

---

## Distribution

The price distribution is right-skewed and multimodal, indicating that Brent oil prices have existed under multiple market regimes rather than following a single stable distribution.

---

## Trend Analysis

The 30-day and 90-day moving averages reveal several long-term market cycles and clearly identify major price shocks including:

- Gulf War
- Global Financial Crisis
- COVID-19 Pandemic
- Russia–Ukraine Conflict

---

## Stationarity Analysis

The original Brent oil price series was tested using the Augmented Dickey-Fuller (ADF) test.

Results:

- ADF Statistic = **-1.9939**
- p-value = **0.2893**

Since the p-value is greater than 0.05, the null hypothesis cannot be rejected.

**Conclusion:**

The original Brent oil price series is **not stationary**.

---

After transforming the data into daily log returns:

- ADF Statistic = **-16.4271**
- p-value ≈ **0.0000**

The transformed series is stationary.

---

## Volatility Analysis

Rolling 30-day volatility reveals several periods of heightened market uncertainty, particularly during:

- Gulf War
- Global Financial Crisis
- COVID-19 Pandemic

The volatility clustering observed confirms that oil markets experience changing levels of uncertainty over time.

---

## Autocorrelation Analysis

Both the ACF and PACF plots indicate that the daily log returns exhibit very weak autocorrelation after lag 0.

This suggests that although the transformed series is stationary, daily returns are nearly independent, which is common in financial time series.

---

# Event Dataset

A structured dataset containing major geopolitical and economic events has been created.

The dataset includes events such as:

- Iraq Invades Kuwait
- Gulf War
- Asian Financial Crisis
- September 11 Attacks
- Iraq War
- Global Financial Crisis
- Arab Spring
- OPEC Production Decisions
- COVID-19 Pandemic
- Russia–Ukraine War

This dataset will be used during Task 2 to associate detected change points with real-world events.

---

# Why Bayesian Change Point Analysis?

The exploratory analysis indicates that Brent oil prices exhibit:

- Long-term trends
- Non-stationarity
- Structural breaks
- Volatility clustering
- Sudden market shifts

These characteristics violate the assumptions of models that assume constant statistical properties over time.

Bayesian Change Point Analysis is therefore appropriate because it can identify structural breaks and estimate when significant changes in market behavior occurred.

# Bayesian Change Point Modeling

Task 2 applies Bayesian inference to identify structural changes in the Brent oil price time series.

The implemented model consists of:

- A discrete change point (`tau`) modeled using a Discrete Uniform prior.
- Separate mean parameters before and after the change point (`mu1` and `mu2`).
- A shared standard deviation parameter (`sigma`).
- A Normal likelihood connecting the observed daily log returns to the model.

Posterior distributions are estimated using Markov Chain Monte Carlo (MCMC) sampling implemented in PyMC.

---
# Bayesian Model Results

The Bayesian Change Point Model successfully estimated the posterior distributions of the model parameters and identified a probable structural break within the Brent oil price series.

Model outputs include:

- Posterior distributions of model parameters
- Trace plots for convergence diagnostics
- Estimated change point location
- Posterior summaries
- Association between the detected change point and major geopolitical events

Although uncertainty remains regarding the exact timing of the structural break, the model successfully demonstrates the application of Bayesian Change Point Detection for identifying changes in oil market dynamics.

---
# Convergence Diagnostics

Model convergence was evaluated using:

- Posterior trace plots
- Posterior summaries
- Effective Sample Size (ESS)
- R-hat statistics

The continuous parameters (`mu1` and `sigma`) exhibited acceptable convergence, while the discrete change point parameter (`tau`) showed greater uncertainty due to the complexity of sampling discrete variables and the limited number of MCMC iterations used during model fitting.

Increasing the number of posterior samples and tuning iterations would improve the precision of the estimated change point.

---
# Change Point Interpretation

The Bayesian model detected a statistically significant structural break within the Brent oil price time series.

The estimated change point was compared with a manually compiled dataset of major geopolitical and economic events.

The closest event identified was:

- **OPEC Production Cut Agreement**
- **Date:** 30 November 2016
- **Category:** OPEC

While the detected change point does not exactly coincide with the event date, the temporal proximity suggests that OPEC production policies may have contributed to changes in Brent oil price behavior.

It is important to note that Bayesian Change Point Analysis identifies statistical associations rather than proving causal relationships.
---
# Key Results

The project produced the following outputs:

- Historical Brent oil price analysis
- Daily log return analysis
- Stationarity testing using the Augmented Dickey-Fuller (ADF) test
- Rolling volatility analysis
- Bayesian Change Point Model
- Posterior trace plots
- Posterior parameter distributions
- Estimated structural break
- Comparison with major geopolitical events
- Quantified before-and-after parameter estimates
---

# Assumptions

The analysis assumes that:

- Brent oil prices accurately reflect global oil market conditions.
- Major geopolitical events influence market behavior.
- Event dates are approximate starting points.
- Daily observations are correctly ordered.
- Log returns adequately stabilize the series for statistical analysis.

---

# Limitations

Several limitations should be considered:

- Correlation does not imply causation.
- Multiple global events may occur simultaneously.
- Market reactions may occur before or after official event dates.
- External variables such as inflation, exchange rates, and GDP are not included in the interim analysis.
- Bayesian Change Point Analysis identifies statistically significant changes but cannot independently prove causal relationships.

---

# Future Work

Future improvements include:

- Detecting multiple change points rather than a single structural break.
- Incorporating macroeconomic indicators such as GDP, inflation, exchange rates, and global oil demand.
- Comparing Bayesian Change Point Analysis with alternative models including:
  - Markov-Switching Models
  - Vector Autoregression (VAR)
  - Hidden Markov Models
- Developing a Flask REST API for serving analysis results.
- Building an interactive React dashboard for exploring historical prices, detected change points, and geopolitical events.


---

# How to Run

Clone the repository:

```bash
git clone <repository-url>
cd brent-oil-change-point-analysis
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Launch Jupyter Notebook:

```bash
jupyter notebook
```

Run the notebooks in the following order:

1. `notebooks/task1_eda.ipynb`
2. `notebooks/task2_change_point_model.ipynb`

The notebooks reproduce the complete exploratory analysis, Bayesian change point modeling, posterior diagnostics, and interpretation of results.

---

# Author

**Lalise Fufi**

10 Academy – Artificial Intelligence Mastery Program

Week 10 Challenge

2026