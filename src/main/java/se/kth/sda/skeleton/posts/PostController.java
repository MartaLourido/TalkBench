package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;

import java.util.List;

@RequestMapping("/posts")
@RestController
public class PostController {
    PostRepository postRepository;
    PostService postService;


    @Autowired
    public PostController(PostRepository postRepository, PostService postService) {
        this.postRepository = postRepository;
        this.postService = postService;
    }
  @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post postParam){
        Post post = postService.savePost(postParam);
        return ResponseEntity.status(HttpStatus.CREATED).body(post);
  }
  @GetMapping
    public ResponseEntity<List<Post>> viewAllPosts(){
        List<Post> posts = postRepository.findAll();
        return ResponseEntity.ok(posts);
  }
  @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
       Post post = postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
       return ResponseEntity.ok(post);
  }
  @DeleteMapping ("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost (@PathVariable Long id){
        postRepository.findById(id).orElseThrow(ResourceNotFoundException::new);
        postRepository.deleteById(id);
  }

  @PutMapping("/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable Long postId, @RequestBody Post postParam){
         postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        postParam.setId(postId);
      Post post = postRepository.save(postParam);
        return ResponseEntity.ok(post);
  }
}
