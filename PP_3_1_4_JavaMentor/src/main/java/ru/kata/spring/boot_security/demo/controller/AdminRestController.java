package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.service.*;
import ru.kata.spring.boot_security.demo.model.*;
import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/api")
public class AdminRestController {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public AdminRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUser(id);
    }

    @GetMapping("/roles/all")
    public List<Role> getRoles() {
        return roleService.getRoles();
    }

    @GetMapping("/roles/{id}")
    public Role getRole(@PathVariable Integer id) {
        return roleService.getSpecificRoles(id);
    }

    @GetMapping("/users/me")
    public User getActiveUser(Principal principal) {
        return userService.getSpecificUser(principal.getName());
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
    }

    @PostMapping("/users")
    public void setUser(@RequestBody User user) {
        userService.setUser(user);
    }

    @PutMapping("/users")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @GetMapping("/roles/ofUser/{id}")
    public String getRolesOfUser(@PathVariable Integer id) {
        return userService.getUser(id).toStringRoles();
    }

}
