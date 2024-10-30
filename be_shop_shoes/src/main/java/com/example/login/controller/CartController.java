//package com.example.login.controller;
//
//import com.example.login.dto.CartRequest;
//import com.example.login.model.entity.Cart;
//import com.example.login.model.entity.Inventory;
//import com.example.login.model.entity.User;
//import com.example.login.model.repository.InventoryRepository;
//import com.example.login.model.service.CartService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.Instant;
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/cart")
//@CrossOrigin(origins = "*")
//public class CartController {
//
//    @Autowired
//    private CartService cartService;
//    @Autowired
//    private InventoryRepository inventoryRepository;
//
//    @GetMapping("/user/{userId}")
//    public List<Cart> getCartByUserId(@PathVariable Long userId) {
//        return cartService.getCartByUserId(userId);
//    }
//
//    @PostMapping("/add")
//    public Cart addToCart(@RequestBody CartRequest cartRequest) {
////        // Lấy user từ cơ sở dữ liệu (hoặc dùng phương thức khác để đảm bảo user tồn tại)
////        User user = new User();
////        user.setId(cartRequest.getUserId());
////
////        // Lấy Inventory từ cơ sở dữ liệu dựa trên productId
////        Inventory inventory = inventoryRepository.findById(cartRequest.getProductId())
////                .orElseThrow(() -> new RuntimeException("Không tìm thấy Inventory với ID: " + cartRequest.getProductId()));
////
////        // Tạo mới đối tượng Cart với dữ liệu từ CartRequest
////        Cart newCart = new Cart();
////        newCart.setUserId(cartRequest.getUserId());
////        newCart.setProductId(cartRequest.getProductId());
////        newCart.setQuantity(cartRequest.getQuantity());
////        newCart.setTimeCreate(Instant.now());
//        return cartService.createOrUpdateCart(cartRequest);
//    }
//
//    @DeleteMapping("/user/{userId}")
//    public String deleteCartByUserId(@PathVariable Long userId) {
//        cartService.deleteCartByUserId(userId);
//        return "Giỏ hàng của user với ID " + userId + " đã được xoá thành công.";
//    }
//}