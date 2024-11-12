package com.example.login.model.repository;
import com.example.login.model.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    Optional<Inventory> findByProductIdAndColorIdAndSizeId(Long productId, Long colorId, Long sizeId);
}
