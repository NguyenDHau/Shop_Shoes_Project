package com.example.login.model.repository;

import com.example.login.model.entity.FileProductImg;
import com.example.login.model.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileUrlProduct extends JpaRepository<FileProductImg, Long> {
}
