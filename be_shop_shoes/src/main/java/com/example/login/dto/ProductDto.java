package com.example.login.dto;

import java.util.List;

public class ProductDto {
    private Long categoryId; // Chỉ cần ID
    private String name;
    private String description;
    private Double price;
    private String productCode;
    private List<ProductDetailDto> productDetail;
    private List<InventoryDto> inventory;

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public List<ProductDetailDto> getProductDetail() {
        return productDetail;
    }

    public void setProductDetail(List<ProductDetailDto> productDetail) {
        this.productDetail = productDetail;
    }

    public List<InventoryDto> getInventory() {
        return inventory;
    }

    public void setInventory(List<InventoryDto> inventory) {
        this.inventory = inventory;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
