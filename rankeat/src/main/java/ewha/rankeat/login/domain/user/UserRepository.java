package ewha.rankeat.login.domain.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import java.util.*;

@Slf4j
@Repository
public class UserRepository {
    private static Map<Long, User> store = new HashMap<>(); //static 사용
    private static long sequence = 0L; //static 사용
    public static User save(User user) {
        user.setPhone(++sequence);
        log.info("save: user={}", user);
        store.put(user.getPhone(), user);
        return user;
    }
    public User findById(Long id) {
        return store.get(id);
    }
    public Optional<User> findByLoginId(String loginId) {
        return findAll().stream()
                .filter(m -> m.getLoginId().equals(loginId))
                .findFirst();
    }
    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }
    public void clearStore() {
        store.clear();
    }
}
