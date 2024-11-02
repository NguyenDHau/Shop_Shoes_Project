package com.example.login.model.service;

import com.example.login.Dao.ProductColorDao;
import com.example.login.Dao.ProductSizeDao;
import com.example.login.dto.*;
import com.example.login.model.entity.*;
import com.example.login.model.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductColorRepository productColorRepository;

    @Autowired
    private SizeRepository sizeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private FileUrlProduct fileUrlProduct;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Transactional
    public void createProduct(ProductDto productDto) {

        if (productRepository.findByProductCode(productDto.getProductCode()).isPresent()) {
            throw new IllegalArgumentException("Product code already exists: " + productDto.getProductCode());
        }

        //Luu thong tin chung product;
        Product product = new Product();
        product.setCategoryId(productDto.getCategoryId());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        product.setProductCode(productDto.getProductCode());
        product = productRepository.save(product);

        // Luu thong tin vao productColor;
        List<ProductDetailDto> productDetailDtoList = productDto.getProductDetail();
        Integer order = 1;
        for (ProductDetailDto item : productDetailDtoList) {
            ProductColor productColor = new ProductColor();
            productColor.setProductId(product.getId());
            productColor.setColorId(item.getColorId());
            productColor = productColorRepository.save(productColor);

            // Luu anh cua mau
            FileProductImg fileProductImg = new FileProductImg();
            fileProductImg.setProductColorId(productColor.getId());
            fileProductImg.setFileUrl(item.getFileUrl());
            fileProductImg.setOrder(Long.valueOf(order));
            fileUrlProduct.save(fileProductImg);
            order++;
        }

        // Luu iventory
        List<InventoryDto> inventoryDtoList = productDto.getInventory();
        for (InventoryDto item : inventoryDtoList){
            Inventory inventory = new Inventory();
            inventory.setColorId(item.getColorId());
            inventory.setSizeId(item.getSizeId());
            inventory.setQuantity(item.getQuantity());
            inventory.setProductId(product.getId());
            inventoryRepository.save(inventory);
        }

    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.getAllProduct();
    }

    public ProductDetailResponseDto getProductById(Long id) {

        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

        List<ProductColorDao> productColorDao = productColorRepository.getProductColorById(id);

        List<ProductSizeDao> productSizeDao =  sizeRepository.getProductSizeById(id);

        Category category = categoryRepository.findById(product.getCategoryId()).get();

        ProductDetailResponseDto productDetailResponseDto = new ProductDetailResponseDto();
        productDetailResponseDto.setProductId(product.getId());
        productDetailResponseDto.setCategoryName(category.getName());
        productDetailResponseDto.setName(product.getName());
        productDetailResponseDto.setPrice(product.getPrice());
        productDetailResponseDto.setListColor(productColorDao);
        productDetailResponseDto.setListSize(productSizeDao);
        productDetailResponseDto.setDescription(product.getDescription());
        productDetailResponseDto.setProductCode(product.getProductCode());

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
