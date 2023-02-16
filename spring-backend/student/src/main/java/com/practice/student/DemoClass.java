package com.practice.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoClass {
    @GetMapping("/getMessage")
    public String getMessage() {
        return "is it working?";
    }
}
