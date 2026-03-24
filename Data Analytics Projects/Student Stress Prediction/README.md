# Student Mental Health & Wearable Stress Analysis

This project explores the intersection of lifestyle habits, academic performance, and mental well-being among students. By leveraging both self-reported survey data and physiological metrics from wearable devices, the system aims to predict and categorize stress levels using machine learning.

---

## ## Features & Functionality

The repository provides an end-to-end data science pipeline focused on predictive mental health analytics:

* **Multimodal Data Integration**: Combines subjective data (Social Media usage, Sleep, Exercise) with objective metrics (Wearable Stress Scores).
* **Predictive Stress Modeling**: Developed a custom machine learning model to classify students into stress "bins" (Low, Moderate, High) based on their daily habits.
* **Lifestyle Impact Analysis**: Analyzes how variables like `Social_Media_Hours`, `Screen_Time`, and `Sleep_Hours` correlate with `Academic_Performance`.
* **Automated Data Validation**: Includes checks for dataset dimensions, data types, null values, and duplicates to ensure high data integrity.
* **Insight Generation**: The model provides qualitative interpretations, such as identifying "stress response latency" or "robust coping mechanisms" when physiological data contradicts lifestyle indicators.

---

## ## Technical Architecture

The project is built using a modern Python-based analytical stack:

* **Data Source**: `mental_health_analysis.csv`
    * **Features**: User ID, Age, Gender, Social Media/Exercise/Sleep Hours, Screen Time, and Support System quality.
    * **Targets**: `Survey_Stress_Score` and `Wearable_Stress_Score`.
* **Processing Engine**: `Final Project.ipynb`
    * **Libraries**: `pandas` and `numpy` for data framing; `matplotlib` and `seaborn` for behavioral visualization.
    * **Modeling**: Implements a predictive model (e.g., Random Forest or Logistic Regression) to map lifestyle inputs to stress outcomes.
* **Environment**: Optimized for Jupyter Notebook or Google Colab environments.

---

## ## Setup & Installation

To replicate the analysis or test the model with new data:

1.  **Prerequisites**: Install the necessary Python packages:
    ```bash
    pip install pandas numpy matplotlib seaborn scikit-learn
    ```
2.  **File Loading**: Ensure `mental_health_analysis.csv` is located in the same directory as the Jupyter Notebook.
3.  **Run Pipeline**: Open `Final Project.ipynb` and execute the cells sequentially to:
    * Load and clean the data.
    * Perform Exploratory Data Analysis (EDA).
    * Train the stress prediction model.
    * Review the final classification insights.

---

## ## Data Insights & Observations

The analysis focuses on specific behavioral patterns:
* **Negative Correlations**: Identifying how increased screen time significantly impacts sleep duration and subsequent stress levels.
* **The "Support System" Factor**: Evaluating the weight of a student's support network in buffering high academic pressure.
* **Wearable vs. Survey**: Highlighting discrepancies where a student might report high stress (survey) while their wearable device indicates low physiological arousal.
