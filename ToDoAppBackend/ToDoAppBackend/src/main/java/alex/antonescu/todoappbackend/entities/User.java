package alex.antonescu.todoappbackend.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Setter
    @Column(nullable = false, unique = true, length = 255)
    private String email;

    @Setter
    @Getter(AccessLevel.NONE)
    @Column(name = "password_hash",nullable = false, length = 255)
    private String passwordHash;

    @Setter
    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    private void onCreate() {
        if(createdAt == null) {
            createdAt = LocalDateTime.now();
        }
    }
}
