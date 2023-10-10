Survey.StylesManager.applyTheme("defaultV2");

let surveyJSON = {
 "title": "Multi-dimensional Symptom Index",
 "description": "By completing this scale, you will provide valuable information to your healthcare provider about your pain or related symptoms that can be a part of the information used when making decisions about your care. For each symptom, you will be first asked how often you have that experience, and then how bothersome it is to you. When answering, please consider only those symptoms that you believe are due to the condition for which you are seeking treatment.",
 "logoPosition": "right",
 "focusFirstQuestionAutomatic": false,
 "pages": [
  {
   "name": "Page 1",
   "elements": [
    {
     "type": "rating",
     "name": "sharp_freq",
     "title": "1. How often do you experience 'Sharp or shooting pain' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "sharp_interference",
     "visibleIf": "{sharp_freq} > 0",
     "indent": 2,
     "title": "1.1. When 'Sharp or shooting pain' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{sharp_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "dull_freq",
     "title": "2. How often do you experience 'General dull achiness' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "dull_interference",
     "visibleIf": "{dull_freq} > 0",
     "indent": 2,
     "title": "2.1. When 'General dull achiness' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{dull_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "stiff_freq",
     "title": "3. How often do you experience 'Stiffness or restricted movement' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "stiff_interference",
     "visibleIf": "{stiff_freq} > 0",
     "indent": 2,
     "title": "3.1. When 'Stiffness or restricted movement' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{stiff_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "weak_freq",
     "title": "4. How often do you experience 'Weakness, clumsiness, or giving way' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "weak_interference",
     "visibleIf": "{weak_freq} > 0",
     "indent": 2,
     "title": "4.1. When 'Weakness, clumsiness, or giving way' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{weak_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "sensitive_freq",
     "title": "5. How often do you experience 'Increased sensitivity' ?",
     "description": "* Sensitivity to your environment: E.g., bothered by certain types of light, noise, odor, or temperature",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "sensitive_interference",
     "visibleIf": "{sensitive_freq} > 0",
     "indent": 2,
     "title": "5.1. When 'Increased sensitivity' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{sensitive_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    }
   ]
  },
  {
   "name": "Page 2",
   "elements": [
    {
     "type": "rating",
     "name": "numb_freq",
     "title": "6. How often do you experience 'Numbness or pins & needles' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "numb_interference",
     "visibleIf": "{numb_freq} > 0",
     "indent": 2,
     "title": "6.1. When 'Numbness or pins & needles' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{numb_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "fatigue_freq",
     "title": "7. How often do you experience 'Fatigue' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "fatigue_interference",
     "visibleIf": "{fatigue_freq} > 0",
     "indent": 2,
     "title": "7.1. When 'Fatigue' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{fatigue_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "foggy_freq",
     "title": "8. How often do you experience 'Fogginess'?",
     "description": "* Fogginess: Diffculty concentrating or remembering things",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "foggy_interference",
     "visibleIf": "{foggy_freq} > 0",
     "indent": 2,
     "title": "8.1. When 'fogginess' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{foggy_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "nausea_freq",
     "title": "9. How often do you experience 'Poor appetite or nausea' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "nausea_interference",
     "visibleIf": "{nausea_freq} > 0",
     "indent": 2,
     "title": "9.1. When 'Poor appetite or nausea' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{nausea_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "rating",
     "name": "anxiety_freq",
     "title": "10. How often do you experience 'Nervousness, anxiety or sadness' ?",
     "hideNumber": true,
     "isRequired": true,
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 0,
       "text": "Never"
      },
      {
       "value": 1,
       "text": "Rarely"
      },
      {
       "value": 2,
       "text": "Often"
      },
      {
       "value": 3,
       "text": "Always"
      }
     ]
    },
    {
     "type": "rating",
     "name": "anxiety_interference",
     "visibleIf": "{anxiety_freq} > 0",
     "indent": 2,
     "title": "10.1. When 'Nervousness, anxiety or sadness' occurs, how bothersome is it ?",
     "hideNumber": true,
     "requiredIf": "{anxiety_freq} > 0",
     "autoGenerate": false,
     "rateCount": 4,
     "rateValues": [
      {
       "value": 1,
       "text": "Barely Noticeable"
      },
      {
       "value": 2,
       "text": "Somewhat Bothersome"
      },
      {
       "value": 3,
       "text": "Quite Bothersome"
      },
      {
       "value": 4,
       "text": "Extremely Bothersome"
      }
     ],
     "rateMax": 4
    },
    {
     "type": "comment",
     "name": "other_comments",
     "title": "If there is anything you would like to say about these or any other symptoms, please enter below.",
     "hideNumber": true
   }
   ]
  }
 ],
 "showPageTitles": false,
 "showCompletedPage": false,
 "showPageNumbers": true,
 "showProgressBar": "top",
 "progressBarType": "questions",
 "questionTitlePattern": "numTitle",
 "widthMode": "responsive"
};

function sendDataToServer(survey) {
  // Send Ajax request to your web server
  fetch('/save-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(survey.data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // Redirect to the results page
    window.location.href = '/results';
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

let survey = new Survey.Model(surveyJSON);

$("#survey-container").Survey({
    model: survey,
    onComplete: sendDataToServer
});


