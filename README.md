# Audio to MCQ Quiz Generator

This app generates MCQ questions from a given audio file.

Audio file specifications : 
- extension - .wav
- language - currently it works on English with Indian Accent (eng-IN) which can be changed by setting desired language [here](https://github.com/aashutoshPanda/Quiz-Generator-from-audio/blob/main/audioToQuestions/utils.py#L19 "line").



### How it works ?

Firstly text is extracted from the audio file using [SpeechRecognition package](https://pypi.org/project/SpeechRecognition/ "python's SpeechRecognition") ,it's Recognizer instance has seven methods for recognizing speech from an audio source using various APIs, here, recognize_google() - Google Web Speech API is used.

 Google Web Speech API works with audio files of smaller duration thus we divide the audio file into pieces of 10 seconds each. Then text from each part is extracted and combined.

Extracted text is then passed to a model which generates MCQ questions from the text.

Checkout [ KristiyanVachev / Question-Generation ](https://github.com/KristiyanVachev/Question-Generation " KristiyanVachev / Question-Generation ") for text to MCQ generation.



## Getting Started

Clone the repo
```bash
$ git clone https://github.com/aashutoshPanda/Quiz-Generator-from-audio.git
```

Backend Setup

```bash
$ python3 -m venv env
$ python3 -m venv env
$ source env/bin/activate
$ source env/bin/activate
$ pip install -r requirements.txt
$ python manage.py migrate
$ python manage.py runserver
```

## Frontend

```bash
$ cd client
$ npm i
$ npm start
```
