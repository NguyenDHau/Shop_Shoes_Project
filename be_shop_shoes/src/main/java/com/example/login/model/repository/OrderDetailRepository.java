package com.example.login.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.login.model.entity.OrderDetail;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    // Bạn có thể thêm các phương thức tùy chỉnh tại đây nếu cần
}
