# Java CSV Processing Example

This project demonstrates efficient processing of large CSV files in Java using multi-threading and concurrent data structures.

## Structure

- `app/` - Main application code and resources
- `gradle/` - Gradle wrapper and configuration
- `gradlew`, `gradlew.bat` - Gradle wrapper scripts
- `settings.gradle`, `gradle.properties` - Gradle configuration files (Groovy DSL)

## How to Run

1. **Run the main application:**

   ```sh
   ./gradlew run
   ```

   This will process the CSV file and print city counts to the console.

2. **Run tests:**
   ```sh
   ./gradlew test
   ```
   This will execute unit tests to verify CSV aggregation logic.

## Requirements

- Java 11 or newer
- Gradle (wrapper included)

## Notes

- The sample CSV file is located in `app/src/main/resources/large.csv`.
- The main class is `org.example.App`.

## License

MIT
