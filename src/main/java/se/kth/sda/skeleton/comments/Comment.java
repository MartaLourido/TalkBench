package se.kth.sda.skeleton.comments;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import se.kth.sda.skeleton.posts.Post;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty
    private String body;

    // @ManyToOne
    // @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    // @JsonIdentityReference(alwaysAsId = true)
    // @JoinColumn(nullable = false)

    // private Post commentedPost;



    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    // public Post getCommentedPost() { return commentedPost; }

    // public void setCommentedPost(Post commentedPost) { this.commentedPost = commentedPost;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
