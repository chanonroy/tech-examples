package org.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class App {
    public static void main(String[] args) {
        String csvFile = "large.csv";
        // Read all lines from CSV
        List<String> lines = new ArrayList<>();

        // Load CSV from resources
        try (BufferedReader br = new BufferedReader(new java.io.InputStreamReader(
                App.class.getClassLoader().getResourceAsStream(csvFile)))) {
            if (br == null) {
                System.err.println("Error: large.csv not found in resources.");
                return;
            }
            String line;
            while ((line = br.readLine()) != null) {
                lines.add(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            return;
        }

        // Aggregate city counts using a thread-safe map
        java.util.concurrent.ConcurrentHashMap<String, Integer> cityCounts = new java.util.concurrent.ConcurrentHashMap<>();
        lines.parallelStream().forEach(csvLine -> {
            // Simple CSV split, does not handle quoted commas
            String[] fields = csvLine.split(",");
            if (fields.length >= 4 && !fields[3].equalsIgnoreCase("city")) { // skip header
                String city = fields[3];
                cityCounts.merge(city, 1, Integer::sum);
            }
        });

        // Print all city counts
        System.out.println("City counts:");
        cityCounts.forEach((city, count) -> {
            System.out.printf("%s: %d\n", city, count);
        });
    }
}
