# Medical Diagnosis Web App

An AI-powered medical symptom analysis web application built using Node.js, Express.js, EJS, Bootstrap, and Google's Gemini API.

## Features

* User-friendly symptom input form
* Patient information collection
* Symptom severity and duration tracking
* Existing medical conditions and medication support
* AI-generated preliminary medical assessment
* Possible condition analysis
* Confidence estimation
* Recommended specialist suggestions
* Medical red-flag detection
* Responsive Bootstrap-based interface

## Tech Stack

### Frontend

* HTML
* EJS
* Bootstrap 5
* JavaScript

### Backend

* Node.js
* Express.js

### AI Integration

* Google Gemini API

## Project Structure

```
Medical-Diagnosis-Webapp/
│
├── controller/
├── services/
│   └── geminiServices.js
├── views/
│   └── home.ejs
├── public/
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/Falana-G/Medical-Diagnosis-Webapp.git
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```env
GEMINI_API_KEY=YOUR_API_KEY
```

4. Start the application

```bash
node app.js
```

5. Open in browser

```
http://localhost:18455
```

## Disclaimer

This application is intended for educational and informational purposes only. It does not provide medical advice, diagnosis, or treatment. Users should consult qualified healthcare professionals for medical concerns.

## Future Enhancements

* User authentication
* Medical history storage
* PDF report generation
* Symptom search system
* Multi-language support
* Doctor recommendation module
* Appointment booking integration
* Advanced AI confidence scoring

## Author

Harkeerat Singh Chawla
MCA Student
