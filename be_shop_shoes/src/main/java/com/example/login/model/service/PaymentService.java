package com.example.login.model.service;

import com.example.login.model.entity.Order;
import com.example.login.model.entity.Payment;
import com.example.login.model.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public String processPayment(Order order) {
        // Mock payment processing
        if ("CARD".equals(order.getPaymentMethod())) {
            // Call to third-party payment gateway
            return "Payment Successful";
        } else {
            return "Payment Failed";
        }
    }

    public Payment getPaymentById(Long paymentId) {
        return paymentRepository.findById(paymentId).orElse(null); // Trả về null nếu không tìm thấy
    }

    public void savePayment(Payment payment) {
        paymentRepository.save(payment); // Lưu hoặc cập nhật payment
    }
}
