package com.example.login.model.repository;

import com.example.login.model.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query(value = "SELECT r.review, u.first_name as firstName, r.start, r.file_img_review as fileImgUrl " +
            "FROM review r " +
            "JOIN users u ON u.id = r.user_id " +
            "JOIN product p ON p.id = r.product_id " +
            "WHERE p.id = :productId", nativeQuery = true)
    List<Object[]> findReviewsByProductId(@Param("productId") Long productId);
}


