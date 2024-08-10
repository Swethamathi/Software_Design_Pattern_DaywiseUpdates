package com._2.interactivestorytelling.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com._2.interactivestorytelling.models.Users;
import com._2.interactivestorytelling.services.UserServices;

@RestController
@RequestMapping("/users")
public class UserController {
      @Autowired
      private UserServices uservice;


      @GetMapping("/all")
      public List<Users> GetUsers(){
        return uservice.getUsers();
      }


      @PostMapping("/add")
      public Users AddUser(@RequestBody Users user){
        return uservice.addUser(user);
      }
    
}
