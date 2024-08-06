# AI Customer Support Application
=============================

This application provides an AI-powered customer support system using Next.js, NextUI, and OpenAI, deployed on Vercel.

## Technologies Used

* Next.js: A React-based framework for building server-side rendered (SSR) and statically generated websites and applications.
* NextUI: A React component library for building user interfaces.
* OpenAI: A platform for building AI models, including language models like GPT-3.
* Vercel: A platform for deploying and hosting modern web applications.

## Features

* AI-powered chatbot for customer support
* Integration with OpenAI's language models for natural language processing
* Next.js for building a fast and scalable web application
* NextUI for building a user-friendly interface
* Deployed on Vercel for easy scaling and management

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/ai-customer-support.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Environment Variables

This application uses environment variables to store sensitive information such as API keys. To set up the environment variables, create a `.env` file in the root of the project with the following variables:

* `OPENAI_API_KEY`: Your OpenAI API key
* `VERCEL_ANALYTICS_ID`: Your Vercel analytics ID

Note: Do not commit your `.env` file to version control. Instead, add it to your `.gitignore` file to keep your API keys secure.

## Deployment

This application is deployed on Vercel. To deploy, simply push changes to your repository and Vercel will automatically build and deploy the application.

## Services

* File service: handles file-related operations, such as fetching the list of files and saving a new file to the database.
* Room service: handles operations related to chat rooms, such as fetching the list of rooms and creating a new room.

## Components

* Chatbot component: uses OpenAI's language models to provide AI-powered customer support.
* File uploader component: uses NextUI to provide a user-friendly interface for uploading files.
* Room list component: uses NextUI to display a list of chat rooms.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.