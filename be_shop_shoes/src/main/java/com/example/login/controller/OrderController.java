package com.example.login.controller;

import com.example.login.dto.OrderDTO;
import com.example.login.dto.OrderRequest;
import com.example.login.model.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.login.model.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(
            @RequestBody OrderRequest orderRequest) {

        try {
            Order newOrder = orderService.createOrder(
                    orderRequest.getPaymentMethod(),
                    orderRequest.getShippingAddress(),
                    orderRequest.getCusName(),
                    orderRequest.getCusPhone(),
                    orderRequest.getCusEmail(),
                    orderRequest.getOrderNote(),
                    orderRequest.getUserId(),
                    orderRequest.getToTal()
            );
            return new ResponseEntity<>(newOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }


    @PutMapping("/{orderId}/status")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long orderId, @RequestParam String status) {
        Order order = orderService.updateOrderStatus(orderId, status);
        return ResponseEntity.ok(order);
    }
}
