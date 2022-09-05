package ewha.rankeat.login.web;

import ewha.rankeat.login.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {
    @GetMapping("/home")
    public String home(@ModelAttribute("user") User user) {return "home";}
}
