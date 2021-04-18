import Api from "./Api";

class CommentsApi {

    getComments(postId) {
    return Api.get('/posts/' + postId + '/comments');
    }

    // listAllComments() {
    //    return Api.get('/comments');
    // }

    // a comment created for a post by post id
    createComment(comment, postId) {
        return Api.post('/posts/' + postId + '/comments', comment);
    }

    updateComment(comment, id) {
        return Api.put('/comments/'+ id, comment);
    }

    deleteComment(id) {
        return Api.delete('/comments/'+ id);
    } 
}

export default new CommentsApi();