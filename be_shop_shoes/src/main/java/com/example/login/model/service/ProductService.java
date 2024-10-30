package com.example.login.model.service;

import com.example.login.Dao.ProductColorDao;
import com.example.login.Dao.ProductSizeDao;
import com.example.login.dto.ProductDetailResponseDto;
import com.example.login.dto.ProductResponse;
import com.example.login.model.entity.Product;
import com.example.login.model.entity.ProductColor;
import com.example.login.model.repository.ProductColorRepository;
import com.example.login.model.repository.ProductRepository;
import com.example.login.model.repository.SizeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductColorRepository productColorRepository;

    @Autowired
    private SizeRepository sizeRepository;

    public Product createProduct(Product product) {
        // Kiểm tra xem productCode đã tồn tại chưa
        if (productRepository.findByProductCode(product.getProductCode()).isPresent()) {
            throw new IllegalArgumentException("Product code already exists: " + product.getProductCode());
        }
        return productRepository.save(product);
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.getAllProduct();
    }

    public ProductDetailResponseDto getProductById(Long id) {

        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

        List<ProductColorDao> productColorDao = productColorRepository.getProductColorById(id);

        List<ProductSizeDao> productSizeDao =  sizeRepository.getProductSizeById(id);

        ProductDetailResponseDto productDetailResponseDto = new ProductDetailResponseDto();
        productDetailResponseDto.setProductId(product.getId());
//        productDetailResponseDto.setCategoryName();
        productDetailResponseDto.setPrice(product.getPrice());
        productDetailResponseDto.setListColor(productColorDao);
        productDetailResponseDto.setListSize(productSizeDao);

        return productDetailResponseDto;
    }

    public Product updateProduct(Long id, Product product) {
        product.setId(id);
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
