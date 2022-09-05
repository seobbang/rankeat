package ewha.rankeat.login.domain.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;


import javax.validation.constraints.NotEmpty;

@Data
public class User {
    private Long phone;
    @NotEmpty
    private String loginId; //로그인 ID
    @NotEmpty
    private String password;
    @NotEmpty
    private String email; //이메일
    @NotEmpty
    private String name; //사용자 이름

}
