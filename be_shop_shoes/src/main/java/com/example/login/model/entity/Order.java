package com.example.login.model.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "order_name")
    private String orderName;

    @Column(name = "total_price")
    private double totalPrice;

    @Column(name = "date_order")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateOrder;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<OrderDetail> orderDetails;

    public Order(Long orderId, String orderName, double totalPrice, Date dateOrder, Set<OrderDetail> orderDetails) {
        this.orderId = orderId;
        this.orderName = orderName;
        this.totalPrice = totalPrice;
        this.dateOrder = dateOrder;
        this.orderDetails = orderDetails;
    }

    public Order() {
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getDateOrder() {
        return dateOrder;
    }

    public void setDateOrder(Date dateOrder) {
        this.dateOrder = dateOrder;
    }

    public Set<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(Set<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
