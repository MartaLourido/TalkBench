
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


    //Creates a new comment + Works in Postman

    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment commentParam) {
       Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        commentParam.setCommentedPost(post);
        commentParam.setUser(userRepository.findByEmail(authService.getLoggedInUserEmail()));
       Comment comment = commentService.saveComment(commentParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(comment);
    }


    // !!! New method !!! Works in Postman
    //Returns all comments on post given by postId
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> getComments(@PathVariable Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        List<Comment> comment = commentRepository.findAll();
        return ResponseEntity.ok(comment);
    }


    //Deletes a comment 
    @DeleteMapping("/comments/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }



    //Returns all comments 
    @GetMapping("/comments")
    public ResponseEntity <List<Comment>> listAllComments(){
        List<Comment> comments = commentRepository.findAll();
        return ResponseEntity.ok(comments);
    }


    //Updates a comment 
    @PutMapping("/comments/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment commentParam) {
       commentRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        Comment comment = commentService.updateComment(id, commentParam);
        return ResponseEntity.ok(comment);
    }

}

