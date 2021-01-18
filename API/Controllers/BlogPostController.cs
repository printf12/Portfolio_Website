using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities;
using API.Helpers;
using System.IO;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;
using System.Net.Http;
using DocumentFormat.OpenXml.Drawing.ChartDrawing;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostController : ControllerBase
    {
        private readonly DataContext _context;

        public BlogPostController(DataContext context)
        {
            _context = context;
        }

        // GET: api/BlogPost
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogPost()
        {
            return await _context.BlogPost.ToListAsync();
        }

        // GET: api/BlogPost/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost>> GetBlogPost(int id)
        {
            var blogPost = await _context.BlogPost.FindAsync(id);

            if (blogPost == null)
            {
                return NotFound();
            }

            return blogPost;
        }



        // PUT: api/BlogPost/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost(int id, BlogPost bolgPost)
        {
            if (id != bolgPost.BlogPostId)
            {
                return BadRequest();
            }

            _context.Entry(bolgPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // GET: api/BlogsCount/1
        [HttpGet("BlogsCount/{blogCount}")]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogsMore(int blogCount)
        {
            var blogs = await _context.BlogPost.Take(blogCount + 3).ToListAsync();

            if (blogs == null)
            {
                return NotFound();
            }

            return blogs;
        }

        // GET: api/BlogsCount/1
        [HttpGet("GetBlogsCount")]
        public int GetBlogsCount()
        {
            var blogsCount =  _context.BlogPost.ToList().Count;
            return blogsCount;
        }


        // GET: api/Blog
        [HttpGet("BlogPerPage/{pageIndex}")]
        public async Task<ActionResult<IEnumerable<BlogPost>>> GetBlogPerPage(int pageIndex)
        {
            return await _context.BlogPost.Skip(pageIndex * 6).Take(6).ToListAsync();
        }

        // POST: api/BlogPost
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BlogPost>> PostBlogPost(BlogPost blogPost)
        {
            _context.BlogPost.Add(blogPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogPost", new { id = blogPost.BlogPostId }, blogPost);
        }

        // DELETE: api/BlogPost/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BlogPost>> DeleteBlogPost(int id)
        {
            var bolgPost = await _context.BlogPost.FindAsync(id);
            if (bolgPost == null)
            {
                return NotFound();
            }

            _context.BlogPost.Remove(bolgPost);
            await _context.SaveChangesAsync();

            return bolgPost;
        }

        private bool BlogPostExists(int id)
        {
            return _context.BlogPost.Any(e => e.BlogPostId == id);
        }

        [HttpPost("uploadFile")]
        public string Upload()
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }
            return folderName;

        }

        [HttpGet("GetImage/{imageName}")]
        [Produces("image/png")]
        public IActionResult GetImage(string imageName)
        
        {
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
            var fullPath = Path.Combine(pathToSave, imageName);
            //path = picture.Path;
            var file = Path.Combine(Directory.GetCurrentDirectory(), fullPath);
            //return PhysicalFile(file, "image/png");
            if (!System.IO.File.Exists(file)) return NotFound();

            return PhysicalFile(file, "image/jpeg");
        }

    }
}
