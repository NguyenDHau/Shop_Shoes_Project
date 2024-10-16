package com.example.login.model.repository;

import com.example.login.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Không cần thêm phương thức tùy chỉnh ở đây nếu không cần
}
