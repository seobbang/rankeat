package ewha.rankeat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class RankeatApplication {
	public void test() throws Exception {
		Class.forName("org.mariadb.jdbc.Driver"); // 마리아DB
		// Class.forName("com.mysql.jdbc.Driver")

		Connection con = DriverManager.getConnection("jdbc:mariadb://127.0.0.1:3306/rankeat", "root", "erica0529J!"); // 마리아 DB
		System.out.println(con);
	}
	public static void main(String[] args) {
		SpringApplication.run(RankeatApplication.class, args);

	}

}
