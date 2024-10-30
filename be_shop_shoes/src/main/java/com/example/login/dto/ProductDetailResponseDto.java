package com.example.login.dto;

import com.example.login.Dao.ProductColorDao;
import com.example.login.Dao.ProductSizeDao;

import java.util.List;

public class ProductDetailResponseDto {
    private Long productId;

    private String categoryName;

    private Double price;

    private List<ProductColorDao> listColor;

    private List<ProductSizeDao> listSize;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<ProductColorDao> getListColor() {
        return listColor;
    }

    public void setListColor(List<ProductColorDao> listColor) {
        this.listColor = listColor;
    }

    public List<ProductSizeDao> getListSize() {
        return listSize;
    }

    public void setListSize(List<ProductSizeDao> listSize) {
        this.listSize = listSize;
    }
}
