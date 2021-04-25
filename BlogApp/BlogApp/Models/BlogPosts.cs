using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BlogApp.Models
{
    public partial class BlogPosts
    {
        public BlogPosts()
        {
            BlogComment = new HashSet<BlogComment>();
        }

        public int BlogPostId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedOn { get; set; }

        public virtual ICollection<BlogComment> BlogComment { get; set; }
    }
}
