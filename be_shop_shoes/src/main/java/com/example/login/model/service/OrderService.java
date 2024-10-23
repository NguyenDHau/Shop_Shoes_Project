package com.example.login.model.service;

import com.example.login.model.entity.Cart;
import com.example.login.model.entity.Order;
import com.example.login.model.entity.Payment;
import com.example.login.model.repository.CartRepository;
import com.example.login.model.repository.OrderRepository;
import com.example.login.model.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    public Order getOrderById(Long orderId) {
        return orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found with id: " + orderId));
    }


    @Transactional
    public Order createOrder(String paymentMethod, String shippingAddress, String cusName, String cusPhone, String cusEmail, String orderNote, Double toTal) {

        // Tạo đơn hàng
        Order order = new Order();
        order.setPaymentMethod(paymentMethod);
        order.setShippingAddress(shippingAddress);
        order.setOrderDate(LocalDateTime.now());
        order.setStatus("Loading");
        order.setCusName(cusName);
        order.setCusPhone(cusPhone);
        order.setCusEmail(cusEmail);
        order.setOrderNote(orderNote);
        order.setToTal(toTal);

        // Lưu Order trước
        Order savedOrder = orderRepository.save(order);

        // Tạo Payment mới cho Order
        Payment payment = new Payment();
        payment.setTotal(toTal);
        payment.setStatus("Pending");
        payment.setOrder(savedOrder);

        // Lưu Payment
        paymentRepository.save(payment);


        return savedOrder;
    }


    public Order updateOrderStatus(Long orderId, String status) {
        Order order = orderRepository.findById(orderId).orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        return orderRepository.save(order);
    }
}