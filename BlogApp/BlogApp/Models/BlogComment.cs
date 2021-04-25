using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BlogApp.Models
{
    public partial class BlogComment
    {
        public int CommentId { get; set; }
        public int BlogPostId { get; set; }
        public string Comment { get; set; }
        public DateTime CommentedOn { get; set; }

        public virtual BlogPosts BlogPost { get; set; }
    }
}
