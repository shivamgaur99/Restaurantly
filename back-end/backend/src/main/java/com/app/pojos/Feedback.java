package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback extends BaseEntity {

	
	private String message;
	private int rating;
	public Feedback(String message, int rating) {
		this.message = message;
		this.rating = rating;
	}
	public Feedback() {
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	@Override
	public String toString() {
		return "Feedback [message=" + message + ", rating=" + rating + "]";
	}
	
	
	
}
