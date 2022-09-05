package ewha.rankeat.login.web.user;

import ewha.rankeat.db.userdb.UserDb;
import ewha.rankeat.login.domain.user.User;
import ewha.rankeat.login.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.validation.Valid;

@Controller
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    @GetMapping("/add")
    public String addForm(@ModelAttribute("user") User user) {
        return "users/addUserForm";
    }
    @PostMapping("/add")
    public String save(@Valid @ModelAttribute User user, BindingResult result) {
        if (result.hasErrors()) {
            return "users/addUserForm";
        }
        UserDb userdb=new UserDb();
        userdb.userDb();

        //UserRepository.save(user);
        return "redirect:/home";
    }
}
