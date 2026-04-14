## Text Formatter

A lightweight, fast, and dependency-free web tool to clean, format, and transform text directly in the browser.

## Overview

Text Formatter is a simple utility built with pure HTML, CSS, and JavaScript. It combines common text formatting and cleaning operations into a single interface for quick, everyday use.

The tool is designed to be:

- Fast
- Minimal
- Easy to extend
- Fully client-side (no data leaves the browser)

## Features

**Case Conversion**

- Convert text to uppercase
- Convert text to lowercase
- Convert text to title case
- Convert text to sentence case

**Text Cleaning**

- Remove extra spaces
- Remove line breaks
- Remove duplicate lines
- Trim leading and trailing whitespace

**Utilities**

- Undo last changes (with history)
- Reset text input
- One-click copy to clipboard

**Live Statistics**

- Word count
- Character count
- Sentence count

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

No external libraries or frameworks are used.

## Project Structure

/text-formatter

├── index.html     # Main UI structure

├── styles.css     # Styling and layout

├── script.js      # Core logic and functionality

└── README.md      # Documentation

## Getting Started

**Run Locally**

1. Clone or download the repository:

   git clone <your-repo-url>
2. Open the project folder
3. Open index.html in any modern browser

No build tools or installation required.

## Usage

1. Paste or type text into the input area
2. Use the available buttons to apply formatting or cleaning
3. View updated statistics in real time
4. Copy the result using the copy button

## Implementation Notes

- All operations are performed in real time in the browser
- A simple history stack is used to support undo functionality
- Text processing is handled using regular expressions and string methods
- Designed to handle typical large text inputs efficiently

## Edge Cases Handled

- Empty input
- Multiple spaces and irregular spacing
- Mixed casing
- Duplicate lines
- Special characters

## Customization

The codebase is modular and easy to extend. You can:

- Add new formatting functions in script.js
- Extend UI with new tool groups in index.html
- Modify styles in styles.css

## Browser Support

Works in all modern browsers that support:

- ES6 JavaScript
- Clipboard API

## License

**MIT License**

## Contributing

Contributions are welcome. Feel free to fork the project and submit a pull request.
