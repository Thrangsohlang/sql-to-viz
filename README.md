# SQL to Viz

## Overview

`sql-to-viz` is a project designed to transform SQL query results into insightful visualizations. This tool takes user queries and visualizes the corresponding data to help in understanding complex datasets quickly.

## Features

- Converts user query to SQL query.
- Convert SQL query results into interactive plots.
- Easy integration with different SQL databases.
- Model will output best possible plots based on the data.
- Visualize data trends and relationships.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Thrangsohlang/sql-to-viz.git
   ```
2. Install Poetry to your system. Use below commands for basic installation (taken from poetry docs).
   ```bash
   pipx install poetry
   ```
3. Install all requirements by running
   ```bash
   poetry install
   ```
## Usage
1. Create your own .env file with openai API key in it. Make sure to change the config file with your own database and password.
2. Run the app
   ```bash
   python -m app.main
   ```
3. Enter your query to view the  visualization interface.

## Contributing
Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the [MIT License](./LICENSE).

### Let me know if you need further customization.
   
