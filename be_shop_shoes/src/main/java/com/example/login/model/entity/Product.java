package com.example.login.model.entity;

import javax.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // Thêm thuộc tính tên sản phẩm
    private double price; // Thêm thuộc tính giá sản phẩm

    @Column(name = "category_id", nullable = false) // Khóa ngoại
    private Long categoryId;

    private String size; // Kích thước sản phẩm

    @Column(name = "product_quantity") // Tên cột cho số lượng sản phẩm
    private int quantity; // Số lượng sản phẩm

    // Getter và Setter cho id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter và Setter cho các thuộc tính khác
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}