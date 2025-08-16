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
        List<String> lines = new ArrayList<>();
        java.io.InputStream is = App.class.getClassLoader().getResourceAsStream(csvFile);
        if (is == null) {
            System.err.println("Resource not found: " + csvFile);
            return;
        }
        try (BufferedReader br = new BufferedReader(new java.io.InputStreamReader(is))) {
            String line;
            while ((line = br.readLine()) != null) {
                lines.add(line);
            }
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            return;
        }
        java.util.concurrent.ConcurrentHashMap<String, Integer> cityCounts = aggregateCities(lines);
        System.out.println("Total unique cities: " + cityCounts.size());

        // Find top 5 cities using a min-heap
        int TOP_N = 5;
        java.util.PriorityQueue<java.util.Map.Entry<String, Integer>> minHeap =
            new java.util.PriorityQueue<>(TOP_N, java.util.Comparator.comparingInt(java.util.Map.Entry::getValue));
        for (java.util.Map.Entry<String, Integer> entry : cityCounts.entrySet()) {
            if (minHeap.size() < TOP_N) {
                minHeap.offer(entry);
            } else if (entry.getValue() > minHeap.peek().getValue()) {
                minHeap.poll();
                minHeap.offer(entry);
            }
        }
        // Collect and sort top cities in descending order
        java.util.List<java.util.Map.Entry<String, Integer>> topCities = new java.util.ArrayList<>(minHeap);
        topCities.sort((a, b) -> Integer.compare(b.getValue(), a.getValue()));
        System.out.println("Top 5 cities:");
        for (java.util.Map.Entry<String, Integer> entry : topCities) {
            System.out.printf("%s: %d\n", entry.getKey(), entry.getValue());
        }

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
