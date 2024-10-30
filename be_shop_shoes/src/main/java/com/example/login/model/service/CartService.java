//package com.example.login.model.service;
//
//import com.example.login.dto.CartRequest;
//import com.example.login.model.entity.Cart;
//import com.example.login.model.entity.Inventory;
//import com.example.login.model.entity.User;
//import com.example.login.model.repository.CartRepository;
//import com.example.login.model.repository.InventoryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.time.Instant;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CartService {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Autowired
//    private InventoryRepository inventoryRepository;
//
//    public List<Cart> getCartByUserId(Long userId) {
//        User user = new User();
//        user.setId(userId);
//        return cartRepository.findByUserId(userId);
//    }
//
//    public Cart createOrUpdateCart(CartRequest cartRequest) {
//        // Lấy user từ cơ sở dữ liệu (hoặc dùng phương thức khác để đảm bảo user tồn tại)
//        User user = new User();
//        user.setId(cartRequest.getUserId());
//
//        // Lấy Inventory từ cơ sở dữ liệu dựa trên productId
//        Inventory inventory = inventoryRepository.findById(cartRequest.getProductId())
//                .orElseThrow(() -> new RuntimeException("Không tìm thấy Inventory với ID: " + cartRequest.getProductId()));
//
//        // Tạo mới đối tượng Cart với dữ liệu từ CartRequest
//        Cart newCart = new Cart();
//        newCart.setUserId(cartRequest.getUserId());
//        newCart.setProductId(cartRequest.getProductId());
//        newCart.setQuantity(cartRequest.getQuantity());
//        newCart.setTimeCreate(Instant.now());
//
//        // Tìm kiếm trong Cart theo user, productName và size
//        Optional<Cart> existingCart = cartRepository.findByUserIdAndProductId(cartRequest.getUserId(), cartRequest.getProductId());
//
//        if (existingCart.isPresent()) {
//            // Nếu tìm thấy cart có cùng tên sản phẩm và kích thước thì +1 quantity
//            Cart cart = existingCart.get();
//            cart.setQuantity(cart.getQuantity() + 1);
//            return cartRepository.save(cart);
//        } else {
//            return cartRepository.save(newCart);
//        }
//    }
//    @Transactional
//    public void deleteCartByUserId(Long userId) {
//        cartRepository.deleteByUserId(userId);
//    }
//}