package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAdminDao;
import com.app.dao.IIngredientDao;
import com.app.dao.ISupplierDao;
import com.app.dto.SupplierDTO;
import com.app.dto.SupplierResponseDTO;
import com.app.pojos.SupplierIngredient;
import com.app.pojos.SupplierIngredientPk;

@Service
@Transactional
public class SupplierServiceImpl implements ISupplierService {

	@Autowired
	private ISupplierDao supplierRepo;

	@Autowired
	private IAdminDao adminRepo;

	@Autowired
	private IIngredientDao ingredientRepo;

	public String addSupplierIngredient(SupplierDTO supplier) {

		try {

			supplierRepo.save(new SupplierIngredient(adminRepo.getOne(supplier.getSupplierId()),
					ingredientRepo.getOne(supplier.getIngredientId()), supplier.getPrice()));
			return "Ingredient added successfully";
		} catch (Exception e) {
			e.printStackTrace();
			return "ingredient addition failed";
		}

	}

	public List<SupplierResponseDTO> getIngredients(int id) {
		List<SupplierIngredient> ingrdients = supplierRepo.supplier(id);

		List<SupplierResponseDTO> list = new ArrayList<SupplierResponseDTO>();

		for (SupplierIngredient supplierIngredient : ingrdients) {

     			 list.add(new SupplierResponseDTO(supplierIngredient.getIngredient().getId(),supplierIngredient.getSupplier().getName(), supplierIngredient.getIngredient().getName(), supplierIngredient.getPrice()));
		 
		}
		System.out.println(list);
		return list;
	}

	public String updateIngredient(SupplierDTO supplier) {
		try {
			SupplierIngredient s = supplierRepo.findBySupplierId(supplier.getSupplierId()).get();
			s.setPrice(supplier.getPrice());
			supplierRepo.save(s);
			return "Ingredients Updated successfully";
		} catch (Exception e) {
			e.printStackTrace();
			return "Updating ingredient failed";

		}

	}

	public String deleteIngredient(SupplierIngredientPk s) {
		try {
			supplierRepo.deleteBy(s.getSupplier(), s.getIngredient());

			return "deletetion successfull";
		} catch (Exception e) {

			e.printStackTrace();
			return "failed to delete";
		}
	}

	public List<SupplierResponseDTO> getSupplierWithIngredients(int ingredientId) {

//		List<Administration> supplier=adminRepo.findAllByRole(AdminRoles.SUPPLIER);

		List<SupplierResponseDTO> list = new ArrayList<SupplierResponseDTO>();

		List<SupplierIngredient> s = supplierRepo.ingredient(ingredientId);
		for (SupplierIngredient supplierIngredient : s) {
			list.add(new SupplierResponseDTO(supplierIngredient.getSupplier().getName(),supplierIngredient.getIngredient().getName(),
					supplierIngredient.getPrice()));
		}

		return list;
	}

}
