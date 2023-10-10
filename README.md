# Multi-dimensional Symptom Index Web Application

The Multidimensional Symptom Index (MSI) application is a patient-reported
outcome measure for pain phenotyping, prognosis, and treatment decisions.
It is designed to evaluate the pain in terms of both frequency and interference
using the scoring matrix designed based on the patient's experience.
Once the patient completes the outcome measure, the application returns a
compiled result of the patient assessment.

## Original Work

The original application was developed by WORLDiscoveries, which is a
JavaScript application with Flask backend based on the findings from [this study](https://onlinelibrary.wiley.com/doi/full/10.1002/ejp.1224).
The application is accessible only via a local server, requiring the user
to have the files and dependent packages installed on their computer.
The application is available through contacting the principal investigator (PI)
of this project, Prof. D. Walton.

## Current Work & Contribution

The UWO MSK-IF has developed the updated MSI Web application, which has several
enhancements in the workflow and user interface.

## Frontend Dependencies
* Bootstrap 5
* Survey JS
* Chart JS
* AnyChart
* HTML2PDF

## Other Requirements
* docopt==0.6.2
* Flask==2.1.2
* mock==4.0.3
* numpy==1.21.6
* Requests==2.31.0
* simplejson==3.17.6
