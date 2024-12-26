package com.app.service;
import java.util.List;

import com.app.dto.CartDTO;
import com.app.dto.CartItemsDTO;

public interface ICartService {
	String addToCart(CartDTO cartDto);
	
	String deleteFromCart(int custId, int menuId);
	
	String updateCartQuanity(int custId, int menuId, int qty);
	
	List<CartItemsDTO> getAllItems(int custId);
}

