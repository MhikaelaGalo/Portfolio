# BDO Stock Price Forecasting

This project focuses on the time-series analysis and predictive modeling of **BDO Unibank, Inc. (BDO)** historical stock data. Utilizing machine learning techniques, the system aims to forecast future stock price movements based on historical trends, volatility, and trading volume.

---

## ## Features & Functionality

The repository provides a complete data science pipeline for financial forecasting:

* **Automated Data Processing**: Cleans and structures raw CSV historical data, handling date conversions and numerical formatting for "Vol." and "Change %" fields.
* **Feature Engineering**: Generates technical indicators and time-lagged features to capture market momentum and historical dependencies.
* **Predictive Modeling**: Implements a **Random Forest Regressor** to estimate closing prices.
* **Hyperparameter Optimization**: Utilizes `GridSearchCV` to fine-tune model parameters for maximum accuracy.
* **Validation Framework**: Employs `TimeSeriesSplit` to ensure the model is evaluated realistically on chronological data, preventing "look-ahead" bias.
* **Performance Metrics**: Calculates Root Mean Squared Error (RMSE) to quantify the precision of price predictions.

---

## ## Technical Architecture

The project is structured within a modular Python environment:

* **Data Source**: `BDO Historical Data.csv` containing daily Open, High, Low, Close (OHLC) prices and trading volume.
* **Core Logic**: `Final_Project.ipynb`, a Jupyter Notebook that serves as the primary engine for:
    * **Exploratory Data Analysis (EDA)**.
    * **Model Training**: Using `sklearn.ensemble.RandomForestRegressor`.
    * **Evaluation**: Comparing predicted vs. actual prices using `sklearn.metrics`.
* **Libraries Used**: 
    * `pandas` & `numpy` for data manipulation.
    * `scikit-learn` for machine learning and cross-validation.
    * `math` for statistical calculations.

---

## ## Setup & Installation

To run the analysis and generate forecasts locally, follow these steps:

1.  **Environment Setup**: Ensure you have a Python environment (3.x) with Jupyter Notebook or Google Colab.
2.  **Install Dependencies**:
    ```bash
    pip install pandas numpy scikit-learn
    ```
3.  **Data Placement**: Keep `BDO Historical Data.csv` in the same directory as the notebook.
4.  **Execution**: Open `Final_Project.ipynb` and run the cells sequentially. The notebook includes an integrated file upload block for compatibility with cloud environments like Google Colab.

---

## ## Model Workflow

1.  **Load**: Import historical BDO stock data (Dates ranging from 2024 through mid-2025).
2.  **Pre-process**: Convert percentage strings and volume abbreviations (e.g., "5.67M") into float values.
3.  **Train**: Fit the Random Forest model on historical windows.
4.  **Forecast**: Output predicted closing prices for the subsequent trading periods.
5.  **Export**: The system generates a `submission.csv` containing the final predicted results.
