//package com.example.login.model.repository;
//
//import com.example.login.dto.InventoryDTO;
//import com.example.login.model.entity.Inventory;
//import com.example.login.model.entity.Product;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//@Repository
//public interface InventoryRepository extends JpaRepository<Inventory, Long> {
//    Optional<Inventory> findByProductCodeAndSize(String productCode, String size);
//    Optional<Inventory> findByProductCode(String productCode);
//
//    @Query("SELECT new com.example.login.dto.InventoryDTO(i.id, i.productCode, i.productName, i.price, i.quantity, i.size) FROM Inventory i WHERE i.productCode = :productCode")
//    List<InventoryDTO> findSizeAndQuantityByProductCode(@Param("productCode") String productCode);
//
//}
