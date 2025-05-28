package projeto.tcc.skillcode;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeRequests(requests -> requests
                        .antMatchers("/", "/login**", "/error**", "/api/usuarios/**", "/oauth2/**").permitAll()
                        .anyRequest().authenticated()
                        .and()
                        .oauth2Login());
        return http.build();
    }
}
