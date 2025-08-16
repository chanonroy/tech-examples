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
        java.util.concurrent.ConcurrentHashMap<String, Integer> cityCounts = new java.util.concurrent.ConcurrentHashMap<>();
        java.io.InputStream is = App.class.getClassLoader().getResourceAsStream(csvFile);
        if (is == null) {
            System.err.println("Resource not found: " + csvFile);
            return;
        }
        try (BufferedReader br = new BufferedReader(new java.io.InputStreamReader(is))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] fields = line.split(",");
                if (fields.length >= 4 && !fields[3].equalsIgnoreCase("city")) {
                    String city = fields[3].trim();
                    cityCounts.merge(city, 1, Integer::sum);
                }
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            return;
        }
        System.out.println("City counts:");
        cityCounts.forEach((city, count) -> System.out.printf("%s: %d\n", city, count));
        System.out.println("Total unique cities: " + cityCounts.size());

        // Log memory usage
        Runtime runtime = Runtime.getRuntime();
        long usedMemory = runtime.totalMemory() - runtime.freeMemory();
        System.out.printf("Used memory: %.2f MB\n", usedMemory / (1024.0 * 1024.0));
    }

    // Helper for testability (not used in main anymore)
    public static java.util.concurrent.ConcurrentHashMap<String, Integer> aggregateCities(List<String> lines) {
        java.util.concurrent.ConcurrentHashMap<String, Integer> cityCounts = new java.util.concurrent.ConcurrentHashMap<>();
        lines.forEach(csvLine -> {
            String[] fields = csvLine.split(",");
            if (fields.length >= 4 && !fields[3].equalsIgnoreCase("city")) {
                String city = fields[3].trim();
                cityCounts.merge(city, 1, Integer::sum);
            }
        });
        return cityCounts;
    }
}
