//package com.example.login.model.service;
//
//import com.example.login.dto.InventoryDTO;
//import com.example.login.model.entity.Inventory;
//import com.example.login.model.entity.Product;
//import com.example.login.model.repository.InventoryRepository;
//import com.example.login.model.repository.ProductRepository; // Thêm repository cho Product
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class InventoryService {
//
//    @Autowired
//    private InventoryRepository inventoryRepository;
//
//    @Autowired
//    private ProductRepository productRepository; // Thêm để tìm sản phẩm
//
//    public List<Inventory> getAllInventories() {
//        return inventoryRepository.findAll();
//    }
//
//    public Inventory getInventoryById(Long id) {
//        return inventoryRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Inventory not found with id " + id));
//    }
//
//    public InventoryDTO getInventoryByProductCode(String productCode) {
//        return inventoryRepository.findByProductCode(productCode)
//                .map(inventory -> new InventoryDTO(inventory.getId(), inventory.getProductCode(),
//                        inventory.getProductName(),inventory.getPrice(), inventory.getQuantity(), inventory.getSize()))
//                .orElse(null); // Nếu không tìm thấy, trả về null hoặc có thể ném ngoại lệ
//    }
//
//    public List<InventoryDTO> getSizeAndQuantityByProductCode(String productCode) {
//        return inventoryRepository.findSizeAndQuantityByProductCode(productCode);
//    }
//
//    public Inventory createOrUpdateInventory(Inventory inventory) {
//        // Kiểm tra xem sản phẩm có tồn tại không
//        Product product = productRepository.findById(inventory.getProduct().getId())
//                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + inventory.getProduct().getId()));
//
//        // Đảm bảo sản phẩm tồn tại
//        inventory.setProduct(product);
//        inventory.setProductCode(product.getProductCode());
//        inventory.setProductName(product.getName());
//        inventory.setPrice(product.getPrice());
//
//        // Kiểm tra xem đã tồn tại inventory với cùng productCode và size chưa
//        Optional<Inventory> existingInventory = inventoryRepository.findByProductCodeAndSize(
//                product.getProductCode(),
//                inventory.getSize()
//        );
//
//        if (existingInventory.isPresent()) {
//            // Nếu tồn tại, cập nhật số lượng
//            Inventory inventoryToUpdate = existingInventory.get();
//            inventoryToUpdate.setQuantity(inventoryToUpdate.getQuantity() + inventory.getQuantity());
//            return inventoryRepository.save(inventoryToUpdate);
//        } else {
//            // Nếu không tồn tại, tạo mới inventory
//            return inventoryRepository.save(inventory);
//        }
//    }
//
//    public void deleteInventory(Long id) {
//        Inventory inventory = getInventoryById(id);
//        inventoryRepository.delete(inventory);
//    }
//}