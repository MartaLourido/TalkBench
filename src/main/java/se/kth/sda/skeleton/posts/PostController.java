package se.kth.sda.skeleton.posts;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exception.ResourceNotFoundException;

import javax.validation.Valid;
import java.util.List;

/*
    @TODO create the methods needed to implement the API.
    Don't forget to add necessary annotations.
 */
@RestController
public class PostController {

    PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    //Creates a new post
    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post post) {
        postRepository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
    }

    //Returns all posts
    @GetMapping("/posts")
    public List<Post> listAllPosts(){
        List<Post> posts = postRepository.findAll();
        return posts;
    }

    //Returns a post by id
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getArticle(@PathVariable Long id){
        Post post = postRepository.
                findById(id).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post);
    }

    //Deletes a post
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Post> deletePost(@PathVariable Long id) {
        Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        postRepository.delete(post);
        return ResponseEntity.ok(post);
    }

    //Updates a post
    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updateArticle(@PathVariable Long id, @RequestBody Post updatedPost) {
        postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        updatedPost.setId(id);
        Post post = postRepository.save(updatedPost);
        return ResponseEntity.ok(post);
    }


}
