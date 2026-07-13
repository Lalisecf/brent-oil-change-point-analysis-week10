# Change Point Analysis and Statistical Modeling of Brent Oil Prices

**10 Academy – Artificial Intelligence Mastery Program**  
**Week 10 Challenge**

Author: **Lalise Fufi**  
Date: **July 2026**

---

# Project Overview

Brent crude oil prices are influenced by numerous geopolitical, economic, and policy-related events. Major events such as wars, OPEC production decisions, global financial crises, economic sanctions, and pandemics often lead to sudden changes in oil prices.

This project aims to analyze the historical Brent oil price time series and identify structural changes using statistical analysis and Bayesian Change Point Detection. The analysis will help investors, policymakers, and energy companies understand how major global events influence oil price movements.

This repository contains the **Interim Submission (Task 1)** for the Week 10 Challenge.

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
│   └── task1_eda.ipynb
│
├── reports/
│   └── interim_report.md
│
├── src/
│
├── scripts/
│
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

# Task 1 Objectives

The interim submission focuses on:

- Defining the complete data analysis workflow.
- Understanding the Brent oil dataset.
- Researching important geopolitical and economic events.
- Exploring time series properties.
- Investigating stationarity.
- Examining volatility patterns.
- Preparing for Bayesian Change Point Analysis.

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

Task 2 will include:

- Bayesian Change Point Modeling using PyMC
- Posterior distribution analysis
- Identification of structural break dates
- Quantification of price changes before and after each change point
- Association of change points with geopolitical events

Task 3 will include:

- Flask REST API
- Interactive React dashboard
- Event highlighting
- Change point visualization
- Historical price exploration

---

# How to Run

Clone the repository:

```bash
git clone <repository-url>
cd brent-oil-change-point-analysis
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Launch Jupyter Notebook:

```bash
jupyter notebook
```

Open:

```
notebooks/task1_eda.ipynb
```

---

# Author

**Lalise Fufi**

10 Academy – Artificial Intelligence Mastery Program

Week 10 Challenge

2026