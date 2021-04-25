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
    public class BlogCommentController : ControllerBase
    {
        [HttpGet("{blogPostId}")]
        public JsonResult Get(int blogPostId)
        {
            using (var context = new BlogAppDBContext())
            {
                List<BlogComment> blogComments = context.BlogComment.Where(p => p.BlogPostId == blogPostId).ToList();
                return new JsonResult(blogComments);
            }
        }
    }
}
