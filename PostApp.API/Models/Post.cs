namespace PostApp.API.Models
{
    public class Post
    {
        public int Id { set; get; }
        public string Title { set; get; }
        public string Content { set; get; }
        public string UserName { set; get; }
        public string PhotoUrl { set; get; }
    }
}