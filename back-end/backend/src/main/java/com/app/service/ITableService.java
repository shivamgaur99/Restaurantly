package com.app.service;

import java.util.List;

import com.app.dto.TableDTO;
import com.app.pojos.BookingStatus;
import com.app.pojos.RestaurantTable;

public interface ITableService {

	public List<RestaurantTable> getTableList();

	public  String addTableDetails(TableDTO table);

	public String bookTable(TableDTO table);

	public String freeTable(int tableNo);

	public String deleteTable(int tableNo);

	public List<RestaurantTable> getFreeTableList(BookingStatus status);
}
