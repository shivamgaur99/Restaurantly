package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ICartDao;
import com.app.dao.ICustomerDao;
import com.app.dao.IMenuDao;
import com.app.dto.CartDTO;
import com.app.dto.CartItemsDTO;
import com.app.dto.MenuDTO;
import com.app.pojos.Cart;
import com.app.pojos.CartPk;
import com.app.pojos.Customer;
import com.app.pojos.Menu;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;

@Service
@Transactional
public class CartServiceImpl implements ICartService {
	
	@Autowired
	private ICartDao cartRepo;
	
	@Autowired
	private ICustomerDao custRepo;
	
	@Autowired
	private IMenuDao menuRepo;

	@Override
	public String addToCart(CartDTO cartDto) {
		Customer c = custRepo.getOne(cartDto.getCustId());
		Menu m = menuRepo.getOne(cartDto.getMenuId());
		cartRepo.save(new Cart(c, m, cartDto.getQty())); 
		return "Added to cart";
	}

	@Override
	public String deleteFromCart(int custId, int menuId) {
		cartRepo.deleteById(new CartPk(custId, menuId));
		return "Removed Item From Cart";
	}

	@Override
	public String updateCartQuanity(int custId, int menuId, int qty) {
		Cart cart = cartRepo.findById(new CartPk(custId, menuId)).get();
		cartRepo.save(new Cart(custRepo.getOne(custId), menuRepo.getOne(menuId), cart.getQuantity()+qty));
		return "updated cart Quantity";
	}

	@Override
	public List<CartItemsDTO> getAllItems(int custId) {
		List<Cart> cart = cartRepo.findByCustomerId(custId);
		List<Integer> menuIdList = new ArrayList<>();
		for (Cart c : cart) {
			menuIdList.add(c.getMenu().getId());
		}
		List<Menu> menuList = menuRepo.findAllById(menuIdList);
		List<CartItemsDTO> cartItems = new ArrayList<>();
		for (Cart c : cart) {
			Menu menu = menuList.get(menuList.indexOf(menuRepo.getOne(c.getMenu().getId())));
			double amount = c.getQuantity() * menu.getPrice();
			cartItems.add(new CartItemsDTO(menu.getId(),menu.getMenuName(), c.getQuantity(), amount));
		}
		return cartItems;
	}
	
	

}
