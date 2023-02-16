package com.practice.student.controller;

import com.practice.student.model.Student;
import com.practice.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/registerStudent")
    public Student registerStudent(@RequestBody Student student) {
        return studentService.registerStudent(student);
    }

    @GetMapping("/getStudents")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @DeleteMapping("/deleteStudent")
    public void deleteStudent(@RequestParam Integer id) { //id of student to delete
        studentService.deleteStudent(id);
    }

}
