using System.Collections.Generic;
using System.Threading.Tasks;
using PostApp.API.Models;

namespace PostApp.API.Data
{
    public interface IPostRepository
    {
        Task<IEnumerable<Post>> GetAllPosts();
    }
}