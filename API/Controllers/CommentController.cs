using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly DataContext _context;
        public CommentController(DataContext context)
        {
            _context = context;

        }

        // GET: api/comment/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Comment>>> getComments(int id)
        {
            List<Comment> result = null;
          
            
                result = _context.Comment.Where(
                       s => s.BlogPost.BlogPostId == id).ToList();
           
            return result;

        }

        // POST: api/comment
        [HttpPost]
        public async Task<ActionResult<Comment>> PostComment(Comment comment)
        {
            var comentDB = await _context.BlogPost.SingleOrDefaultAsync(c => c.BlogPostId == comment.BlogPost.BlogPostId);
            comment.BlogPost = comentDB;
            _context.Comment.Add(comment);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
