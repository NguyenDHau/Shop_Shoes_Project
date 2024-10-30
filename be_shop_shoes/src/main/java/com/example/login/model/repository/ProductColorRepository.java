package com.example.login.model.repository;

import com.example.login.Dao.ProductColorDao;
import com.example.login.model.entity.ProductColor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductColorRepository extends JpaRepository<ProductColor, Long> {
    @Query(value = "select fpi.file_url as 'fileUrl',\n" +
            "\t\tcl.color_name as 'colorName',\n" +
            "        cl.id as 'id'\n" +
            "from product_color pc\n" +
            "join file_product_img fpi on fpi.color_id = pc.color_id and fpi.product_id = pc.product_id\n" +
            "join color cl on cl.id = pc.color_id\n" +
            "where pc.product_id = :productId\n" +
            "order by fpi.order", nativeQuery = true)
    List<ProductColorDao> getProductColorById(@Param("productId") Long productId);

}
