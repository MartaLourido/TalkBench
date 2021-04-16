
package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostRepository;
import se.kth.sda.skeleton.user.UserRepository;

import javax.validation.Valid;
import java.util.List;


@RestController
public class CommentController {
    CommentRepository commentRepository;
    PostRepository postRepository;
    UserRepository userRepository;
    AuthService authService;
    CommentService commentService;

    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository, UserRepository userRepository , AuthService authService, CommentService commentService) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.authService= authService;
        this.commentService=commentService;
    }

    //Creates a new comment
    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment commentParam) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        commentParam.setCommentedPost(post);
        commentParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
        commentService.saveComment(commentParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(commentParam);
    }

    //Returns all comments
    @GetMapping("/comments")
    public ResponseEntity <List<Comment>> listAllComments(){
        List<Comment> comments = commentRepository.findAll();
        return ResponseEntity.ok(comments);
    }

    //Deletes a comment
    @DeleteMapping("/comments/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }

    //Updates a comment
    @PutMapping("/comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @Valid @RequestBody Comment commentParam) {
       commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        commentParam.setId(id);
        Comment comment = commentService.updateComment(id, commentParam);
        return ResponseEntity.ok(comment);
    }



    // @PostMapping("/users/{id}/comments")
   // public ResponseEntity<List<Comment>> viewUserComments(@PathVariable Long id, @RequestBody Comment commentParam){

   // }


}

