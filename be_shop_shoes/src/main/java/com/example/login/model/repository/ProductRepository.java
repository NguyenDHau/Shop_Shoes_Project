package com.example.login.model.repository;

import com.example.login.dto.ProductResponse;
import com.example.login.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByProductCode(String productCode);

    @Query(value = "select p.id,\n" +
            " file_img.file_url as 'fileUrl',\n" +
            " p.name,\n" +
            " p.price,\n" +
            " total_color.total_color as 'totalColor',\n" +
            " c.name as 'categoryName'\n" +
            "from product p\n" +
            "join (\n" +
            "\t\tselect fpi.product_id, fpi.file_url\n" +
            "\t\tfrom file_product_img fpi\n" +
            "\t\torder by fpi.order\n" +
            "\t\tlimit 1\n" +
            ") as file_img on file_img.product_id = p.id\n" +
            "join (\n" +
            "\t\tselect count(pc.color_id) as 'total_color', pc.product_id\n" +
            "\t\tfrom product_color pc\n" +
            "\t\tgroup by pc.product_id\n" +
            ") as total_color on total_color.product_id = p.id\n" +
            "join category c on c.id = p.category_id", nativeQuery = true)
    List<ProductResponse> getAllProduct();
}