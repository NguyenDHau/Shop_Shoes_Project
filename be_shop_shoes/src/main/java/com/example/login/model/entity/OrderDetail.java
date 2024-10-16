package com.example.login.model.entity;

import javax.persistence.*;

@Entity
@Table(name = "order_details")
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDetailId; // Khóa chính

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order; // Khóa ngoại liên kết với đơn hàng

    @Column(name = "product_id", nullable = false)
    private Long productId; // Khóa ngoại liên kết với sản phẩm

    @Column(name = "product_name")
    private String productName; // Tên sản phẩm

    @Column(name = "quantity")
    private int quantity; // Số lượng sản phẩm

    @Column(name = "price")
    private double price; // Giá sản phẩm

    @Column(name = "total_product")
    private double total; // Tổng tiền, không lưu vào DB

    // Constructor, getters, and setters

    public OrderDetail() {}

    public Long getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Long orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
        calculateTotal(); // Tính toán tổng khi số lượng thay đổi
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
        calculateTotal(); // Tính toán tổng khi giá thay đổi
    }

    public double getTotal() {
        return total;
    }

    private void calculateTotal() {
        this.total = this.quantity * this.price; // Tính tổng
    }
}
