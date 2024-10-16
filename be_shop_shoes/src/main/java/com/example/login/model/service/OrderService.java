package com.example.login.model.service;
import com.example.login.model.entity.Order;
import com.example.login.model.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Order updateOrder(Long orderId, Order updatedOrder) {
        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (orderOptional.isPresent()) {
            Order order = orderOptional.get();
            order.setOrderName(updatedOrder.getOrderName());
            order.setTotalPrice(updatedOrder.getTotalPrice());
            order.setDateOrder(updatedOrder.getDateOrder());
            order.setOrderDetails(updatedOrder.getOrderDetails());
            return orderRepository.save(order);
        } else {
            return null;  // Hoặc bạn có thể ném exception tùy vào cách bạn muốn xử lý lỗi
        }
    }

    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}

