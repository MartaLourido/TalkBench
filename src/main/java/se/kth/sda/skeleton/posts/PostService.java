package se.kth.sda.skeleton.posts;

import org.springframework.stereotype.Service;


@Service
public class PostService {
    PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post savePost (Post post){ return postRepository.save(post); }

    public Post updatePost(Long id, Post postParam){
        postParam.setId(id);
        Post post = postRepository.save(postParam);
        return post;
    }

   // public boolean authorized()

}
