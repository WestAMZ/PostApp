using System.Collections.Generic;
using PostApp.API.Models;
using Newtonsoft.Json;
using System.Threading.Tasks;


namespace PostApp.API.Data
{
    public class PostRepository : IPostRepository
    {
        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            var postData = await System.IO.File.ReadAllTextAsync("Data/Post.json");
            var posts = JsonConvert.DeserializeObject<List<Post>>(postData);
            return posts;
        }
    }
}