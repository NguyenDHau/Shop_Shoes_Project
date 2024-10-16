package com.example.login.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.login.model.entity.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Bạn có thể thêm các phương thức tùy chỉnh tại đây nếu cần
}