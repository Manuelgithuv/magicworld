package com.magicworld.tfg_angular_springboot.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.nio.charset.StandardCharsets;

public class DotenvLoader {

    public static void loadIfExists() {
        File f = new File(".env");
        if (!f.exists()) {
            return;
        }

        try (BufferedReader br = new BufferedReader(new FileReader(f, StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                line = line.trim();
                if (line.isEmpty() || line.startsWith("#") || line.startsWith("//")) {
                    continue;
                }
                // Split on first '='
                int idx = line.indexOf('=');
                if (idx <= 0) continue;
                String key = line.substring(0, idx).trim();
                String value = line.substring(idx + 1).trim();
                // Remove surrounding quotes if present
                if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.substring(1, value.length() - 1);
                }

                if (System.getenv(key) == null && System.getProperty(key) == null) {
                    System.setProperty(key, value);
                }
            }

            System.out.println("[DotenvLoader] .env cargado: " + f.getAbsolutePath());
        } catch (Exception e) {
            System.err.println("[DotenvLoader] Error cargando .env: " + e.getMessage());
        }
    }
}
