using BlogApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlogApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogPostsController : ControllerBase
    {
        [HttpGet]
        public JsonResult Get()
        {
            using (var context = new BlogAppDBContext())
            {
                List<BlogPosts> blogPosts = context.BlogPosts.ToList();
                foreach (BlogPosts blog in blogPosts)
                {
                    blog.BlogComment = context.BlogComment
                        .Where(p => p.BlogPostId == blog.BlogPostId).ToList();

                }
                return new JsonResult(blogPosts);
            }
        }

        [HttpGet("{blogId}")]
        public JsonResult Get(int blogId)
        {
            using (var context = new BlogAppDBContext())
            {
                BlogPosts blogPost = context.BlogPosts.FirstOrDefault(p => p.BlogPostId == blogId);
                blogPost.BlogComment = context.BlogComment
                        .Where(p => p.BlogPostId == blogId).ToList();
                return new JsonResult(blogPost);
            }
        }

        [Route("GetBlogComments/{blogPostId}")]
        public JsonResult GetBlogComments(int blogPostId)
        {
            using (var context = new BlogAppDBContext())
            {
                List<BlogComment> blogComments = context.BlogComment.Where(p => p.BlogPostId == blogPostId)
                    .ToList();
                return new JsonResult(blogComments);
            }
        }
    }

}
