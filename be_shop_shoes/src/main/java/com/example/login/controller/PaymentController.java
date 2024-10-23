package com.example.login.controller;

import com.example.login.model.entity.Order;
import com.example.login.model.entity.Payment;
import com.example.login.model.service.OrderService;
import com.example.login.model.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "*")
public class PaymentController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public ResponseEntity<String> processPayment(@RequestParam Long orderId) {
        Order order = orderService.getOrderById(orderId);
        String paymentStatus = paymentService.processPayment(order);

        orderService.updateOrderStatus(orderId, paymentStatus.equals("Payment Successful") ? "Completed" : "Failed");

        return ResponseEntity.ok(paymentStatus);
    }

    @PutMapping("/update/{paymentId}")
    public ResponseEntity<String> updatePaymentTotal(@PathVariable Long paymentId, @RequestParam Double newTotal) {
        Payment payment = paymentService.getPaymentById(paymentId);
        if (payment == null) {
            return ResponseEntity.notFound().build();
        }

        payment.setTotal(newTotal);
        paymentService.savePayment(payment);

        return ResponseEntity.ok("Payment total updated successfully");
    }


}
