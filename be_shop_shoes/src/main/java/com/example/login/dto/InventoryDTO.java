package com.example.login.dto;

public class InventoryDTO {
    private Long productId; // Chỉ cần ID
    private String productCode;
    private String productName;
    private Double price;
    private int quantity;
    private String size;

    // Getter và setter


    public InventoryDTO(Long productId, String productCode, String productName, Double price, int quantity, String size) {
        this.productId = productId;
        this.productCode = productCode;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
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
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
