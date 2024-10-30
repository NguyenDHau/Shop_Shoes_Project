//package com.example.login.controller;
//
//import com.example.login.dto.InventoryDTO;
//import com.example.login.model.entity.Inventory;
//import com.example.login.model.entity.Product;
//import com.example.login.model.service.InventoryService;
//import com.example.login.model.service.ProductService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/inventories")
//@CrossOrigin(origins = "*")
//public class InventoryController {
//
//    @Autowired
//    private InventoryService inventoryService;
//
//    @GetMapping
//    public List<Inventory> getAllInventories() {
//        return inventoryService.getAllInventories();
//    }
//
//    @GetMapping("/{productCode}")
//    public ResponseEntity<List<InventoryDTO>> getSizeAndQuantityByProductCode(@PathVariable String productCode) {
//        List<InventoryDTO> inventoryDTOs = inventoryService.getSizeAndQuantityByProductCode(productCode);
//        if (!inventoryDTOs.isEmpty()) {
//            return ResponseEntity.ok(inventoryDTOs);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }
//
//
//    @PostMapping
//    public Inventory createInventory(@RequestBody Inventory inventory) {
//        return inventoryService.createOrUpdateInventory(inventory);
//    }
//
//    @PutMapping("/{id}")
//    public Inventory updateInventory(@PathVariable Long id, @RequestBody Inventory inventoryDetails) {
////        Inventory inventory = inventoryService.getInventoryById(id);
////        inventory.setProduct(inventoryDetails.getProduct());
////        inventory.setProductCode(inventoryDetails.getProductCode());
////        inventory.setProductName(inventoryDetails.getProductName());
////        inventory.setQuantity(inventoryDetails.getQuantity());
////        inventory.setSize(inventoryDetails.getSize());
////        return inventoryService.createOrUpdateInventory(inventory);
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteInventory(@PathVariable Long id) {
//        inventoryService.deleteInventory(id);
//        return ResponseEntity.ok("Inventory deleted successfully.");
//    }
//}