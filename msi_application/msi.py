import numpy

class MSI:
    def __init__(self):
        self.matrix = numpy.loadtxt(open("/home/multidsymptomindex/mysite/matrix.csv", "rb"), delimiter=",", skiprows=1)

    def get_value(self, symptom, frequency):
        symptom_index = {"sharp": 0,
                         "dull": 1,
                         "stiff": 2,
                         "weak": 3,
                         "sensitive": 4,
                         "numb": 5,
                         "fatigue": 6,
                         "foggy": 7,
                         "nausea": 8,
                         "anxiety": 9}

        frequency_index = {"Never": 0,
                           "Rarely, Barely": 1,
                           "Rarely, Noticeable": 2,
                           "Rarely, Quite": 3,
                           "Rarely, Stop": 4,
                           "Often, Barely": 5,
                           "Often, Noticeable": 6,
                           "Often, Quite": 7,
                           "Often, Stop": 8,
                           "Always, Barely": 9,
                           "Always, Noticeable": 10,
                           "Always, Quite": 11,
                           "Always, Stop": 12}

        if len(frequency) > 0:
            s = symptom_index[symptom]
            f = frequency_index[frequency]
            return self.matrix[f, s]
        else:
            return 0

    def analyze(self, req):
        somatic = 0
        nonsomatic = 0
        inputs = {"sharp": "",
                  "dull": "",
                  "stiff": "",
                  "weak": "",
                  "sensitive": "",
                  "numb": "",
                  "fatigue": "",
                  "foggy": "",
                  "nausea": "",
                  "anxiety": ""}

        label_index = {"sharp": "Sharp or shooting pain",
                       "dull": "General dull achiness",
                       "stiff": "Stiffness or restricted movement",
                       "weak": "Weakness, clumsiness, or giving way",
                       "sensitive": "Increased sensitivity",
                       "numb": "Numbness or pins & needles",
                       "fatigue": "Fatigue",
                       "foggy": "Fogginess",
                       "nausea": "Poor appetite or nausea",
                       "anxiety": "Nervousness, anxiety or sadness"}

        num2label_freq = {0: "Never",
                          1: "Rarely",
                          2: "Often",
                          3: "Always"}

        num2label_interference = {1: "Barely",
                                  2: "Noticeable",
                                  3: "Quite",
                                  4: "Stop"}

        outputs = {}
        labels = []
        values = []

        frequency_no = 0
        frequency_sum = 0

        interference_no = 0
        interference_sum = 0

        symptoms_no = 0

        somaticindex = ["sharp", "dull", "stiff", "weak", "numb"]
        nonsomaticindex = ["sensitive", "numb", "fatigue", "foggy", "nausea", "anxiety"]

        for key in req:
            symptom, fi = key.split("_")
            value = req[key]
            if fi == "freq":
                if value != 0:
                    symptoms_no += 1
                inputs[symptom] = num2label_freq[value]
                frequency_no += 1
                frequency_sum += value
            else:
                if fi == "comments":
                    continue
                inputs[symptom] += ", " + num2label_interference[value]
                interference_no += 1
                interference_sum += value

        for key in inputs:
            outputs[key] = self.get_value(key, inputs[key])
            labels.append(label_index[key])
            values.append(outputs[key])
            if key in somaticindex:
                somatic += outputs[key]
            if key in nonsomaticindex:
                nonsomatic += outputs[key]

        full_rec = "Likely" if nonsomatic <= 2 else ("Unlikely" if nonsomatic >= 22 else "Unclear")
        mdd = "Unlikely" if nonsomatic <= 9 else ("Likely" if nonsomatic >= 21 else "Unclear")

        # Comment Section
        try:
            comments = req["other_comments"]
        except:
            comments = "No comment provided."

        return {"somatic": somatic,
                "nonsomatic": nonsomatic,
                "labels": labels,
                "vals": values,
                "symp_no": symptoms_no,
                "freq_mean": frequency_sum/frequency_no if frequency_no > 0 else 0,
                "int_mean": interference_sum/interference_no if interference_no > 0 else 0,
                "full_rec": full_rec,
                "mdd": mdd,
                "comments": comments
                }
