package com.example.login.model.service;

import com.example.login.model.entity.OrderDetail;
import com.example.login.model.repository.OrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService {

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    // Lưu OrderDetail
    public OrderDetail saveOrderDetail(OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    // Lấy tất cả OrderDetail
    public List<OrderDetail> getAllOrderDetails() {
        return orderDetailRepository.findAll();
    }

    // Lấy OrderDetail theo ID
    public OrderDetail getOrderDetailById(Long id) {
        return orderDetailRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("OrderDetail not found with id " + id));
    }

    // Xóa OrderDetail theo ID
    public void deleteOrderDetail(Long id) {
        orderDetailRepository.deleteById(id);
    }
}

