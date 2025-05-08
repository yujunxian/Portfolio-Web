# Personal Portfolio Website

A professional portfolio website built with Flask to showcase personal projects, skills, and experience.

## Introduction

This personal portfolio website is designed to present Junxian Yu's professional background, educational journey, work experience, skills, and achievements in an elegant and interactive way. The website features a modern, responsive design that works across all devices and screen sizes.

## Features

- Modern, responsive design with glass morphism effects
- Detailed sections for education, experience, achievements, and skills
- Personal introduction and contact information
- Interactive UI elements with hover animations
- Mobile-friendly navigation
- **Secure login system** with user authentication
- First-line paragraph indentation on the homepage

## Technology Stack

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Montserrat, Open Sans)
- **Authentication**: Flask Session Management

## Project Structure

```
/portfolio-website
├── app.py                 # Flask application main file
├── requirements.txt       # Project dependencies
├── templates/             # HTML templates
│   ├── index.html         # Homepage
│   ├── login.html         # Login page with authentication
│   ├── education.html     # Education page
│   ├── experience.html    # Work experience page
│   ├── achievements.html  # Achievements page
│   ├── skills.html        # Skills showcase page
│   ├── personal.html      # Personal attributes page
│   ├── contact.html       # Thank you / Contact page
│   ├── about.html         # About page
│   ├── projects.html      # Projects showcase page
│   └── head.html          # Shared head content
└── static/                # Static files
    ├── css/
    │   └── style.css      # Main stylesheet
    ├── js/
    │   └── main.js        # JavaScript functionality
    └── img/               # Image assets
        └── profile.jpg    # Profile photo
```

## Installation

### Prerequisites

- Python 3.6 or higher
- pip (Python package manager)

### Setup Instructions

1. Clone the repository to your local machine

```bash
git clone https://github.com/yujunxian/Portfolio-Web
cd Portfolio-Web
```

2. Create and activate a virtual environment (optional but recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

3. Install dependencies

```bash
pip install -r requirements.txt
```

## Running the Project

Start the Flask development server:

```bash
python app.py
```

The website will be available at:
```
http://127.0.0.1:5000/
```

## Authentication

The website features a secure login system:

- Default credentials:
  - Username: `admin`
  - Password: `admin`

- All pages require authentication
- Session-based login state management
- Logout functionality available on all authenticated pages

## Customization

To personalize this portfolio website:

- Edit the HTML templates in the `templates` folder to update content
- Modify the CSS in `static/css/style.css` to change styling
- Replace images in the `static/img` directory with your own
- Update the contact information and social media links
- Change authentication credentials in `app.py`

