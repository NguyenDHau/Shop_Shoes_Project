package com.example.login.controller;

import com.example.login.model.entity.Order;
import com.example.login.model.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    // URL 1: Lấy tất cả đơn hàng (GET /api/orders)
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // URL 2: Lấy chi tiết đơn hàng theo ID (GET /api/orders/{id})
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isPresent()) {
            return ResponseEntity.ok(order.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // URL 3: Tạo đơn hàng mới (POST /api/orders)
    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

    // URL 4: Cập nhật đơn hàng (PUT /api/orders/{id})
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        Order order = orderService.updateOrder(id, updatedOrder);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // URL 5: Xóa đơn hàng (DELETE /api/orders/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
