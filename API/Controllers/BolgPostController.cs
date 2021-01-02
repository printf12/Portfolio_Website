using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Entities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BolgPostController : ControllerBase
    {
        private readonly DataContext _context;

        public BolgPostController(DataContext context)
        {
            _context = context;
        }

        // GET: api/BolgPost
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BolgPost>>> GetBolgPost()
        {
            return await _context.BolgPost.ToListAsync();
        }

        // GET: api/BolgPost/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BolgPost>> GetBolgPost(int id)
        {
            var bolgPost = await _context.BolgPost.FindAsync(id);

            if (bolgPost == null)
            {
                return NotFound();
            }

            return bolgPost;
        }

        // PUT: api/BolgPost/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBolgPost(int id, BolgPost bolgPost)
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
                if (!BolgPostExists(id))
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

        // POST: api/BolgPost
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<BolgPost>> PostBolgPost(BolgPost bolgPost)
        {
            _context.BolgPost.Add(bolgPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBolgPost", new { id = bolgPost.BlogPostId }, bolgPost);
        }

        // DELETE: api/BolgPost/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BolgPost>> DeleteBolgPost(int id)
        {
            var bolgPost = await _context.BolgPost.FindAsync(id);
            if (bolgPost == null)
            {
                return NotFound();
            }

            _context.BolgPost.Remove(bolgPost);
            await _context.SaveChangesAsync();

            return bolgPost;
        }

        private bool BolgPostExists(int id)
        {
            return _context.BolgPost.Any(e => e.BlogPostId == id);
        }
    }
}
