
# DevOps API Project

## Requirements

- Node.js
- Docker (optional, for running the app in containers)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Carlos0smar/Devops_final_project.git
   cd Devops_final_project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

## Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t final-project-devop .
   ```

2. Run the application:
   ```bash
   docker run -p 3000:3000 final-project-devop
   ```

## Testing

To run the tests:
```bash
npm test
```
