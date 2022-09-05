package ewha.rankeat.db.userdb;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

public class UserDb {

    public void userDb() {
        // TODO Auto-generated method stub

        Connection conn = null;
        Statement stmt = null;
        ResultSet result = null;

        try {
            String jdbcDriver = "jdbc:mariadb://127.0.0.1:3306/rankeat";
            String dbUser = "root";
            String dbPass = "erica0529J!";
            conn = DriverManager.getConnection(jdbcDriver,dbUser,dbPass);
            stmt = conn.createStatement();

            String query = "insert into user values ('01012345675', 'password1', 'mail@naver.com', '돌맹이');";
            stmt.executeQuery(query);

            String query1 = "select phone from user;";
            String query2 = "select storename from store;";
            result = stmt.executeQuery(query1);
            while(result.next()) {
                String phone = result.getString("PHONE");
                System.out.println("유저 정보 = " + phone);
            }
            result = stmt.executeQuery(query2);
            while(result.next()) {
                String store = result.getString("STORENAME");
                System.out.println("식당 정보 =  " + store);
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }


}