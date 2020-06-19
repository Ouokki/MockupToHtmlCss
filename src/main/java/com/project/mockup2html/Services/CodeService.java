package com.project.mockup2html.Services;

import java.util.List;
import javax.validation.Valid;
import org.springframework.stereotype.Service;

import com.project.mockup2html.Models.Code;
import com.project.mockup2html.Models.ImageUI;
import com.project.mockup2html.Models.User;


@Service
public interface CodeService {
	Code findById(Long id);
	Code findByImageUI(ImageUI imageUI);
	List<Code> findByUser(User user);
	List<Code> findAll();
	Code save(@Valid Code code);

}