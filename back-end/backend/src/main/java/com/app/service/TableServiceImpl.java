package com.app.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAdminDao;
import com.app.dao.ICustomerDao;
import com.app.dao.IRestaurantTableDao;
import com.app.dto.TableDTO;
import com.app.pojos.Address;
import com.app.pojos.Administration;
import com.app.pojos.BookingStatus;
import com.app.pojos.Customer;
import com.app.pojos.RestaurantTable;

@Service
@Transactional
public class TableServiceImpl implements ITableService{

	@Autowired
	private IRestaurantTableDao tDao;

	@Autowired
	private IAdminDao aDao;
	
	@Autowired
	private ICustomerDao cDao;
	
	@Override
	public List<RestaurantTable> getTableList() {
		System.out.println("in service get Table List");
		return tDao.findAll();
	}

	@Override        // Table DTO contains customer Id , Table no
	public String addTableDetails(TableDTO table) {
		System.out.println("in service Add Table...");
		Administration waiter = aDao.getOne(table.getWaiter_id());
		Customer c= cDao.getOne(table.getCustomer_id());
		RestaurantTable t = new RestaurantTable(table.getTableNo(), table.getCapacity(), table.getStatus());
		tDao.save(t);
		return "Table added...Table no : "+t.getTableNo();
	}

	@Override
	public String bookTable(TableDTO table) {
		System.out.println("in service Book Table...");
		RestaurantTable t = tDao.findBytableNo(table.getTableNo());
		t.setCustomer(cDao.getOne(table.getCustomer_id()));
		t.setStatus(BookingStatus.BOOKED);
		tDao.save(t);
//		tDao.updateTable(BookingStatus.BOOKED,cDao.getOne(table.getCustomer_id()).getId(),table.getTableNo());
		return "Table Booked by "+cDao.getOne(table.getCustomer_id()).getName();
	}
	
	@Override
	public String freeTable(int tableNo) {
		System.out.println("in service Free Table...");
		RestaurantTable t = tDao.findBytableNo(tableNo);
		
		t.setStatus(BookingStatus.FREE);
		tDao.removeCustomerFromTable(tableNo);
		return "Table No: "+tableNo+" is FREE Now...";
	}

	@Override
	public String deleteTable(int tableNo) {
		tDao.delete(tDao.findBytableNo(tableNo));
		return "Table No "+tableNo+" Deleted";
	}

	@Override
	public List<RestaurantTable> getFreeTableList(BookingStatus status) {
		System.out.println("in service get Table List With Status : "+status);
		return tDao.findByStatus(status);
	}	
	
}