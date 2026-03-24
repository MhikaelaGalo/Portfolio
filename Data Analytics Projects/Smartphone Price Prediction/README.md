# Car Evaluation & Predictive Analytics

This repository contains a data science workflow focused on **Car Evaluation** and advanced data segmenting. It combines raw vehicle attribute datasets with specialized Jupyter notebooks to clean, visualize, and model data for classification and value assessment.

---

## ## Features & Functionality

The project provides an end-to-end analytics pipeline:

* **Vehicle Attribute Classification**: Analyzes key car characteristics—such as buying price, maintenance cost, door count, person capacity, luggage boot size, and safety ratings—to determine overall acceptability.
* **Statistical Modeling**: Employs `statsmodels` for regression analysis and trend identification across various data segments.
* **Advanced Data Segmentation**: Features specialized logic to create "Value Segments," allowing for deeper insights into how specific combinations of attributes influence a car's market or safety standing.
* **Visualization Suite**: Uses `Seaborn` and `Matplotlib` to generate heatmaps, distribution plots, and correlation matrices to identify the primary drivers of car desirability.
* **Data Transformation**: Handles categorical encoding and time-series processing (via `datetime`) to prepare non-numeric data for machine learning algorithms.

---

## ## Technical Architecture

The system is built on a standard Python data science stack designed for reproducibility:

* **Primary Data**: `car_evaluation.csv`
    * **Attributes**: Buying (vhigh, high, med, low), Maint (vhigh, high, med, low), Doors (2, 3, 4, 5more), Persons (2, 4, more), Lug_boot (small, med, big), Safety (low, med, high).
    * **Target**: Class (unacc, acc, good, vgood).
* **Analytics Engine**: `DataSet_Testing.ipynb`
    * **Libraries**: `pandas`, `numpy`, `seaborn`, `matplotlib`, `statsmodels`.
    * **Environment**: Optimized for Google Colab/Jupyter Notebooks.
* **Output**: Generates processed CSV files (e.g., `processed_data2_with_value_segment.csv`) with calculated features and segments for further business intelligence use.

---

## ## Setup & Installation

Follow these steps to run the analysis:

1.  **Requirement**: Ensure Python 3.x is installed.
2.  **Dependencies**: Install the required libraries via terminal:
    ```bash
    pip install pandas numpy seaborn matplotlib statsmodels
    ```
3.  **File Placement**: Ensure `car_evaluation.csv` is in the same directory as the `DataSet_Testing.ipynb` notebook.
4.  **Execution**: Open the notebook in a Jupyter environment and run the cells. If using Google Colab, use the built-in file upload utility when prompted.

---

## ## Analysis Workflow

1.  **Exploration**: Load raw car data and perform initial summary statistics.
2.  **Visualization**: Plot the distribution of safety ratings vs. acceptability.
3.  **Segmentation**: Apply custom logic to group data based on price-to-maintenance ratios.
4.  **Modeling**: Run statistical tests to find which features significantly impact the final "Class" of the vehicle.
5.  **Export**: Save the refined dataset with the newly engineered "Value Segment" labels.
