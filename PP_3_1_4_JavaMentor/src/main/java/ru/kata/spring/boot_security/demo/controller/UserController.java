package ru.kata.spring.boot_security.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;
import java.security.Principal;

@Controller
@RequestMapping()
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String showStartPage() {
        return "start";
    }

    @GetMapping("/user/user")
    public String showInfoOfUser(Model model, Principal principal) {
        model.addAttribute("activeUser", userService.getSpecificUser(principal.getName()));
        return "user";
    }

    @GetMapping("/admin/users")
    public String printAllUsers(ModelMap model, Principal principal) {
        model.addAttribute("users", userService.getUsers());
        model.addAttribute("newUser", new User());
        model.addAttribute("activeUser", userService.getSpecificUser(principal.getName()));
        return "users";
    }
}
