---
title: "RNN/LSTM vs GAM para predicción de series financieras"
subtitle: "Predicción de alta frecuencia, volatilidad y construcción de portafolios"
type: "Manuscrito de investigación"
status: "En desarrollo"
year: 2024
authors:
  - "Augusto Rico"
role: "Autor"
summary: "Comparación de redes neuronales recurrentes LSTM y modelos aditivos generalizados para pronóstico intradía, con modelación de volatilidad y optimización de portafolios."
topics:
  - "Machine Learning"
  - "Series de tiempo"
  - "Finanzas cuantitativas"
  - "GARCH"
  - "Optimización"
public: true
featured: true
updated: "2026-09-18"
---

## Pregunta

El proyecto estudia cómo cambia el desempeño predictivo cuando se comparan
arquitecturas LSTM y GAM bajo un diseño de información comparable.

## Datos y enfoque

El trabajo original utiliza datos intradía de 477 acciones del S&P 500 e
incorpora variables como VIX, DXY, WTI, precio y volumen.

La evaluación contempla MSE, MAE, sMAPE y *directional accuracy*. La capa
financiera incluye GARCH(1,1) para volatilidad y portafolios de Markowitz.

## Estado

El manuscrito está siendo reestructurado para mejorar la comparabilidad entre
modelos y fortalecer su diseño antes de un eventual envío a revista.
