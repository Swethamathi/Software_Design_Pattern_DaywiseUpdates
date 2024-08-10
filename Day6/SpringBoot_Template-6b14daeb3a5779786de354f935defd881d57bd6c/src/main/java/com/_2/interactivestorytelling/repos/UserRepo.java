package com._2.interactivestorytelling.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com._2.interactivestorytelling.models.Users;

public interface UserRepo extends JpaRepository <Users,Long> {
    
}
