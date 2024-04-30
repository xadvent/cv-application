# CV/Resume Creator

## Introduction
This Resume Creator is a dynamic web application built with React, designed as a part of my learning journey through "The Odin Project". It allows users to quickly and efficiently create, customize, and download their resumes, showcasing the practical application of my skills in React development.

## Features
- **Personal Details Input**: Users can input their full name, email, phone number, and address, which are dynamically rendered on the resume preview.
- **Education Section**: Allows users to add multiple educational experiences, edit them, or remove them as needed.
- **Experience Section**: Users can detail their professional experience, including job titles, company names, and descriptions.
- **Download Resume**: With a click of a button, users can download their resume in a neatly formatted PDF file.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: As the frontend build tool for a faster and more efficient development experience.
- **Netlify**: To host and serve the production build of the web application.

## Project Page
You can view the deployed application [here](https://resume-creator-ps.netlify.app/).

## Usage
1. Fill in your personal details in the provided fields.
2. Add your educational background, including school name, degree, and dates.
3. Add your professional experience, with details such as position and responsibilities.
4. Preview your resume in real-time as you add or edit information.
5. Download your resume in PDF format using the 'Download Resume' button.

## Code Overview
The application's frontend is compartmentalized into React components, each handling a specific part of the user interface:
- `App.jsx`: The root component that orchestrates the application's overall layout.
- `CreateInput.jsx`: A reusable input component for form fields.
- `EducationForm.jsx` & `ExperienceForm.jsx`: Components for adding and editing education and experience entries.
- `TopDocument.jsx` & `EducationDocument.jsx`: Components for the resume document's top section and education section, respectively.

## Reflections
This project was an exercise in understanding and applying React's principles in a real-world project. I encountered challenges with state management and component reusability, which I addressed by meticulously planning the component hierarchy and leveraging hooks for state and effect management.

## Acknowledgments
I'd like to thank "The Odin Project" for providing the resources and guidance throughout this learning experience. Special thanks to the open-source contributors whose libraries made this project possible.

## License
This project is open source and available under the [MIT License](LICENSE.md).
