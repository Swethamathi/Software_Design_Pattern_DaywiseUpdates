package com._2.interactivestorytelling.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com._2.interactivestorytelling.models.Users;
import com._2.interactivestorytelling.repos.UserRepo;

@Service
public class UserServices {
    @Autowired
    private UserRepo urepo;


    public List<Users> getUsers(){
         return urepo.findAll();
    }
     
    public Users addUser(Users user){
        return urepo.save(user);
    }

}
