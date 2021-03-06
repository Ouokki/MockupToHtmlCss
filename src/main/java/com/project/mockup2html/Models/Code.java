package com.project.mockup2html.Models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
public class Code {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String htmlcode;
	
	@OneToOne
	@JoinColumn(name="id_img", nullable = false, referencedColumnName = "id")
	private ImageUI imageUI;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="id_user", nullable = false)
	private User userCode;
	
	public Code() {
		// TODO Auto-generated constructor stub
	}
	public Code(String htmlcode, ImageUI imageUI, User usercode) {
		super();
		this.imageUI = imageUI;
		this.htmlcode = htmlcode;
		this.userCode = usercode;
	}
	public Long getId_img() {
		return id;
	}
	public void setId_img(Long id_img) {
		this.id = id_img;
	}
	
	public String getHtmlCode() {
		return htmlcode;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getHtmlcode() {
		return htmlcode;
	}
	public void setHtmlcode(String htmlcode) {
		this.htmlcode = htmlcode;
	}
	public ImageUI getImageUI() {
		return imageUI;
	}
	public void setImageUI(ImageUI imageUI) {
		this.imageUI = imageUI;
	}
	public User getUser() {
		return userCode;
	}
	public void setUser(User user) {
		this.userCode = user;
	}

	
}
